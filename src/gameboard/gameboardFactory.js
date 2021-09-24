export default () => {
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  const ships = [];
  const placeShip = function placeShipBoard({ ship, row, column }) {
    this.ships.push(ship);
  };
  return { rows, columns, ships, placeShip };
};
