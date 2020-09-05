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

function catGen(){
    var image = document.createElement('img');
    let div = document.getElementById("catDiv");
    image.src= "https://i.imgur.com/DzfVJox.gif";
    image.setAttribute('id','catImage');
    div.appendChild(image);
}

function catClear(){
    document.getElementById('catImage').remove();
}