const minBet = 5;
const maxBet = 50;
let balance = 1000;
let inputBox = document.querySelector("#bet");


document.querySelector("#balance").innerHTML = balance; 

// symbols 
const symbols = ["A","B","C","D","E"];
const winningFactor = 2; 

function runSlotMachine(){
    const currentBet = Number(document.querySelector("#bet"). value); 
    slotMachine(currentBet);
    document.querySelector("#balance").innerHTML = balance; 
    console.log(currentBet);

}

document.querySelector("button").addEventListener("click", runSlotMachine);


function slotMachine(bet){
    let reel1;
    let reel2;
    let reel3; 
    
    if(bet >= minBet && bet <= maxBet && bet <= balance){
        
         reel1 = symbols[Math.floor(Math.random() * symbols.length)];
         reel2 = symbols[Math.floor(Math.random() * symbols.length)]; 
         reel3 = symbols[Math.floor(Math.random() * symbols.length)];  

        document.querySelector("#reel1").innerHTML = reel1; 
        document.querySelector("#reel2").innerHTML = reel2; 
        document.querySelector("#reel3").innerHTML = reel3;
        document.querySelector("#reel1").classList.add("reel")
        document.querySelector("#reel2").classList.add("reel")
        document.querySelector("#reel3").classList.add("reel")
        if(reel1 === reel2  && reel2 === reel3){
            balance = balance + bet * winningFactor; 
            console.log("You Win"); 
            document.querySelector("#result").innerHTML = "You Win";
             inputBox.value = ""; 
            
    }else{
            balance = balance - bet;
            console.log("You lose"); 
            document.querySelector("#result").innerHTML = "You lose"; 
             inputBox.value = ""; 
        }
    }else{
        console.log("Invalid Bet")
        document.querySelector("#result").innerHTML = "invalid Bet"; 
         inputBox.value = ""; 
    }

}


 


