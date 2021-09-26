import Gameboard from './Gameboard';
import wrapShip from '../Ship/wrapShip';
/* global test expect jest */

const testBoard = Gameboard();

test('no fit column', () => {
  testBoard.placeShip({
    ship: wrapShip.cruiser({ isHorizontal: true }),
    row: 1,
    column: 'i',
  });
  expect(testBoard.getShips()[0]).toBeUndefined();
});

test('no fit row', () => {
  testBoard.placeShip({
    ship: wrapShip.cruiser({ isHorizontal: false }),
    row: 9,
    column: 'a',
  });
  expect(testBoard.getShips()[0]).toBeUndefined();
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

  expect(testBoard.getShips()[0]).toMatchObject(desiredObj);
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

  expect(testBoard.getShips()[1]).toMatchObject(desiredObj);
});

test('overlap last ship', () => {
  const ship = wrapShip.battleship({ isHorizontal: false });
  testBoard.placeShip({
    ship,
    row: 3,
    column: 'd',
  });

  expect(testBoard.getShips()[2]).toBeUndefined();
});

test('smaller overlap', () => {
  const ship = wrapShip.battleship({ isHorizontal: false });
  testBoard.placeShip({
    ship,
    row: 1,
    column: 'd',
  });

  expect(testBoard.getShips()[2]).toBeUndefined();
});

const mockHit = jest.fn();
const mockHit2 = jest.fn();

test('attack hit', () => {
  testBoard.placeShip({
    ship: wrapShip.destroyer({ isHorizontal: true }),
    row: 8,
    column: 'h',
  });
  testBoard.getShips()[testBoard.getShips().length - 1].ship.hit = mockHit;
  testBoard.receiveAttack('h8');
  expect(testBoard.hits[0]).toEqual('h8');
  expect(testBoard.misses).toEqual([]);

  expect(mockHit).toHaveBeenCalledWith(0);
});

test('attack miss', () => {
  testBoard.getShips()[testBoard.getShips().length - 1].ship.hit = mockHit2;
  testBoard.receiveAttack('h9');
  expect(testBoard.hits[0]).toEqual('h8');
  expect(testBoard.misses[0]).toEqual('h9');

  expect(mockHit2.mock.calls.length).toBe(0);

  // make the mocked boat not falsify allSunk test
  const mockSunk = jest.fn(() => true);
  testBoard.getShips()[testBoard.getShips().length - 1].ship.isSunk = mockSunk;
});

test('not all sunk', () => {
  expect(testBoard.isAllSunk()).toBe(false);
});

test('all sunk', () => {
  const allPos = testBoard.getShips().reduce((arr, shipObj) => {
    const newArr = [...arr, ...shipObj.pos];
    return newArr;
  }, []);
  allPos.forEach((shipPos) => {
    testBoard.receiveAttack(shipPos);
  });
  expect(testBoard.isAllSunk()).toBe(true);
});
