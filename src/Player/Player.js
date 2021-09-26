export default ({ name, starts, isHuman, self, enemy }) => {
  const getName = () => name;
  const doesStart = () => starts;
  const getSelf = () => self;
  const getEnemy = () => enemy;
  const isTurn = starts;

  const randomAttack = () => {
    const row = Math.round(Math.random() * 9 + 1);
    const column = String.fromCharCode(Math.round(Math.random() * 9 + 1) + 96);
    const pos = `${column}${row}`;
    const notUsed = [...enemy.getHits(), ...enemy.getMisses()].every((curr) => curr !== pos);
    if (notUsed) return pos;
    return randomAttack();
  };

  const attack = (pos) => {
    if (pos) enemy.receiveAttack(pos);
    else if (!isHuman) enemy.receiveAttack(randomAttack());
  };

  const switchTurn = function swapTurns() {
    this.isTurn = !this.isTurn;

    if (isTurn && !isHuman) enemy.receiveAttack(attack());
  };

  return { getName, doesStart, isTurn, switchTurn, getSelf, getEnemy, attack };
};
