const scoreObject = {
    p1: 0,
    p2: 0,
    round: 0
}


const NUMBER_OF_DICE = 2;
const diceContainer = document.querySelector(".dice-container");
const btnRollDice = document.querySelector(".btn-roll-dice");

// randomizeDice(diceContainer, NUMBER_OF_DICE);

btnRollDice.addEventListener("click", () => {

    let randomNumber = 0;

    const interval = setInterval(() => {
       randomNumber = randomizeDice(diceContainer, NUMBER_OF_DICE);
    }, 50);


    setTimeout(() => {
        clearInterval(interval);
        updateScores(randomNumber)
    }, 1000);

});

function updateScores(newDiceNumber) {
    console.log(scoreObject, newDiceNumber)
    // todo  create global object to store and keep track of player current score and current round
    // todo  update object with new player score and round
    scoreObject.round++;

    if (scoreObject.round === 2 || scoreObject.round === 4) { // round is even number: player 2's turn
        scoreObject.p2 += newDiceNumber;
    } else { // player 1's turn
        scoreObject.p1 += newDiceNumber;
    }

    console.log('new scoreObject', scoreObject)

    // todo get containers of player scores and current round
    const p1ScoreContainer = document.getElementById("player1-score");
    const p2ScoreContainer = document.getElementById("player2-score");
    const roundContainer = document.getElementById("current-round")

    console.log('containers', p1ScoreContainer, p2ScoreContainer, roundContainer)

    // todo display scores and round value by using .innerhtml prop
    p1ScoreContainer.innerText = scoreObject.p1;
    p2ScoreContainer.innerText = scoreObject.p2;
    roundContainer.innerText = scoreObject.round;
    // if round 4 display winner and block button

     if (scoreObject.round === 4) {
         // Display the winner and block the button


         const winnerContainer = document.getElementById("winner");
         winnerContainer.innerHTML = "Player " + (scoreObject.p1 > scoreObject.p2 ? "1" : "2") + " wins!";
         btnRollDice.disabled = true;

         // setTimeout(() => {
         //     alert (
         //         scoreObject.p1 > scoreObject.p2 ? 'Player 1 wins' : scoreObject.p1 < scoreObject.p2 ? 'Player 2 wins!' : 'Draw'
         //     )
         // }, 1)

     }
}


function createDice(number) {
    const dotPositionMatrix = {
        1: [
            [50, 50]
        ],
        2: [
            [20, 20],
            [80, 80]
        ],
        3: [
            [20, 20],
            [50, 50],
            [80, 80]
        ],
        4: [
            [20, 20],
            [20, 80],
            [80, 20],
            [80, 80]
        ],
        5: [
            [20, 20],
            [20, 80],
            [50, 50],
            [80, 20],
            [80, 80]
        ],
        6: [
            [20, 20],
            [20, 80],
            [50, 20],
            [50, 80],
            [80, 20],
            [80, 80]
        ]
    };

    // create dice element
    const dice = document.createElement("div");

    dice.classList.add("dice");

    for (const dotPosition of dotPositionMatrix[number] ) {
        const dot = document.createElement('div');

        dot.classList.add("dice-dot");
        dot.style.setProperty("--top", dotPosition[0] + "%");
        dot.style.setProperty("--left", dotPosition[1] + "%");
        dice.appendChild(dot);

    }
    return dice;
}

function randomizeDice(diceContainer, numberOfDice) {
    diceContainer.innerHTML = "";
    let total = 0;

    for (let i = 0; i < numberOfDice; i++) {
        const random = Math.floor((Math.random() * 6) + 1);
        total += random
        const dice = createDice(random);
        diceContainer.appendChild(dice);
    }

    return total;

}




