let number=Math.floor(Math.random()*20+1);
let count=0
let display=document.getElementById("display");

document.getElementById("mybutton").onclick=function(){
    let guess=document.getElementById("mycheckbox").value;
    count++;
    if(guess>20){
        display.innerHTML="Guess between 1-20"
    }
    else if(guess == number){
        display.innerHTML=`Yeah You won it!! The Number was ${number}! You guessed it in ${count} chances`
    }

    else if(guess>number){
        display.innerHTML=`Guess Low!`
    }
    else{
        display.innerHTML=`Guess High!`
    }
}