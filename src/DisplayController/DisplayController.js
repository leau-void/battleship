import buildElementsTree from './buildElementsTree';

export default ({ player1, player2 }) => {
  const populateBoard = ({ board, cacheDOM }) => {
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

  const displayShips = ({ board, cacheDOM }) => {
    const ships = board.getShips();
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

  const displayShots = ({ board, cacheDOM }) => {
    const hits = board.getHits();
    const misses = board.getMisses();
    const elemObj = {
      tag: 'div',
      classes: ['board__target'],
      text: '\u25CE',
    };

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
    [player1, player2].forEach((player) => {
      player.cacheDOM.replaceChildren();
      populateBoard(player);
      displayShips(player);
      displayShots(player);
    });
  };

  const handleAttack = (event) => {
    const { player } = player1;
    const target = event.target.closest('[data-coords]');
    if (!player.isTurn || !target) return;
    const attackValid = player.attack(target.dataset.coords);

    if (attackValid) {
      updateDisplay();

      player.switchTurn();
      player2.player.switchTurn();

      updateDisplay();

      player.switchTurn();
      player2.player.switchTurn();
    }
  };

  const setupBoards = () => {
    updateDisplay();

    player2.cacheDOM.addEventListener('click', (e) => handleAttack(e));
  };

  return { setupBoards, updateDisplay };
};
