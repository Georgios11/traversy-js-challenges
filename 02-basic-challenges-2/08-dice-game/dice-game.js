function diceGameSimulation(numSimulations) {
  const rollDice = () => Math.trunc(Math.random() * 6 + 1);

  const arr = Array.from({ length: numSimulations }, () => {
    const dice1 = rollDice();
    const dice2 = rollDice();
    const sum = dice1 + dice2;

    let result = "";

    if (sum === 7 || sum === 11) {
      result = "win";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = "lose";
    } else {
      result = "roll again";
    }

    const roll = {
      dice1: dice1,
      dice2: dice2,
      sum: sum,
      result: result,
    };

    return roll;
  });
  return arr;
}

module.exports = diceGameSimulation;
