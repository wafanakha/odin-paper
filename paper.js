function round(player, comp) {
  player.toLowerCase();
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
console.log(computer);
alert(player);
