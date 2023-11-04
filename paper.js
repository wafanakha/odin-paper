let count = 0;
let playerScore = 0;
let compScore = 0;
while (count <= 5) {
  function round(player, comp) {
    player.toLowerCase();
    if (player == comp)
      return alert(
        `You draw this round, ${player} and ${comp}. \n Your Score = ${playerScore}, opponent Score ${compScore}`
      );
    else if (
      (player == "paper" && comp == "rock") ||
      (player == "rock" && comp == "scissor") ||
      (player == "scissor" && comp == "paper")
    ) {
      playerScore++;
      return alert(
        `You Win this round!, ${player} win againts ${comp}. \n Your Score = ${playerScore}, opponent Score ${compScore}`
      );
    } else {
      compScore++;
      return alert(
        `You Lose this round!, ${player} lose againts ${comp}. \n Your Score = ${playerScore}, opponent Score ${compScore}`
      );
    }
  }

  const player = prompt("choose your fighter");
  let computer = Math.random();
  if (computer < 0.33) {
    computer = "paper";
  } else if (computer < 0.66) {
    computer = "rock";
  } else {
    computer = "scissor";
  }
  round(player, computer);
  count++;
}
if (playerScore > compScore) {
  alert(`You WIN! \n Your Score = ${playerScore}, opponent Score ${compScore}`);
} else {
  alert(
    `YOU LOSE! \n Your Score = ${playerScore}, opponent Score ${compScore}`
  );
}
