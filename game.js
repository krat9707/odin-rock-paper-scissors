function getComputerChoice()
{
    let val = (Math.random() * 100);

    if(val <= 33)
        return "Rock";
    else if(val <= 66)
        return "Paper";
    else    
        return "Scissors";
}

function roundResult(playerChoice, computerChoice)
{
    if(playerChoice == "rock")
    {
        if(computerChoice == "scissors")
            return true;
        else
            return false;
    }
    else if(playerChoice == "paper")
    {
        if(computerChoice == "rock")
            return true;
        else    
            return false;
    }
    else 
    {
        if(computerChoice == "paper")
            return true;
        else    
            return false;
    }
}

function playRound(playerChoice, computerChoice)
{
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(playerChoice == computerChoice)
        return "0";
    else if(roundResult(playerChoice, computerChoice) == true)
        return "1";
    else
        return "-1";
}

let play = document.querySelector("#start");

play.addEventListener('click', function() {
    let textBox = document.querySelector("#message");
    let resultLog = document.querySelector("#output");

    resultLog.innerText = "Press R for Rock, S for Scissors or P for Paper!";
    textBox.value = "";
    playGame();
    textBox.focus();
});

function playGame()
{

    let res;
    
    let playerChoice = document.querySelector("#message"); 
    let computerChoice = getComputerChoice();

    playerChoice.addEventListener('keyup', (event) => {        
        let key = null;

        if(event.key == 'r' || event.key == 'R')   
            key = `rock`;
        else if(event.key == 'p' || event.key == 'P')
            key = `paper`;
        else if(event.key == 's' || event.key == 'S')
            key = `scissors`;        

        if(key)
        {
            let out = playRound(key, computerChoice);

            if(out == '0')
                res = `Tie!`;
            else if(out == '1')
                res = `You Won!`;
            else 
                res = `You Lost!`;
            
            let log = document.querySelector("#output");
            log.innerText = res;
        }
    });
}