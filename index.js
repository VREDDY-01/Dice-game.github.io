var player1 = prompt("What is Player 1 Name?");
var player2 = prompt("What is Player 2 Name?");

document.querySelector(".player1").innerHTML=player1;
document.querySelector(".player2").innerHTML=player2;


//--------Ranom Number 1
var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomImageSource1 = "images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomImageSource1)
//----------Random Number 2
var randomNumber2 = Math.floor((Math.random()*6)+1);
var randomImageSource2 = "images/dice"+randomNumber2+".png"; 
document.querySelector(".img2").setAttribute("src",randomImageSource2)


//--------heading html change
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 "+player1+" Wins!";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="🚩 "+player2+" Wins!";
}else{
    document.querySelector("h1").innerHTML="Draw!"; 
}