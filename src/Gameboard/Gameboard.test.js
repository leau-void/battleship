import Gameboard from './Gameboard';
import wrapCreateShips from '../Ship/wrapCreateShips';
/* global test expect jest */

const testBoard = Gameboard();

const shipsArray = wrapCreateShips;

test('no fit column', () => {
  testBoard.placeShip({
    ship: shipsArray[0],
    row: 1,
    column: 'i',
  });
  expect(testBoard.getShips()[0]).toBeUndefined();
});

test('no fit row', () => {
  testBoard.placeShip({
    ship: shipsArray[0],
    row: 9,
    column: 'a',
  });
  expect(testBoard.getShips()[0]).toBeUndefined();
});

test('placeShip horiz', () => {
  testBoard.placeShip({
    ship: shipsArray[0],
    row: 1,
    column: 'a',
  });
  const desiredObj = {
    ship: shipsArray[0],
    row: 1,
    column: 'a',
    pos: ['a1', 'b1', 'c1'],
  };

  expect(testBoard.getShips()[0]).toMatchObject(desiredObj);
});

test('placeShip vert', () => {
  testBoard.placeShip({
    ship: shipsArray[0],
    row: 3,
    column: 'd',
  });
  const desiredObj = {
    ship: shipsArray[0],
    row: 3,
    column: 'd',
    pos: ['d3', 'd4', 'd5', 'd6'],
  };

  expect(testBoard.getShips()[1]).toMatchObject(desiredObj);
});

test('overlap last ship', () => {
  testBoard.placeShip({
    ship: shipsArray[0],
    row: 3,
    column: 'd',
  });

  expect(testBoard.getShips()[2]).toBeUndefined();
});

test('smaller overlap', () => {
  testBoard.placeShip({
    ship: shipsArray[0],
    row: 1,
    column: 'd',
  });

  expect(testBoard.getShips()[2]).toBeUndefined();
});

const mockHit = jest.fn();
const mockHit2 = jest.fn();

test('attack hit', () => {
  testBoard.placeShip({
    ship: shipsArray[0],
    row: 8,
    column: 'h',
  });
  testBoard.getShips()[testBoard.getShips().length - 1].ship.hit = mockHit;
  testBoard.receiveAttack('h8');
  expect(testBoard.getHits()[0]).toEqual('h8');
  expect(testBoard.getMisses()).toEqual([]);

  expect(mockHit).toHaveBeenCalledWith(0);
});

test('attack miss', () => {
  testBoard.getShips()[testBoard.getShips().length - 1].ship.hit = mockHit2;
  testBoard.receiveAttack('h9');
  expect(testBoard.getHits()[0]).toEqual('h8');
  expect(testBoard.getMisses()[0]).toEqual('h9');

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
