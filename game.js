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
    {
        bot++;
        user++;
    }
    else if(roundResult(playerChoice, computerChoice) == true)
    {
        user++;
    }
    else
    {
        bot++;
    }

    let output = document.querySelector("#output");

    if(bot === 5 || user === 5)
    {
        output.innerHTML = `Match has been Ended. Final Scores are : 
                            <div id="botResult">Bot: ${bot}</div>
                            <div id="userResult">User: ${user}</div>`;

        if(bot === 5)
        {
            document.querySelector("div > #userResult").style.backgroundColor = "red"; 
            document.querySelector("div > #botResult").style.backgroundColor = "lightgreen"; 
        }
        else
        {
            document.querySelector("div > #userResult").style.backgroundColor = "lightgreen"; 
            document.querySelector("div > #botResult").style.backgroundColor = "red"; 
        }
        bot = 0;
        user = 0;
        matchRun = false;
    }
    else
    {
        output.innerText = `Bot: ${bot}
                            User: ${user}`;
    }
}

let play = document.querySelector("#start");
let user = 0;
let bot = 0;
let matchRun = false;

let textBox = document.querySelector("#message");

textBox.addEventListener('keyup', function(event){
    if(matchRun === false)  
        return;

    let computerChoice = getComputerChoice();

    if(event.key === 'p' || event.key === 'P')
        playRound("paper", computerChoice);
    else if(event.key === 'r' || event.key === 'R')    
        playRound("rock", computerChoice);
    else if(event.key === 's' || event.key === 'S')
        playRound("scissors", computerChoice);
    textBox.value = '';
}); 

play.addEventListener('click', function() {
    let resultLog = document.querySelector("#output");

    resultLog.innerText = "Press R for Rock, S for Scissors or P for Paper!";
    textBox.value = "";
    textBox.focus();
    matchRun = true;
});
