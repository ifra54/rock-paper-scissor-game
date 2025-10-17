function playGame(userchoice) {
  let choices = ["Rock", "Paper", "Scissors"];
  let computerchoice = choices[Math.floor(Math.random() * 3)];
  let result = "";
  if (userchoice == computerchoice) {
    result = `It's a tie <br> Both chose<b> ${userchoice}</b> `;
  } else if (
    (userchoice === "Rock" && computerchoice === "Scissors") ||
    (userchoice === "Paper" && computerchoice === "Rock") ||
    (userchoice === "Scissors" && computerchoice === "Paper")
  ) {
    result = "I Win the game 😎";
  } else {
    result = "You lose the game 🤪";
  }
  document.querySelector(
    "#choices"
  ).innerHTML = `🧍‍♀️ You chose: <b> ${userchoice} </b> <br>💻 Computer chose: <b> ${computerchoice} </b>`;
  document.querySelector("#results").innerHTML = result;
}
