import gameboardFactory from './gameboardFactory';
import wrapShip from '../ships/wrapShipFactory';
/* global test expect beforeEach */

const testBoard = gameboardFactory();

test('no fit column', () => {
  expect(testBoard.rows).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(testBoard.columns).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);

  testBoard.placeShip({
    ship: wrapShip.cruiser({ isHorizontal: true }),
    row: 1,
    column: 'i',
  });
  expect(testBoard.ships).toEqual([]);
});

test('no fit row', () => {
  testBoard.placeShip({
    ship: wrapShip.cruiser({ isHorizontal: false }),
    row: 9,
    column: 'a',
  });
  expect(testBoard.ships).toEqual([]);
});

test('placeShip horiz', () => {
  const ship = wrapShip.cruiser({ isHorizontal: true });
  testBoard.placeShip({
    ship,
    row: 1,
    column: 'a',
  });
  const desiredObj = {
    ship,
    row: 1,
    column: 'a',
    pos: ['a1', 'b1', 'c1'],
  };

  expect(testBoard.ships[0]).toMatchObject(desiredObj);
});

test('placeShip vert', () => {
  const ship = wrapShip.battleship({ isHorizontal: false });
  testBoard.placeShip({
    ship,
    row: 3,
    column: 'd',
  });
  const desiredObj = {
    ship,
    row: 3,
    column: 'd',
    pos: ['d3', 'd4', 'd5', 'd6'],
  };

  expect(testBoard.ships[1]).toMatchObject(desiredObj);
});
