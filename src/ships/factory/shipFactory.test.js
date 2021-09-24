import shipFactory from './shipFactory';
/* global test expect */

const testShip = shipFactory({
  length: 2,
  isHorizontal: true,
  name: 'Destroyer',
});

test('props', () => {
  expect(testShip.length).toBe(2);
  expect(testShip.isHorizontal).toBe(true);
  expect(testShip.name).toBe('Destroyer');
  expect(testShip.hits).toEqual([]);
  expect(testShip.hit).toBeInstanceOf(Function);
  expect(testShip.isSunk).toBeInstanceOf(Function);
});

test('hit func', () => {
  testShip.hit(1);
  expect(testShip.hits).toEqual([1]);

  testShip.hit(2);
  expect(testShip.hits).toEqual([1]);
});

test('checkSunk func', () => {
  expect(testShip.isSunk()).toBe(false);

  testShip.hit(0);
  expect(testShip.isSunk()).toBe(true);
});
