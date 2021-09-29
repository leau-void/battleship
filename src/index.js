import wrapCreateShips from './Ship/wrapCreateShips';
import Gameboard from './Gameboard/Gameboard';
import Player from './Player/Player';
import DisplayController from './DisplayController/DisplayController';
import './main.css';

const domPlayer1 = document.querySelector('.board_player1');
const domPlayer2 = document.querySelector('.board_player2');

const textOutput1 = document.querySelector('.console__line-1');
const textOutput2 = document.querySelector('.console__line-2');

const boardPlayer1 = Gameboard();
const boardPlayer2 = Gameboard();

const player = Player({
  name: 'The Human',
  isHuman: true,
  starts: true,
  self: boardPlayer1,
  enemy: boardPlayer2,
});

const cpu = Player({
  name: 'The Computer',
  isHuman: false,
  starts: false,
  self: boardPlayer2,
  enemy: boardPlayer1,
});

const refObj = {
  player1: {
    player,
    board: boardPlayer1,
    cacheDOM: domPlayer1,
  },
  player2: {
    player: cpu,
    board: boardPlayer2,
    cacheDOM: domPlayer2,
  },
};

const displayController = DisplayController(refObj);

boardPlayer2.placeRandom(wrapCreateShips());
displayController.updateDisplay();

const shipsPlayer1 = {
  shipsArray: wrapCreateShips().map((ship, index) => ({ ship, pos: [`p${index}`] })),
  cacheDOM: document.querySelector('.ship-port'),
};

const sendTextOutput = (string1, string2) => {
  textOutput1.classList.remove('anim-typewriter');
  window.setTimeout(() => {
    textOutput1.textContent = string1;
    textOutput2.textContent = '';
    textOutput1.classList.add('anim-typewriter');
  }, 10);

  textOutput2.classList.remove('anim-typewriter');
  window.setTimeout(() => {
    textOutput2.textContent = string2;
    textOutput2.classList.add('anim-typewriter');
  }, 1500);
};

const handleAttack = (e) => {
  const target = e.target.closest('[data-coords]');
  if (player.isTurn && target) player.attack(target.dataset.coords);
};

const checkEnd = ({ player1, player2 }) => {
  const players = [player1, player2];
  const loser = players.find(({ board }) => board.isAllSunk());

  if (loser) return players.find((curr) => curr !== loser);
  return false;
};

const handleEnd = (winner) => {
  sendTextOutput(`${winner.player.getName()} wins!`);
  winner.player.switchTurn();
};

const dragstartHandler = (e) => {
  e.target.style.top = `unset`;
  e.target.style.left = `unset`;
  const {
    target: {
      dataset: { index },
    },
  } = e;
  const horizClass = [...e.target.classList].find((className) => className.includes('horizontal'));
  const isHoriz = horizClass.split('_')[2];
  shipsPlayer1.shipsArray[index].ship.isHorizontal = isHoriz === 'true';

  e.dataTransfer.setData('text/plain', `${index}`);
};

const parseSize = (string) => Math.round(Number(string.replace(/[px]/g, '')));

const mouseDownHandler = (e) => {
  const targetStyles = window.getComputedStyle(e.target);
  const width = parseSize(targetStyles.getPropertyValue('width'));
  const height = parseSize(targetStyles.getPropertyValue('height'));
  const smallest = width < height ? width : height;

  const offsetX = (e.offsetX || e.layerX) - smallest / 2;
  const offsetY = (e.offsetY || e.layerY) - smallest / 2;

  e.target.style.top = `${offsetY}px`;
  e.target.style.left = `${offsetX}px`;
};

const mouseUpHandler = (e) => {
  e.target.style.top = `unset`;
  e.target.style.left = `unset`;
};

const start = () => {
  if (document.querySelectorAll('.ship-port__anchor .ship').length) return;
  document.querySelector('.setup').style.display = 'none';
  domPlayer1.classList.add('board_size_s');
  document.querySelector('.label_player2').classList.remove('label_hidden');
  window.setTimeout(() => domPlayer2.classList.remove('board_size_s'), 0);
  displayController.updateDisplay();
  domPlayer2.addEventListener('click', (e) => handleAttack(e));
  sendTextOutput('You can attack the Enemy Fleet by clicking on a cell.', 'Good luck!');
};

document.querySelector('.modal__button').addEventListener('click', (e) => {
  const modal = document.querySelector('.modal');
  e.preventDefault();
  player.setName(document.querySelector('.modal__input').value || 'Player One');
  modal.classList.add('modal_transparent');
  window.setTimeout(() => {
    modal.classList.add('modal_hidden');
    sendTextOutput(
      `Welcome ${player.getName()}, please place your Fleet.`,
      'You can Drag and Drop or generate a random placement.'
    );
  }, 500);
});

displayController.displayShips(shipsPlayer1);
domPlayer1.addEventListener('dragover', (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
});
domPlayer1.addEventListener('drop', (e) => {
  e.preventDefault();
  if (!e.target.classList.contains('board__cell')) return;

  const data = e.dataTransfer.getData('text/plain');
  const pos = e.target.dataset.coords;

  const obj = {
    ship: shipsPlayer1.shipsArray[Number(data)].ship,
    row: Number(pos.slice(1)),
    column: pos.charAt(0),
  };

  const oldShip = boardPlayer1.removeShip(obj.ship);

  const isPlaced = boardPlayer1.placeShip(obj);

  if (isPlaced) e.target.appendChild(document.querySelector(`[data-index="${data}"]`));
  if (!isPlaced) boardPlayer1.placeShip(oldShip);
});

const shipsDiv = document.querySelectorAll('[data-index]');
shipsDiv.forEach((div) => {
  div.addEventListener('dragstart', dragstartHandler);
  div.addEventListener('mousedown', mouseDownHandler);
  div.addEventListener('mouseup', mouseUpHandler);
});

document.querySelector('.setup__rotate').addEventListener('click', (e) => {
  document.querySelector('.ship-port').classList.toggle('ship-port_rotated');
  const shipsInPort = document.querySelectorAll('.ship-port__anchor .ship');
  shipsInPort.forEach((div) => div.classList.toggle('ship_is-horizontal_false'));
  shipsInPort.forEach((div) => div.classList.toggle('ship_is-horizontal_true'));
});

document.querySelector('.setup__random').addEventListener('click', () => {
  const shipsPlaced = boardPlayer1.getShips().map((shipObj) => shipObj.ship.name);
  const notPlacedShips = wrapCreateShips().filter((ship) => !shipsPlaced.includes(ship.name));
  boardPlayer1.placeRandom(notPlacedShips);
  displayController.updateDisplay();
  document.querySelector('.ship-port').replaceChildren();
  start();
});

document.querySelector('.setup__start').addEventListener('click', start);

document.addEventListener('receivedAttack', () => {
  displayController.updateDisplay();

  const winner = checkEnd(refObj);
  if (!winner) {
    player.switchTurn();
    cpu.switchTurn();
  } else handleEnd(winner);
});

document.addEventListener('shipSunk', (e) => {
  const who = player.isTurn ? player : cpu;
  const other = who === player ? cpu : player;
  const string =
    who === player
      ? `You have sunk ${other.getName()}'s ${e.detail}!`
      : `${other.getName()} has sunk your ${e.detail}!`;
  sendTextOutput(string);
});
