import buildElementsTree from './buildElementsTree';

export default ({ player1, player2 }) => {
  const populateBoard = ({ board, cacheDOM }) => {
    board.getRows().forEach((row) => {
      board.getColumns().forEach((column) => {
        const elem = {
          tag: 'div',
          classes: ['board__cell'],
          attributes: { 'data-coords': `${column}${row}` },
        };
        cacheDOM.appendChild(buildElementsTree(elem));
      });
    });
  };

  const displayShips = ({ board, cacheDOM }) => {
    const ships = board.getShips();
    ships.forEach((shipObj) => {
      const elem = {
        tag: 'div',
        classes: [
          'ship',
          `ship_is-horizontal_${shipObj.ship.isHorizontal}`,
          `ship_length_${shipObj.ship.length}`,
        ],
      };
      if (shipObj.ship.isSunk()) elem.classes.push('ship_sunk');
      const target = cacheDOM.querySelector(`[data-coords=${shipObj.pos[0]}]`);
      target.appendChild(buildElementsTree(elem));
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
      const elem = {
        tag: 'div',
        classes: ['board__shot', 'board_hit'],
        children: [elemObj],
      };
      const target = cacheDOM.querySelector(`[data-coords=${hit}]`);
      target.appendChild(buildElementsTree(elem));
    });

    misses.forEach((miss) => {
      const elem = {
        tag: 'div',
        classes: ['board__shot', 'board_miss'],
        children: [elemObj],
      };
      const target = cacheDOM.querySelector(`[data-coords=${miss}]`);
      target.appendChild(buildElementsTree(elem));
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

  return { updateDisplay };
};
