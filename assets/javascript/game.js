var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let g = letters[Math.floor(Math.random()*letters.length)];
var GL = 9;
var wins = 0;
var losses = 0;
var SoFar = [];

    function myFunction(Guess) {
      if(Guess==g){
        wins = wins+1;
        GL = 9;
        g = letters[Math.floor(Math.random()*letters.length)];
      }
      else{
        if(GL===0){
          losses = losses+1;
          GL = 9;
          g = letters[Math.floor(Math.random()*letters.length)];
        }
        else{
        GL=GL-1;
        SoFar.push(String(Guess));  
        document.getElementById("Guesses").innerHTML = SoFar;
        } 
      }
      document.getElementById("GL").innerHTML = GL;
      document.getElementById("Wins").innerHTML = wins;
      document.getElementById("Losses").innerHTML = losses; 
    }