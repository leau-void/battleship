import buildElementsTree from './buildElementsTree';

export default ({ boards, players }) => {
  const boardPlayer = document.querySelector('.board_player');
  const boardCPU = document.querySelector('.board_cpu');
  const cacheDOM = {
    boardPlayer,
    boardCPU,
  };
  const populateBoard = ({ boardObj, boardDOM }) => {
    boardObj.columns.forEach((column) => {
      boardObj.rows.forEach((row) => {
        boardDOM;
      });
    });
  };

  const setupBoards = () => {
    populateBoard({ boardObj: boards.player, boardDOM: cacheDOM.boardPlayer });
    populateBoard({ boardObj: boards.cpu, boardDOM: cacheDOM.boardCPU });
  };

  return { cacheDOM, boards, players, setupBoards };
};
