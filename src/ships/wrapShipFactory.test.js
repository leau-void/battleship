import wrapShip from './wrapShipFactory';
/* global test expect */

test('carrier', () => {
  const testShip = wrapShip.carrier({ isHorizontal: false });
  expect(testShip.length).toBe(5);
  expect(testShip.isHorizontal).toBe(false);
  expect(testShip.name).toBe('Carrier');
});

test('battleship', () => {
  const testShip = wrapShip.battleship({ isHorizontal: true });
  expect(testShip.length).toBe(4);
  expect(testShip.isHorizontal).toBe(true);
  expect(testShip.name).toBe('Battleship');
});

test('cruiser', () => {
  const testShip = wrapShip.cruiser({ isHorizontal: false });
  expect(testShip.length).toBe(3);
  expect(testShip.isHorizontal).toBe(false);
  expect(testShip.name).toBe('Cruiser');
});

test('submarine', () => {
  const testShip = wrapShip.submarine({ isHorizontal: true });
  expect(testShip.length).toBe(3);
  expect(testShip.isHorizontal).toBe(true);
  expect(testShip.name).toBe('Submarine');
});

test('destroyer', () => {
  const testShip = wrapShip.destroyer({ isHorizontal: false });
  expect(testShip.length).toBe(2);
  expect(testShip.isHorizontal).toBe(false);
  expect(testShip.name).toBe('Destroyer');
});
