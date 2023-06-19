function createDice(number) {
    const dotPositionMatrix = {
      1: [[50, 50]],
      2: [[20, 20], [80, 80]],
      3: [[20, 20], [50, 50], [80, 80]],
      4: [[20, 20], [20, 80], [80, 20], [80, 80]],
      5: [[20, 20], [20, 80], [50, 50], [80, 20], [80, 80]],
      6: [[20, 20], [20, 80], [50, 20], [50, 80], [80, 20], [80, 80]],
    };
  
    // create dice element
    const dice = document.createElement("div");
  
    dice.classList.add("dice");
  
    for (const dotPosition of dotPositionMatrix[number]) {
      const dot = document.createElement("div");
  
      dot.classList.add("dice-dot");
      dot.style.setProperty("--top", dotPosition[0] + "%");
      dot.style.setProperty("--left", dotPosition[1] + "%");
      dice.appendChild(dot);
    }
  
    return dice;
  }
  
  let player1Score = 5;
  let player2Score = 5;
  
  function randomizeDice(diceContainer, numberOfDice, player) {
    diceContainer.innerHTML = "";
  
    let diceTotal = 0;
  
    for (let i = 0; i < numberOfDice; i++) {
      const random = Math.floor(Math.random() * 6) + 1;
      const dice = createDice(random);
  
      diceTotal += random;
  
      diceContainer.appendChild(dice);
    }
  
    if (player === 1) {
      player1Score += diceTotal;
      document.getElementById("score_0").textContent = player1Score;
    } else if (player === 2) {
      player2Score += diceTotal;
      document.getElementById("score_1").textContent = player2Score;
    }
  }
  
  const NUMBER_OF_DICE = 2;
  const diceContainer = document.querySelector(".dice-container");
  const btnRollDice = document.querySelector(".btn-roll-dice");
  
  btnRollDice.addEventListener("click", () => {
    randomizeDice(diceContainer, NUMBER_OF_DICE, 1);
    randomizeDice(diceContainer, NUMBER_OF_DICE, 2);
  });
  