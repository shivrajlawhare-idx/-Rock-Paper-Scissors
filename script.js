let moves = ["Rock","Paper","Scissor"];

function getComputerChoice(){
 return moves[Math.floor(Math.random() * 3)];
}

function getUserChoice(){
    let userInput = prompt("Enter your choice(Rock, Paper or Scissor)");
    return userInput;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        human = humanChoice.toLowerCase();
        computer = computerChoice.toLowerCase();
        if (human == "rock" && computer == "scissor"){
            console.log("You Win!! Rock beats scissor");
            humanScore++;
        } 
        if (human == "scissor" && computer == "paper"){
            console.log("You Win!! Scissor beats Paper");
            humanScore++;
        } 
        if (human == "paper" && computer == "rock"){
            console.log("You Win!! Paper beats Rock");
            humanScore++;
        } 
        if (human == "scissor" && computer == "rock"){
            console.log("You Lose!! Rock beats scissor");
            computerScore++;
        } 
        if (human == "paper" && computer == "scissor"){
            console.log("You Lose!! Scissor beats Paper");
            computerScore++;
        } 
        if (human == "rock" && computer == "paper"){
            console.log("You Lose!! Paper beats Rock");
            computerScore++;
        } 
        

        console.log("Your Score: ", humanScore);
        console.log("Computer's Score: ", computerScore);

    }

    for (let i = 0; i < 5; i++) {
        let humanSelection = getUserChoice();
        let computerSelection = getComputerChoice();
        if (humanSelection == computerSelection){
            console.log("It's a tie.")
            --i;
        }
        playRound(humanSelection, computerSelection);
    }

    humanScore > computerScore 
    ? console.log("You won this game!!!")
    : console.log("You lost this game!!");

}

playGame();