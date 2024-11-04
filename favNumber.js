function favnumm(){
    let favNum = 17;
    let guessfavNum;

    while (guessfavNum !== favNum){
    let guessfavNum = parseInt(prompt("Guess my favorite number:"));

    if (guessfavNum > favNum){
        alert("Too high!");
    } else if (guessfavNum < favNum){
        alert("Too low!");
    } else{
        alert("Correct!");
        break;
    }    
    }
}