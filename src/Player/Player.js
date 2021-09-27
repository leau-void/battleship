export default ({ name, starts, isHuman, self, enemy }) => {
  const getName = () => name;
  const getSelf = () => self;
  const getEnemy = () => enemy;
  const isTurn = starts;

  const posNotUsed = (pos) =>
    [...enemy.getHits(), ...enemy.getMisses()].every((curr) => curr !== pos);

  const randomAttack = () => {
    const row = Math.round(Math.random() * 9 + 1);
    const column = String.fromCharCode(Math.round(Math.random() * 9 + 1) + 96);
    const pos = `${column}${row}`;
    if (posNotUsed(pos)) return pos;
    return randomAttack();
  };

  const attack = (pos) => {
    if (pos && posNotUsed(pos)) enemy.receiveAttack(pos);
    else if (!isHuman) enemy.receiveAttack(randomAttack());
  };

  const switchTurn = function swapTurns() {
    this.isTurn = !this.isTurn;

    if (this.isTurn && !isHuman) attack();
  };

  return { getName, isTurn, switchTurn, getSelf, getEnemy, attack };
};
