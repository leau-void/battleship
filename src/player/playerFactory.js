export default ({ name, starts, self, enemy }) => {
  const getName = () => name;

  const doesStart = () => starts;

  const isTurn = starts;

  const switchTurn = function swapTurns() {
    this.isTurn = !this.isTurn;
  };

  const getEnemy = () => enemy;

  const randomAttack = () => {
    const row = Math.round(Math.random() * 9 + 1);
    const column = String.fromCharCode(Math.round(Math.random() * 9 + 1) + 96);
    const pos = `${column}${row}`;
    const notUsed = [...enemy.hits, ...enemy.misses].every((curr) => curr !== pos);
    if (notUsed) return pos;
    return randomAttack();
  };

  const attack = (pos) => {
    if (pos) enemy.receiveAttack(pos);
    else if (name === 'The Computer') enemy.receiveAttack(randomAttack());
  };

  return { getName, doesStart, isTurn, switchTurn, self, getEnemy, attack };
};
