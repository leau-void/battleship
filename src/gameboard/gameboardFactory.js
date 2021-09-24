export default () => {
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  const ships = [];

  const checkFits = (array, startIndex, length) => startIndex + length <= array.length - 1;

  const findStartIndex = (array, value) => array.findIndex((curr) => curr === value);

  const getTargetArray = (ship) => (ship.isHorizontal ? columns : rows);

  const getRelPositions = ({ length, targetArray, start }) => {
    const startIndex = findStartIndex(targetArray, start);
    return [...targetArray].splice(startIndex, length);
  };

  const getTargetArrayAndStart = ({ ship, row, column }) => {
    const targetArray = getTargetArray(ship);
    const start = targetArray === rows ? row : column;
    return { targetArray, start };
  };

  const getAbsPositions = ({ ship, row, column }) => {
    const { targetArray, start } = getTargetArrayAndStart({ ship, row, column });
    return getRelPositions({ length: ship.length, targetArray, start }).map((pos) => {
      if (targetArray === rows) return `${column}${pos}`;
      return `${pos}${row}`;
    });
  };

  const checkPlace = function ({ ship, row, column, pos }) {
    const posArray = pos || getAbsPositions({ ship, row, column });
    if (posArray.length === ship.length) return true;
  };

  const placeShip = function placeShipBoard({ ship, row, column }) {
    const pos = getAbsPositions({ ship, row, column });
    const canPlace = checkPlace({ ship, row, column, pos });
    if (!canPlace) return;
    //  checkFits(targetArray, findStartIndex(targetArray, start), ship.length)

    ships.push({ ship, row, column, pos });
  };
  return { rows, columns, ships, placeShip };
};
