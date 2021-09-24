import gameboardFactory from './gameboardFactory';
import wrapShip from '../ships/wrapShipFactory';
/* global test expect */

test('placeShip', () => {
  const testBoard = gameboardFactory();

  expect(testBoard.rows).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(testBoard.columns).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);

  testBoard.placeShip({
    ship: wrapShip.cruiser({ isHorizontal: true }),
    row: 'a',
    column: 1,
  });
  expect(testBoard.ships).toEqual([
    {
      ship: wrapShip.cruiser({ isHorizontal: true }),
      column: 1,
      row: ['a', 'b', 'c'],
    },
  ]);
});
