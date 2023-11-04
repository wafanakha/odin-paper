function round(player, comp) {
  player.toLowerCase();
  if (player == comp)
    return alert(`You draw this round, ${player} and ${comp}`);
  else if (
    (player == "paper" && comp == "rock") ||
    (player == "rock" && comp == "scissor") ||
    (player == "scissor" && comp == "paper")
  ) {
    return alert(`You Win this round!, ${player} win againts ${comp}`);
  } else return alert(`You Lose!, ${player} lose againts ${comp}`);
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
