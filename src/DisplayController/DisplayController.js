import buildElementsTree from './buildElementsTree';

export default ({ players }) => {
  const boardPlayer1 = document.querySelector('.board_player1');
  const boardPlayer2 = document.querySelector('.board_player2');

  const player1Cache = {
    player: players.player1,
    cacheDOM: boardPlayer1,
  };

  const player2Cache = {
    player: players.player2,
    cacheDOM: boardPlayer2,
  };

  const populateBoard = ({ player, cacheDOM }) => {
    const board = player.getSelf();
    board.getRows().forEach((row) => {
      board.getColumns().forEach((column) => {
        const elem = buildElementsTree({
          tag: 'div',
          classes: ['board__cell'],
          attributes: { 'data-coords': `${column}${row}` },
        });
        cacheDOM.appendChild(elem);
      });
    });
  };

  const displayShips = ({ player, cacheDOM }) => {
    const ships = player.getSelf().getShips();
    ships.forEach((shipObj) => {
      const elem = buildElementsTree({
        tag: 'div',
        classes: [
          'ship',
          `ship_is-horizontal_${shipObj.ship.isHorizontal}`,
          `ship_length_${shipObj.ship.length}`,
        ],
      });
      const target = cacheDOM.querySelector(`[data-coords=${shipObj.pos[0]}]`);
      target.appendChild(elem);
    });
  };

  const displayShots = ({ player, cacheDOM }) => {
    const hits = player.getSelf().getHits();
    const misses = player.getSelf().getMisses();
    const elemObj = {
      tag: 'div',
      classes: ['board__target'],
      text: '\u25CE',
    };
    console.log(hits);
    console.log(misses);

    hits.forEach((hit) => {
      const elem = buildElementsTree({
        tag: 'div',
        classes: ['board__shot', 'board_hit'],
        children: [elemObj],
      });
      const target = cacheDOM.querySelector(`[data-coords=${hit}]`);
      target.appendChild(elem);
    });

    misses.forEach((miss) => {
      const elem = buildElementsTree({
        tag: 'div',
        classes: ['board__shot', 'board_miss'],
        children: [elemObj],
      });
      const target = cacheDOM.querySelector(`[data-coords=${miss}]`);
      target.appendChild(elem);
    });
  };

  const updateDisplay = () => {
    boardPlayer1.replaceChildren();
    boardPlayer2.replaceChildren();

    populateBoard(player1Cache);
    populateBoard(player2Cache);

    displayShips(player1Cache);
    displayShots(player1Cache);

    displayShips(player2Cache);
    displayShots(player2Cache);
  };

  const handleAttack = (event) => {
    const { player } = player1Cache;
    const target = event.target.closest('[data-coords]');
    if (!player.isTurn || !target) return;
    const attackValid = player.attack(target.dataset.coords);

    if (attackValid) {
      updateDisplay();

      player.switchTurn();
      player2Cache.player.switchTurn();

      updateDisplay();

      player.switchTurn();
      player2Cache.player.switchTurn();
    }
  };

  const setupBoards = () => {
    updateDisplay();

    player2Cache.cacheDOM.addEventListener('click', (e) => handleAttack(e));
  };

  return { setupBoards, updateDisplay };
};
