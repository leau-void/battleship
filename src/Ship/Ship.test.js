import Ship from './Ship';
/* global test expect */

const testShip = Ship({
  length: 2,
  isHorizontal: true,
  name: 'Destroyer',
});

test('props', () => {
  expect(testShip.length).toBe(2);
  expect(testShip.isHorizontal).toBe(true);
  expect(testShip.name).toBe('Destroyer');
  expect(testShip.hit).toBeInstanceOf(Function);
  expect(testShip.isSunk).toBeInstanceOf(Function);
});

test('checkSunk func', () => {
  expect(testShip.isSunk()).toBe(false);

  testShip.hit(0);
  testShip.hit(1);
  expect(testShip.isSunk()).toBe(true);
});
