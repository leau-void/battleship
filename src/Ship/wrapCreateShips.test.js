import wrapCreateShips from './wrapCreateShips';
/* global test expect */

const ships = wrapCreateShips();

test('carrier', () => {
  const testShip = ships[0];
  expect(testShip.length).toBe(5);
  expect(testShip.isHorizontal).toBe(false);
  expect(testShip.name).toBe('Carrier');
});

test('battleship', () => {
  const testShip = ships[1];
  expect(testShip.length).toBe(4);
  expect(testShip.name).toBe('Battleship');
});

test('cruiser', () => {
  const testShip = ships[2];
  expect(testShip.length).toBe(3);
  expect(testShip.name).toBe('Cruiser');
});

test('submarine', () => {
  const testShip = ships[3];
  expect(testShip.length).toBe(3);
  expect(testShip.name).toBe('Submarine');
});

test('destroyer', () => {
  const testShip = ships[4];
  expect(testShip.length).toBe(2);
  expect(testShip.name).toBe('Destroyer');
});
