import playerFactory from './playerFactory';
import gameboardFactory from '../gameboard/gameboardFactory';
/* global test expect jest */

const testBoard1 = gameboardFactory();
const testBoard2 = gameboardFactory();

const playerTest1 = playerFactory({
  name: 'Human',
  starts: true,
  self: testBoard1,
  enemy: testBoard2,
});
const playerTest2 = playerFactory({
  name: 'The Computer',
  starts: false,
  self: testBoard2,
  enemy: testBoard1,
});

test('player1 props', () => {
  expect(playerTest1.getName()).toBe('Human');
  expect(playerTest1.doesStart()).toBe(true);
  expect(playerTest1.isTurn).toBe(true);
});

test('player2 props', () => {
  expect(playerTest2.getName()).toBe('The Computer');
  expect(playerTest2.doesStart()).toBe(false);
  expect(playerTest2.isTurn).toBe(false);
});

test('turn', () => {
  playerTest1.switchTurn();
  playerTest2.switchTurn();

  expect(playerTest1.isTurn).toBe(false);
  expect(playerTest2.isTurn).toBe(true);
});

const mockReceive = jest.fn();

test('player attack', () => {
  playerTest1.getEnemy().receiveAttack = mockReceive;
  playerTest1.attack('h1');

  expect(mockReceive).toHaveBeenCalled();
});

const mockReceive2 = jest.fn();

test('CPU attackRandom', () => {
  playerTest2.getEnemy().receiveAttack = mockReceive2;
  playerTest2.attack();

  expect(mockReceive2.mock.calls[0][0]).toBeDefined();
});
