var randomNumber=Math.floor(Math.random()*6+1);
var randomDice=("dice"+randomNumber+".png");
document.querySelectorAll(".row .img")[0].setAttribute("src",randomDice);


var randomNumber2=Math.floor(Math.random()*6+1);
var randomDice2=("dice"+randomNumber2+".png");
document.querySelectorAll(".row .img")[1].setAttribute("src",randomDice2);

if (randomNumber>randomNumber2){
  document.querySelector(".refresh").innerHTML=("Player 1 Won! 🚩");
}

else if(randomNumber<randomNumber2)
document.querySelector(".refresh").innerHTML=("🚩 Player 2 Won!");

else if(randomNumber=randomDice2)
document.querySelector(".refresh").innerHTML=("It's a draw! 🎲");
