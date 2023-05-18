<html>
  <head>
    <title>Rock-Paper-Scissors Game</title>
  </head>
  <body>
    <h1>Rock-Paper-Scissors Game</h1>
    <p>Select your weapon:</p>
    <button id="rock">Rock</button>
    <button id="paper">Paper</button>
    <button id="scissors">Scissors</button>
    <p id="result"></p>
    <script type="text/javascript">
      // Get the buttons and the result element
      const rockBtn = document.getElementById('rock');
      const paperBtn = document.getElementById('paper');
      const scissorsBtn = document.getElementById('scissors');
      const resultEl = document.getElementById('result');

      // Add click event listeners to the buttons
      rockBtn.addEventListener('click', playGame);
      paperBtn.addEventListener('click', playGame);
      scissorsBtn.addEventListener('click', playGame);

      // Define the playGame function
      function playGame(event) {
        // Get the player's choice from the button that was clicked
        const playerChoice = event.target.id;
      // Generate a random number from 0-2 to represent the computer's choice
      const computerChoice = Math.floor(Math.random() * 3)
      // Define an array to map the computer's choice to "rock", "paper", or "scissors"
      const choices = ['rock', 'paper', 'scissors'];
      // Get the computer's choice based on the random number generated
      const computerSelection = choices[computerChoice];
      // Compare the player's choice to the computer's choice and display the result
      if (playerChoice === computerSelection) {
        resultEl.textContent = "It's a tie!";
        } else if (
      (playerChoice === 'rock' && computerSelection === 'scissors') ||
      (playerChoice === 'paper' && computerSelection === 'rock') ||
      (playerChoice === 'scissors' && computerSelection === 'paper')
      ) {
        resultEl.textContent = 'You win!';
        } else {
        resultEl.textContent = 'You lose!';
        }
      }
    </script>
  </body>
</html>
