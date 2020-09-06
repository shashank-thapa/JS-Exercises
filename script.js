//1. Age in days
function ageInDays(){

    let birthYear = prompt("Please enter your birth year");

    result = (new Date().getFullYear() - birthYear) * 365;
    let h2 = document.createElement('h2');
    let varText= document.createTextNode('You are ' + result + ' days old');
    h2.setAttribute('id','ageInDays');
    h2.appendChild(varText);
    document.getElementById("ageResult").appendChild(h2);
}

function reset(){
    document.getElementById("ageInDays").remove();
}

//2. gifGenerator

function gifGen(){
    var image = document.createElement('img');
    let div = document.getElementById("gifDiv");
    image.src= "https://media.tenor.com/images/0407013675aa00c2a8c7106facf23bd8/tenor.gif";
    image.setAttribute('id','gifImage');
    div.appendChild(image);
}

function gifClear(){
    document.getElementById('gifImage').remove();
}

//3. Rock, Paper, Scissors
function rpsGame(yourChoice){
    console.log(yourChoice.src);
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numToChoice(randomNum());
    console.log(botChoice);
    results = decideWinner(humanChoice, botChoice); // [1,0] human won; [.5,.5] draw; [0,1] computer won;
    console.log(results);
    message = finalMessage(results);
    console.log(message);
    rpsFrontend(humanChoice, botChoice, message);
    
}

function randomNum(){
    return Math.floor(Math.random()*3);
}

function numToChoice(number){
    return ['paper', 'rock', 'scissor'][number];
}

function decideWinner(yourChoice, botChoice){
    let rpsDatabase = {
        'rock': {'scissor':1, 'rock': 0.5, 'paper':0},
        'paper': {'scissor':0, 'rock': 1, 'paper':0.5},
        'scissor': {'scissor':0.5, 'rock': 0, 'paper':1},
    };

    let yourScore = rpsDatabase[yourChoice][botChoice];
    let botScore = rpsDatabase[botChoice][yourChoice];

    return [yourScore, botScore];
}

function finalMessage([yourScore, botScore]){
    if (yourScore === 0){
        return {'message': 'Imagine losing to a bot', 'color': 'red'}
    }else if (yourScore === 0.5){
        return {'message': 'Draw', 'color': 'black'}
    }else{
        return {'message':'Cool you won against a bot, congrats', 'color': 'green'}
    }
}

function rpsFrontend(yourImageChoice, botImageChoice, finalMessage){
    let imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src,
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    let humanDiv = document.createElement('div');
    let messageDiv = document.createElement('div');
    let botDiv = document.createElement('div');

    if (yourImageChoice === 'scissor'){
        humanDiv.innerHTML = "<img src='" + imageDatabase[yourImageChoice] + "' height= 155px width=150px style='transform:rotate(270deg);''>";
    }else{
        humanDiv.innerHTML = "<img src='" + imageDatabase[yourImageChoice] + "' height= 155px width=150px>";
    }

    if (botImageChoice === 'scissor'){
        botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height= 155px width=150px style='transform:rotate(270deg);''>";
    }else{
        botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height= 155px width=150px>";
    }

    messageDiv.innerHTML = "<h2 style='font-weight:bold; color: coral;'>" + finalMessage['message'] + "</h2>";

    document.getElementById('rps-icons').appendChild(humanDiv);
    document.getElementById('rps-icons').appendChild(messageDiv);
    document.getElementById('rps-icons').appendChild(botDiv);
    document.getElementById('rps-icons').appendChild(buttonDiv);
}