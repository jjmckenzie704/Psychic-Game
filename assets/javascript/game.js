        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        var wins = 0;
        var losses = 0;
        var guesses = 9;
        

        var randletter = letters[Math.floor(Math.random() * letters.length)];

        document.onkeyup = function(event) {
            typedletters = event.key;
            document.getElementById("typedletters").innerHTML += typedletters;
            document.getElementById("typedletters").innerHTML += ", ";
            if (typedletters == randletter) {
                wins++;
                document.getElementById("wins").innerHTML = wins;
                guesses = 9;
                document.getElementById("guessleft").innerHTML = guesses;
                document.getElementById("typedletters").innerHTML = "";
                randletter = letters[Math.floor(Math.random() * letters.length)];
            } else {
                guesses--;
                document.getElementById("guessleft").innerHTML = guesses;
            }

            if (guesses === 0 ) {
                losses++;  
                document.getElementById("losses").innerHTML = losses; 
                guesses = 9;
                document.getElementById("guessleft").innerHTML = guesses;
                document.getElementById("typedletters").innerHTML = "";
                randletter = letters[Math.floor(Math.random() * letters.length)];
                }
        }

 