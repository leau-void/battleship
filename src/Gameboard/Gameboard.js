import './Gameboard.css';
import './ship-port.css';

export default () => {
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  const ships = [];
  const hits = [];
  const misses = [];

  const getRows = () => [...rows];
  const getColumns = () => [...columns];
  const getShips = () => [...ships];
  const getHits = () => [...hits];
  const getMisses = () => [...misses];

  const getRelPositions = ({ length, targetArray, start }) => {
    const startIndex = targetArray.findIndex((curr) => curr === start);
    return [...targetArray].splice(startIndex, length);
  };

  const getTargetArrayAndStart = ({ ship, row, column }) => {
    const targetArray = ship.isHorizontal ? columns : rows;
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

  const checkOverlap = function checkOverlapWithEveryShip(pos) {
    return pos.every((position) => ships.every((ship) => !ship.pos.includes(position)));
  };

  const checkPlace = function checkCanPlaceThere({ ship, row, column, pos }) {
    const posArray = pos || getAbsPositions({ ship, row, column });
    if (posArray.length !== ship.length) return false;
    return checkOverlap(posArray);
  };

  const placeShip = function placeShipBoard({ ship, row, column }) {
    const pos = getAbsPositions({ ship, row, column });
    const canPlace = checkPlace({ ship, row, column, pos });
    if (!canPlace) return false;

    ships.push({ ship, row, column, pos });
    return true;
  };

  const receiveAttack = function receiveAttack(coords) {
    const target = ships.find((shipObj) => shipObj.pos.includes(coords));
    if (target) {
      target.ship.hit(target.pos.findIndex((curr) => curr === coords));
      hits.push(coords);
    } else misses.push(coords);
    document.dispatchEvent(new Event('receivedAttack'));
  };

  const isAllSunk = () => ships.every((shipObj) => shipObj.ship.isSunk());

  return {
    getRows,
    getColumns,
    getShips,
    placeShip,
    checkPlace,
    receiveAttack,
    isAllSunk,
    getHits,
    getMisses,
  };
};
