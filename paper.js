const cards = document.querySelectorAll(".flex-container img");
const score = document.querySelector(".score");
let player = "";

let count = 0;
let playerScore = 0;
let compScore = 0;

cards.forEach((element) => {
  element.addEventListener("click", () => {
    player = element.id;
    console.log(element);
    function round(player, comp) {
      if (player == comp)
        return (score.innerHTML = `You draw this round, ${player} and ${comp}. \n Your Score = ${playerScore}, opponent Score ${compScore}`);
      else if (
        (player == "paper" && comp == "rock") ||
        (player == "rock" && comp == "scissor") ||
        (player == "scissor" && comp == "paper")
      ) {
        playerScore++;
        return (score.innerHTML = `You Win this round!, ${player} win againts ${comp}. \n Your Score = ${playerScore}, opponent Score ${compScore}`);
      } else {
        compScore++;
        return (score.innerHTML = `You Lose this round!, ${player} lose againts ${comp}. \n Your Score = ${playerScore}, opponent Score ${compScore}`);
      }
    }
    let computer = Math.random();
    if (computer < 0.33) {
      computer = "paper";
    } else if (computer < 0.66) {
      computer = "rock";
    } else {
      computer = "scissor";
    }
    console.log(computer);
    round(player, computer);
    count++;
    if (count == 5) {
      if (playerScore > compScore) {
        score.innerHTML = `You WIN! \n Your Score = ${playerScore}, opponent Score ${compScore}`;
      } else {
        score.innerHTML = `YOU LOSE! \n Your Score = ${playerScore}, opponent Score ${compScore}`;
      }
    }
  });
});
