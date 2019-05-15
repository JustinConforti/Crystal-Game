
let targetNumber = [];
let chosenNumber;
let crystalNumber = [];
let crystalOne = document.getElementById("crystal-one");
let crystalTwo = document.getElementById("crystal-two");
let crystalThree = document.getElementById("crystal-three");
let crystalFour = document.getElementById("crystal-four");
let numberOptions = []
let totalScore = 0;
let totalWins = 0;
let totalLoses = 0;


this.crystalOneNumber = crystalOne;
this.crystalTwoNumber = crystalTwo;
this.crystalThreeNumber = crystalThree;
this.crystalFourNumber = crystalFour;

    function restartRound() {
        numberOptions = []
        chosenNumber = 0;
        targetNumber = []
        crystalNumber = []
        totalScore = 0

        for (let i = 19; i <= 120; i++) {
          targetNumber.push(i)
    }

     chosenNumber = targetNumber[Math.floor(Math.random() * targetNumber.length)]

        for (let i = 1; i <= 12; i++) {
            crystalNumber.push(i)
        }

        for (let i = 0; i < 4; i++) {

            numberOptions[i] = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];
        }


    updateScreen()

}
restartRound()

// this.crystalOneNumber = numberOptions[0];
// this.crystalTwoNumber = numberOptions[1];
// this.crystalThreeNumber = numberOptions[2];
// this.crystalFourNumber = numberOptions[3];

// console.log(crystalOneNumber)
// console.log(crystalTwoNumber)
// console.log(crystalThreeNumber)
// console.log(crystalFourNumber)
console.log(numberOptions)
// console.log(crystalNumber)

    function updateScreen() {
        let numberBox = document.getElementById("number-box")
        $(numberBox).text(chosenNumber)     

        let wins = document.getElementById("wins")
        $(wins).text(totalWins)

        let loses = document.getElementById("loses")
        $(loses).text(totalLoses)

        let userTotalScore = document.getElementById("score")
        $(userTotalScore).text(totalScore)
        // let $numberBox = $(".number-box");
        // $numberBox.text = chosenNumber
        // // numberBox.innerHTML = chosenNumber;



    }

        $(this).on("click", function(event) {
           
             if(event.target.id == "crystal-one") {
                theUserGuesses(event.target.id)
             }  
             else if(event.target.id == "crystal-two") {
                 theUserGuesses(event.target.id)
             }
             else if (event.target.id == "crystal-three") {
                 theUserGuesses(event.target.id)
            }
             else if (event.target.id == "crystal-four") {
                 theUserGuesses(event.target.id)
             }
           

             console.log(totalScore)
             return(totalScore);

        });

        function theUserGuesses (crystalSelection) {

            if(crystalSelection == "crystal-one") {
                totalScore += numberOptions[0]
            }
            else if (crystalSelection == "crystal-two") {
                totalScore += numberOptions[1]
            }
            else if (crystalSelection == "crystal-three") {
                totalScore += numberOptions[2]
            }
            else if (crystalSelection == "crystal-four") {
                totalScore += numberOptions[3]
            }
            // crystalSelection = numberOptions[0]
            // totalScore += numberOptions[0];

            checkWinCondition()
            updateScreen()
        }


        function checkWinCondition () {

            if (totalScore > chosenNumber) {
                totalLoses += 1
                restartRound()
            }
            else if (totalScore === chosenNumber){
                totalWins += 1
                restartRound()
            }
            console.log(totalLoses)
            console.log(totalWins)
            // updateScreen()
            // restartRound()

        }


    console.log(chosenNumber)