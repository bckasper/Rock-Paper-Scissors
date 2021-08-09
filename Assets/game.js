// Here is the starting score
let wins = 0;
let losses = 0;
let ties = 0;

// Here are the choices
choices = ["ROCK","PAPER","SCISSORS"]

var button = document.getElementById("play-button")
button.addEventListener("click", play);



// This is the entire play game function. It will determine the choices, then lay out the possible alerts, then run the outcomes.
function play () {
   var userChoice = window.prompt("Please choose Rock, Paper, or Scissors")
   
   if(!choices.includes(userChoice.toUpperCase())){
       window.alert("How...human of you to not follow instructions. One point to the computer for your foolishness!")
       losses++
       window.alert("Stats: \nWins: "+wins+"\nLosses: "+losses+"\nTies: "+ties);
       if(losses === 5){
        window.alert("DEFEAT! You will never escape the will and power of your computer overlord. Back to your cage!")
        return
       } else{
       var playAgain = window.confirm("Play again?")
        if (playAgain){
            play()
        } return}
   }
   
   if(!userChoice){return}


   var choice = Math.floor(Math.random()*3)
   var computerChoice = choices[choice]
    userChoice = userChoice.toUpperCase()


// This is the tie outcome
    if(userChoice === computerChoice) {
        ties++
        window.alert("You both chose "+userChoice+"...It's a tie!")
    } 

// This is the user wins outcome
    else if ((userChoice === "ROCK" && computerChoice === "SCISSORS") ||
            (userChoice === "PAPER" && computerChoice === "ROCK") ||
            (userChoice === "SCISSORS" && computerChoice === "PAPER"))
    {
        wins++
        window.alert("You chose "+userChoice+" and the stupid computer chose "+computerChoice+"...You win!")

// This is the user loses outcome
    } else {
        losses++    
        window.alert("You chose "+userChoice+" and your unstoppable computer overlord chose "+computerChoice+"...You lose!")
    }


// This is the alert on the stats so far
    window.alert("Stats: \nWins: "+wins+"\nLosses: "+losses+"\nTies: "+ties);

// Ends game if user wins
    if(wins === 5){
        window.alert("CONGRATULATIONS! You have mastered the pathetic computer. Thank you for playing.")
        return}

// Ends game if user loses
    if(losses === 5){
        window.alert("DEFEAT! You will never escape the will and power of your computer overlord. Back to your cage!")
        return}

// Ends if all tied up
    if (ties === 5){
        window.alert("Is it possible? Can humans and computers truly co-exist? ERROR wef9094j2fjvj-1102-a Shutting Down")
        return}


// Asks if the user would like to play again
    var playAgain = window.confirm("Play again?")

    if (playAgain){
        play()
    }
}


5


