let disable
let visib = true
let name
let numberOne
let numberTwo
let sign
let mode
let numCorrect = 0
let numWrong = 0
let actualAnswer
let userAnswer
let randomVariable2
let attempts = 0
let totalAttempts = 0
let correctAnswerCounter = 0
let totalCorrectAnswerCounter = 0
let incorrectAnswerCounter = 0
let typesQuestions = 0
let typesQuestionsCorrect = 0
let totalIncorrectAnswerCounter = 0
let unlock = 0
let mixedNumeral
let multiPlayerB = false
let nameTwo
function startGame(){
    visib = true
    disable = true
    disableFunction()
    document.getElementById("labelForPlayerSelect").style.visibility = "visible"
    document.getElementById("singlePlayer").style.visibility = "visible"
    document.getElementById("multiPlayer").style.visibility = "visible"
}
function makeVisible(){
    if(visib === true){
        document.getElementById("labelName").style.visibility = "visible"
        document.getElementById("nameInput").style.visibility = "visible"
        document.getElementById("submitName").style.visibility = "visible"
        document.getElementById("labelNameTwo").style.visibility = "visible"
        document.getElementById("nameInputTwo").style.visibility = "visible"
        document.getElementById("submitNameTwo").style.visibility = "visible"
    }else if(visib === false){
        document.getElementById("diffLabel").style.visibility = "hidden"
        document.getElementById("labelName").style.visibility = "hidden"
        document.getElementById("nameInput").style.visibility = "hidden"
        document.getElementById("submitName").style.visibility = "hidden"
        document.getElementById("labelNameTwo").style.visibility = "hidden"
        document.getElementById("nameInputTwo").style.visibility = "hidden"
        document.getElementById("submitNameTwo").style.visibility = "hidden"
    }

}
function disableFunction(){
    if(disable === true) {
        document.getElementById("easyMode").disabled = true
        document.getElementById("mediumMode").disabled = true
        document.getElementById("hardMode").disabled = true
    }else if(disable === false){
        document.getElementById("easyMode").disabled = false
        document.getElementById("mediumMode").disabled = false
        document.getElementById("hardMode").disabled = false
    }
}
function showDiff(){
    document.getElementById("diffLabel").style.visibility = "visible"
    document.getElementById("easyMode").style.visibility = "visible"
    document.getElementById("mediumMode").style.visibility = "visible"
    document.getElementById("hardMode").style.visibility = "visible"
}
function singlePlayer(){
    makeVisible()
    document.getElementById("labelNameTwo").style.visibility = "hidden"
    document.getElementById("nameInputTwo").style.visibility = "hidden"
    document.getElementById("submitNameTwo").style.visibility = "hidden"
    multiPlayerB = false
}
function multiPlayer(){
    makeVisible()
    multiPlayerB = true
    document.getElementById("submitName").style.visibility ="hidden"
}
function submitName(){
    if(multiPlayerB === false){
    name = document.getElementById("nameInput").value
    disable = false
    disableFunction()
    showDiff()
    document.getElementById("badgesNameHeader").style.visibility = "visible"
    document.getElementById("helper").style.visibility = "visible"
    document.getElementById("badgesNameHeader").innerHTML = name + "'s Badges"
    }else if(multiPlayerB === true){
        name = document.getElementById("nameInput").value
        nameTwo = document.getElementById("nameInputTwo").value
    disable = false
    disableFunction()
    showDiff()
    document.getElementById("badgesNameHeader").style.visibility = "visible"
    document.getElementById("helper").style.visibility = "visible"
    document.getElementById("badgesNameHeader").innerHTML = "Badges's Earned"
    }
}
function showSymb(){
    document.getElementById("symbLabel").style.visibility = "visible"
    document.getElementById("addition").style.visibility = "visible"
    document.getElementById("subtraction").style.visibility = "visible"
    document.getElementById("multiplication").style.visibility = "visible"
    document.getElementById("division").style.visibility = "visible"
    document.getElementById("mixed").style.visibility = "visible"
}
function easyMode(){
    showSymb()
    mode = "easy"
    unlock += 1
}
function mediumMode(){
    showSymb()
    mode = "medium"
    unlock += 1
}
function hardMode(){
    showSymb()
    mode = "hard"
    unlock += 1
}

function addition(){
    typesQuestions += 1
    unlock += 1
    if(mode === "easy") {
        numberOne = Math.floor(Math.random() * 10)
        numberTwo = Math.floor(Math.random() * 10)
    }else if(mode === "medium"){
        numberOne = Math.floor(Math.random() * 30)
        numberTwo = Math.floor(Math.random() * 30)
    }else if(mode === "hard"){
        numberOne = Math.floor(Math.random() * 50)
        numberTwo = Math.floor(Math.random() * 50)
    }
    sign = "+"
if(multiPlayerB === false){


    document.getElementById("question").innerHTML = name + ", your question is " + numberOne + sign + numberTwo + "."
    document.getElementById("answer").style.visibility = "visible"
    document.getElementById("labelAnswer").style.visibility = "visible"
    document.getElementById("submitAnswer").style.visibility = "visible"
    document.getElementById("correct").style.visibility = "visible"
    if(unlock >= 4){
        document.getElementById("submitAnswer").disabled = false
        document.getElementById("correct_not").style.color = "black"
    }
}else  if(multiPlayerB === true){
    document.getElementById("labelTwoAnswer").style.visibility = "visible"
    document.getElementById("answerTwo").style.visibility = "visible"
    document.getElementById("submitAnswerTwo").style.visibility = "visible"
    document.getElementById("question").innerHTML = name + " & " + nameTwo + ", your question is " + numberOne + sign + numberTwo + "."
    document.getElementById("answer").style.visibility = "visible"
    document.getElementById("labelAnswer").style.visibility = "visible"
    document.getElementById("submitAnswer").style.visibility = "visible"
    document.getElementById("correct").style.visibility = "visible"
    if(unlock >= 4){
        document.getElementById("submitAnswer").disabled = false
        document.getElementById("correct_not").style.color = "black"
    }
}
}

function subtraction(){
    typesQuestions += 1
    unlock += 1
    if(mode === "easy"){
        numberOne = Math.floor(Math.random() * 10)
        numberTwo = Math.floor(Math.random() * 10)
        if(numberTwo > numberOne){
            randomVariable = numberOne
            numberOne = numberTwo
            numberTwo = randomVariable
        }
    }else if(mode === "medium"){
        numberOne = Math.floor(Math.random() * 30)
        numberTwo = Math.floor(Math.random() * 30)
        if(numberTwo > numberOne){
            randomVariable = numberOne
            numberOne = numberTwo
            numberTwo = randomVariable
        }
    }else if(mode === "hard"){
        numberOne = Math.floor(Math.random() * 50)
        numberTwo = Math.floor(Math.random() * 50)
        if(numberTwo > numberOne){
            randomVariable = numberOne
            numberOne = numberTwo
            numberTwo = randomVariable
        }
    }
    sign = "-"
    if(multiPlayerB === false){
        document.getElementById("question").innerHTML = name + ", your question is " + numberOne + sign + numberTwo + "."
        document.getElementById("answer").style.visibility = "visible"
        document.getElementById("labelAnswer").style.visibility = "visible"
        document.getElementById("submitAnswer").style.visibility = "visible"
        document.getElementById("correct").style.visibility = "visible"
        if(unlock >= 4){
            document.getElementById("submitAnswer").disabled = false
            document.getElementById("correct_not").style.color = "black"
        }
    }else  if(multiPlayerB === true){
        document.getElementById("labelTwoAnswer").style.visibility = "visible"
        document.getElementById("answerTwo").style.visibility = "visible"
        document.getElementById("submitAnswerTwo").style.visibility = "visible"
        document.getElementById("question").innerHTML = name + " & " + nameTwo + ", your question is " + numberOne + sign + numberTwo + "."
        document.getElementById("answer").style.visibility = "visible"
        document.getElementById("labelAnswer").style.visibility = "visible"
        document.getElementById("submitAnswer").style.visibility = "visible"
        document.getElementById("correct").style.visibility = "visible"
        if(unlock >= 4){
            document.getElementById("submitAnswer").disabled = false
            document.getElementById("correct_not").style.color = "black"
        }
    }
}

function multiplication(){
    typesQuestions += 1
    unlock += 1
    if(mode === "easy") {
        numberOne = Math.floor(Math.random() * 5)
        numberTwo = Math.floor(Math.random() * 10)
    }else if(mode === "medium"){
        numberOne = Math.floor(Math.random() * 15)
        numberTwo = Math.floor(Math.random() * 10)
    }else if(mode === "hard"){
        numberOne = Math.floor(Math.random() * 25)
        numberTwo = Math.floor(Math.random() * 10)
    }
    sign = "*"
    if(multiPlayerB === false){
        document.getElementById("question").innerHTML = name + ", your question is " + numberOne + sign + numberTwo + "."
        document.getElementById("answer").style.visibility = "visible"
        document.getElementById("labelAnswer").style.visibility = "visible"
        document.getElementById("submitAnswer").style.visibility = "visible"
        document.getElementById("correct").style.visibility = "visible"
        if(unlock >= 4){
            document.getElementById("submitAnswer").disabled = false
            document.getElementById("correct_not").style.color = "black"
        }
    }else  if(multiPlayerB === true){
        document.getElementById("labelTwoAnswer").style.visibility = "visible"
        document.getElementById("answerTwo").style.visibility = "visible"
        document.getElementById("submitAnswerTwo").style.visibility = "visible"
        document.getElementById("question").innerHTML = name + " & " + nameTwo + ", your question is " + numberOne + sign + numberTwo + "."
        document.getElementById("answer").style.visibility = "visible"
        document.getElementById("labelAnswer").style.visibility = "visible"
        document.getElementById("submitAnswer").style.visibility = "visible"
        document.getElementById("correct").style.visibility = "visible"
        if(unlock >= 4){
            document.getElementById("submitAnswer").disabled = false
            document.getElementById("correct_not").style.color = "black"
        }
    }
}

function division(){
    typesQuestions += 1
    unlock += 1
    if(mode === "easy"){
        numberOne = Math.floor(Math.random() * 10)
        numberTwo = Math.floor(Math.random() * 10) + 1
        if(numberTwo > numberOne){
            randomVariable2 = numberOne
            numberOne = numberTwo
            numberTwo = randomVariable2
        }
    }else if(mode === "medium"){
        numberOne = Math.floor(Math.random() * 30)
        numberTwo = Math.floor(Math.random() * 30) + 1
        if(numberTwo > numberOne){
            randomVariable2 = numberOne
            numberOne = numberTwo
            numberTwo = randomVariable2
        }
    }else if(mode === "hard"){
        numberOne = Math.floor(Math.random() * 50)
        numberTwo = Math.floor(Math.random() * 50) + 1
        if(numberTwo > numberOne){
            randomVariable2 = numberOne
            numberOne = numberTwo
            numberTwo = randomVariable2
        }
        
    }
        while(1){
        if(numberOne % numberTwo === 0){
            sign = "/"
            if(multiPlayerB === false){


                document.getElementById("question").innerHTML = name + ", your question is " + numberOne + sign + numberTwo + "."
                document.getElementById("answer").style.visibility = "visible"
                document.getElementById("labelAnswer").style.visibility = "visible"
                document.getElementById("submitAnswer").style.visibility = "visible"
                document.getElementById("correct").style.visibility = "visible"
                if(unlock >= 4){
                    document.getElementById("submitAnswer").disabled = false
                    document.getElementById("correct_not").style.color = "black"
                }
            }else  if(multiPlayerB === true){
                document.getElementById("labelTwoAnswer").style.visibility = "visible"
                document.getElementById("answerTwo").style.visibility = "visible"
                document.getElementById("submitAnswerTwo").style.visibility = "visible"
                document.getElementById("question").innerHTML = name + " & " + nameTwo + ", your question is " + numberOne + sign + numberTwo + "."
                document.getElementById("answer").style.visibility = "visible"
                document.getElementById("labelAnswer").style.visibility = "visible"
                document.getElementById("submitAnswer").style.visibility = "visible"
                document.getElementById("correct").style.visibility = "visible"
                if(unlock >= 4){
                    document.getElementById("submitAnswer").disabled = false
                    document.getElementById("correct_not").style.color = "black"
                }
            }
            
            break
        }else{
            if(mode === "easy"){
                numberOne = Math.floor(Math.random() * 10)
                numberTwo = Math.floor(Math.random() * 10) + 1
                if(numberTwo > numberOne){
                    randomVariable2 = numberOne
                    numberOne = numberTwo
                    numberTwo = randomVariable2
                }
            }else if(mode === "medium"){
                numberOne = Math.floor(Math.random() * 30)
                numberTwo = Math.floor(Math.random() * 30) + 1
                if(numberTwo > numberOne){
                    randomVariable2 = numberOne
                    numberOne = numberTwo
                    numberTwo = randomVariable2
                }
            }else if(mode === "hard"){
                numberOne = Math.floor(Math.random() * 50)
                numberTwo = Math.floor(Math.random() * 50) + 1
                if(numberTwo > numberOne){
                    randomVariable2 = numberOne
                    numberOne = numberTwo
                    numberTwo = randomVariable2
                }
                
            }
        }
        
    }
    if(unlock >= 4){
        document.getElementById("submitAnswer").disabled = false
        document.getElementById("correct_not").style.color = "black"
    }
}

function mixed(){
    mixedNumeral = true
    typesQuestions += 1
    unlock += 1
    let selector
    if(mode === "easy"){
        numberOne = Math.floor(Math.random() * 10)
        numberTwo = Math.floor(Math.random() * 10) + 1
        if(numberTwo > numberOne){
            randomVariable2 = numberOne
            numberOne = numberTwo
            numberTwo = randomVariable2
        }
    }else if(mode === "medium"){
        numberOne = Math.floor(Math.random() * 30)
        numberTwo = Math.floor(Math.random() * 30) + 1
        if(numberTwo > numberOne){
            randomVariable2 = numberOne
            numberOne = numberTwo
            numberTwo = randomVariable2
        }
    }else if(mode === "hard"){
        numberOne = Math.floor(Math.random() * 50)
        numberTwo = Math.floor(Math.random() * 50) + 1
        if(numberTwo > numberOne){
            randomVariable2 = numberOne
            numberOne = numberTwo
            numberTwo = randomVariable2
        }
    }
    selector = Math.floor(Math.random() * 4)
    if(selector === 0){
        sign = "+"
    }else if(selector === 1){
        sign = "-"
    }else if(selector === 2){
        sign = "*"
    }else if(selector === 3){
        sign = "/"
    }
    if(sign === "/"){
        while(1){
            if(numberOne % numberTwo === 0){
                sign = "/"
                if(multiPlayerB === false){


                    document.getElementById("question").innerHTML = name + ", your question is " + numberOne + sign + numberTwo + "."
                    document.getElementById("answer").style.visibility = "visible"
                    document.getElementById("labelAnswer").style.visibility = "visible"
                    document.getElementById("submitAnswer").style.visibility = "visible"
                    document.getElementById("correct").style.visibility = "visible"
                    if(unlock >= 4){
                        document.getElementById("submitAnswer").disabled = false
                        document.getElementById("correct_not").style.color = "black"
                    }
                }else  if(multiPlayerB === true){
                    document.getElementById("labelTwoAnswer").style.visibility = "visible"
                    document.getElementById("answerTwo").style.visibility = "visible"
                    document.getElementById("submitAnswerTwo").style.visibility = "visible"
                    document.getElementById("question").innerHTML = name + " & " + nameTwo + ", your question is " + numberOne + sign + numberTwo + "."
                    document.getElementById("answer").style.visibility = "visible"
                    document.getElementById("labelAnswer").style.visibility = "visible"
                    document.getElementById("submitAnswer").style.visibility = "visible"
                    document.getElementById("correct").style.visibility = "visible"
                    if(unlock >= 4){
                        document.getElementById("submitAnswer").disabled = false
                        document.getElementById("correct_not").style.color = "black"
                    }
                }
                break
            }else{
                if(mode === "easy"){
                    numberOne = Math.floor(Math.random() * 10)
                    numberTwo = Math.floor(Math.random() * 10) + 1
                    if(numberTwo > numberOne){
                        randomVariable2 = numberOne
                        numberOne = numberTwo
                        numberTwo = randomVariable2
                    }
                }else if(mode === "medium"){
                    numberOne = Math.floor(Math.random() * 30)
                    numberTwo = Math.floor(Math.random() * 30) + 1
                    if(numberTwo > numberOne){
                        randomVariable2 = numberOne
                        numberOne = numberTwo
                        numberTwo = randomVariable2
                    }
                }else if(mode === "hard"){
                    numberOne = Math.floor(Math.random() * 50)
                    numberTwo = Math.floor(Math.random() * 50) + 1
                    if(numberTwo > numberOne){
                        randomVariable2 = numberOne
                        numberOne = numberTwo
                        numberTwo = randomVariable2
                    }
                    
                }
            }
            
        }
    }else{
        if(multiPlayerB === false){


            document.getElementById("question").innerHTML = name + ", your question is " + numberOne + sign + numberTwo + "."
            document.getElementById("answer").style.visibility = "visible"
            document.getElementById("labelAnswer").style.visibility = "visible"
            document.getElementById("submitAnswer").style.visibility = "visible"
            document.getElementById("correct").style.visibility = "visible"
            if(unlock >= 4){
                document.getElementById("submitAnswer").disabled = false
                document.getElementById("correct_not").style.color = "black"
            }
        }else  if(multiPlayerB === true){
            document.getElementById("labelTwoAnswer").style.visibility = "visible"
            document.getElementById("answerTwo").style.visibility = "visible"
            document.getElementById("submitAnswerTwo").style.visibility = "visible"
            document.getElementById("question").innerHTML = name + " & " + nameTwo + ", your question is " + numberOne + sign + numberTwo + "."
            document.getElementById("answer").style.visibility = "visible"
            document.getElementById("labelAnswer").style.visibility = "visible"
            document.getElementById("submitAnswer").style.visibility = "visible"
            document.getElementById("correct").style.visibility = "visible"
            if(unlock >= 4){
                document.getElementById("submitAnswer").disabled = false
                document.getElementById("correct_not").style.color = "black"
            }
        }
    }
    if(unlock >= 4){
        document.getElementById("submitAnswer").disabled = false
        document.getElementById("correct_not").style.color = "black"
    }
}

function correctCircleColor() {
    totalCorrectAnswerCounter += 1
    correctAnswerCounter += 1
    if (attempts === 1) {
        document.getElementById("circle1").style.backgroundColor = "#06D6A0"
    } else if (attempts === 2) {
        document.getElementById("circle2").style.backgroundColor = "#06D6A0"
    } else if (attempts === 3) {
        document.getElementById("circle3").style.backgroundColor = "#06D6A0"
    } else if (attempts === 4) {
        document.getElementById("circle4").style.backgroundColor = "#06D6A0"
    } else if (attempts === 5) {
        document.getElementById("circle5").style.backgroundColor = "#06D6A0"
    } else {
        document.getElementById("circle1").style.backgroundColor = "#bbb"
        document.getElementById("circle2").style.backgroundColor = "#bbb"
        document.getElementById("circle3").style.backgroundColor = "#bbb"
        document.getElementById("circle4").style.backgroundColor = "#bbb"
        document.getElementById("circle5").style.backgroundColor = "#bbb"
        document.getElementById("circle1").style.backgroundColor = "#06D6A0"
        attempts = 1
        correctAnswerCounter = 1
    }
    if (mode === "easy") {

        if (sign === "+" && correctAnswerCounter === 5) {
            document.getElementById("addition").disabled = true
            document.getElementById("submitAnswer").disabled = true
            document.getElementById("correct_not").innerHTML = "You have Completed This Level, Please select new difficulty and mode"
            document.getElementById("correct_not").style.color = "Green"
            document.getElementById("easyMode").disabled = true
        }

        if (sign === "-" && correctAnswerCounter === 5) {
            document.getElementById("subtraction").disabled = true
            document.getElementById("submitAnswer").disabled = true
            document.getElementById("correct_not").innerHTML = "You have Completed This Level, Please select new difficulty and mode"
            document.getElementById("correct_not").style.color = "Green"
            document.getElementById("easyMode").disabled = true
        }

        if (sign === "*" && correctAnswerCounter === 5) {
            document.getElementById("multiplication").disabled = true
            document.getElementById("submitAnswer").disabled = true
            document.getElementById("correct_not").innerHTML = "You have Completed This Level, Please select new difficulty and mode"
            document.getElementById("correct_not").style.color = "Green"
            document.getElementById("easyMode").disabled = true
        }

        if (sign === "/" && correctAnswerCounter === 5) {
            document.getElementById("division").disabled = true
            document.getElementById("submitAnswer").disabled = true
            document.getElementById("correct_not").innerHTML = "You have Completed This Level, Please select new difficulty and mode"
            document.getElementById("correct_not").style.color = "Green"
            document.getElementById("easyMode").disabled = true
        }

    } else if (mode === "medium") {

        if (sign === "+" && correctAnswerCounter === 5) {
            document.getElementById("addition").disabled = true
            document.getElementById("submitAnswer").disabled = true
            document.getElementById("correct_not").innerHTML = "You have Completed This Level, Please select new difficulty and mode"
            document.getElementById("correct_not").style.color = "Green"
            document.getElementById("mediumMode").disabled = true
        }

        if (sign === "-" && correctAnswerCounter === 5) {
            document.getElementById("subtraction").disabled = true
            document.getElementById("submitAnswer").disabled = true
            document.getElementById("correct_not").innerHTML = "You have Completed This Level, Please select new difficulty and mode"
            document.getElementById("correct_not").style.color = "Green"
            document.getElementById("mediumMode").disabled = true
        }

        if (sign === "*" && correctAnswerCounter === 5) {
            document.getElementById("multiplication").disabled = true
            document.getElementById("submitAnswer").disabled = true
            document.getElementById("correct_not").innerHTML = "You have Completed This Level, Please select new difficulty and mode"
            document.getElementById("correct_not").style.color = "Green"
            document.getElementById("mediumMode").disabled = true
        }

        if (sign === "/" && correctAnswerCounter === 5) {
            document.getElementById("division").disabled = true
            document.getElementById("submitAnswer").disabled = true
            document.getElementById("correct_not").innerHTML = "You have Completed This Level, Please select new difficulty and mode"
            document.getElementById("correct_not").style.color = "Green"
            document.getElementById("mediumMode").disabled = true
        } 
    }else if (mode === "hard") {

            if (sign === "+" && correctAnswerCounter === 5) {
                document.getElementById("addition").disabled = true
                document.getElementById("submitAnswer").disabled = true
                document.getElementById("correct_not").innerHTML = "You have Completed This Level, Please select new difficulty and mode"
                document.getElementById("correct_not").style.color = "Green"

            }

            if (sign === "-" && correctAnswerCounter === 5) {
                document.getElementById("subtraction").disabled = true
                document.getElementById("submitAnswer").disabled = true
                document.getElementById("correct_not").innerHTML = "You have Completed This Level, Please select new difficulty and mode"
                document.getElementById("correct_not").style.color = "Green"

            }

            if (sign === "*" && correctAnswerCounter === 5) {
                document.getElementById("multiplication").disabled = true
                document.getElementById("submitAnswer").disabled = true
                document.getElementById("correct_not").innerHTML = "You have Completed This Level, Please select new difficulty and mode"
                document.getElementById("correct_not").style.color = "Green"

            }

            if (sign === "/" && correctAnswerCounter === 5) {
                document.getElementById("division").disabled = true
                document.getElementById("submitAnswer").disabled = true
                document.getElementById("correct_not").innerHTML = "You have Completed This Level, Please select new difficulty and mode"
                document.getElementById("correct_not").style.color = "Green"
            }

            if(mixedNumeral === true && correctAnswerCounter === 5){
                document.getElementById("mixed").disabled = true
                document.getElementById("submitAnswer").disabled = true
                document.getElementById("correct_not").innerHTML = "You have Completed This Level, Please select new difficulty and mode"
                document.getElementById("correct_not").style.color = "Green"
            }

        }
    document.getElementById("earnedBadge").innerHTML = null
            if(totalCorrectAnswerCounter === 1){
                document.getElementById("badge1").style.visibility = "visible"
                document.getElementById("earnedBadge").innerHTML = "You earned the participation badge! Check badges below."
            }
            if(totalCorrectAnswerCounter === 5){
                document.getElementById("badge2").style.visibility = "visible"
                document.getElementById("earnedBadge").innerHTML = "You earned the 5 questions badge! Check badges below."
            }
            if(totalCorrectAnswerCounter === 10){
                document.getElementById("badge3").style.visibility = "visible"
                document.getElementById("earnedBadge").innerHTML = "You earned the 10 questions badge! Check badges below."
            }
            if(totalCorrectAnswerCounter === 20){
                document.getElementById("badge4").style.visibility = "visible"
                document.getElementById("earnedBadge").innerHTML = "You earned the Master of Answers badge! Check badges below."
            }
            if(typesQuestions === 5 && totalCorrectAnswerCounter === 25){
                document.getElementById("badge5").style.visibility = "visible"
                document.getElementById("correct_not").innerHTML = "You have completed this game. Congratulations."
                document.getElementById("earnedBadge").innerHTML = "You earned the Course Completion Award! Check badges below."
            }
            if(multiPlayerB === true){
                document.getElementById("multDisplay").innerHTML = "Continue with the same person"
            }
}
    function incorrectCircleColor() {
        totalIncorrectAnswerCounter += 1
        incorrectAnswerCounter += 1
        document.getElementById("earnedBadge").innerHTML = null
        if (attempts === 1) {
            document.getElementById("circle1").style.backgroundColor = "#EF476F"
        } else if (attempts === 2) {
            document.getElementById("circle2").style.backgroundColor = "#EF476F"
        } else if (attempts === 3) {
            document.getElementById("circle3").style.backgroundColor = "#EF476F"
        } else if (attempts === 4) {
            document.getElementById("circle4").style.backgroundColor = "#EF476F"
        } else if (attempts === 5) {
            document.getElementById("circle5").style.backgroundColor = "#EF476F"
        } else {
            document.getElementById("circle1").style.backgroundColor = "#bbb"
            document.getElementById("circle2").style.backgroundColor = "#bbb"
            document.getElementById("circle3").style.backgroundColor = "#bbb"
            document.getElementById("circle4").style.backgroundColor = "#bbb"
            document.getElementById("circle5").style.backgroundColor = "#bbb"
            document.getElementById("circle1").style.backgroundColor = "#EF476F"
            incorrectAnswerCounter = 0
            attempts = 1

        }

        if (incorrectAnswerCounter === 1) {
            correctAnswerCounter = 0
        }

    }

    function submitAnswer() {
        if (sign === "+") {
            
            userAnswer = document.getElementById("answer").value
            actualAnswer = numberOne + numberTwo
            actualAnswer = actualAnswer.toString()
            if (actualAnswer === userAnswer) {
                document.getElementById("correct_not").innerHTML = name + ", your answer  is correct"
                numCorrect += 1
                attempts += 1
                totalAttempts += 1
                correctCircleColor()
            } else {
                document.getElementById("correct_not").innerHTML = name + ",  your answer is incorrect"
                numWrong += 1
                attempts += 1
                totalAttempts += 1
                incorrectCircleColor()
                if(multiPlayerB === true){
                    document.getElementById("multDisplay").innerHTML = "Please pass to next Player"
                }
            }
            if (mode === "easy") {
                numberOne = Math.floor(Math.random() * 10)
                numberTwo = Math.floor(Math.random() * 10)
            } else if (mode === "medium") {
                numberOne = Math.floor(Math.random() * 30)
                numberTwo = Math.floor(Math.random() * 30)
            } else if (mode === "hard") {
                numberOne = Math.floor(Math.random() * 50)
                numberTwo = Math.floor(Math.random() * 50)
            }
            if(multiPlayerB === false){
            document.getElementById("question").innerHTML = name + ", your question is " + numberOne + sign + numberTwo + "."
            }else if(multiPlayerB === true){
                document.getElementById("question").innerHTML = name + " & " + nameTwo + ", your question is " + numberOne + sign + numberTwo + "."
            }
        } else if (sign === "-") {
            userAnswer = document.getElementById("answer").value
            actualAnswer = numberOne - numberTwo
            actualAnswer = actualAnswer.toString()
            if (actualAnswer === userAnswer) {
                document.getElementById("correct_not").innerHTML = name + ", your answer  is correct"
                numCorrect += 1
                attempts += 1
                totalAttempts += 1
                correctCircleColor()
            } else {
                document.getElementById("correct_not").innerHTML = name + ",  your answer is incorrect"
                numWrong += 1
                attempts += 1
                totalAttempts += 1
                incorrectCircleColor()
                if(multiPlayerB === true){
                    document.getElementById("multDisplay").innerHTML = "Please pass to next Player"
                }
            }
            if (mode === "easy") {
                numberOne = Math.floor(Math.random() * 10)
                numberTwo = Math.floor(Math.random() * 10)
                if (numberTwo > numberOne) {
                    randomVariable = numberOne
                    numberOne = numberTwo
                    numberTwo = randomVariable
                }
            } else if (mode === "medium") {
                numberOne = Math.floor(Math.random() * 30)
                numberTwo = Math.floor(Math.random() * 30)
                if (numberTwo > numberOne) {
                    randomVariable = numberOne
                    numberOne = numberTwo
                    numberTwo = randomVariable
                }
            } else if (mode === "hard") {
                numberOne = Math.floor(Math.random() * 50)
                numberTwo = Math.floor(Math.random() * 50)
                if (numberTwo > numberOne) {
                    randomVariable = numberOne
                    numberOne = numberTwo
                    numberTwo = randomVariable
                }
            }
            if(multiPlayerB === false){
                document.getElementById("question").innerHTML = name + ", your question is " + numberOne + sign + numberTwo + "."
                }else if(multiPlayerB === true){
                    document.getElementById("question").innerHTML = name + " & " + nameTwo + ", your question is " + numberOne + sign + numberTwo + "."
                }
        } else if (sign === "*") {
            userAnswer = document.getElementById("answer").value
            actualAnswer = numberOne * numberTwo
            actualAnswer = actualAnswer.toString()
            if (actualAnswer === userAnswer) {
                document.getElementById("correct_not").innerHTML = name + ", your answer  is correct"
                numCorrect += 1
                attempts += 1
                totalAttempts += 1
                correctCircleColor()
            } else {
                document.getElementById("correct_not").innerHTML = name + ",  your answer is incorrect"
                numWrong += 1
                attempts += 1
                totalAttempts += 1
                incorrectCircleColor()
                if(multiPlayerB === true){
                    document.getElementById("multDisplay").innerHTML = "Please pass to next Player"
                }
            }
            if (mode === "easy") {
                numberOne = Math.floor(Math.random() * 5)
                numberTwo = Math.floor(Math.random() * 10)
            } else if (mode === "medium") {
                numberOne = Math.floor(Math.random() * 15)
                numberTwo = Math.floor(Math.random() * 10)
            } else if (mode === "hard") {
                numberOne = Math.floor(Math.random() * 25)
                numberTwo = Math.floor(Math.random() * 10)
            }
            if(multiPlayerB === false){
                document.getElementById("question").innerHTML = name + ", your question is " + numberOne + sign + numberTwo + "."
                }else if(multiPlayerB === true){
                    document.getElementById("question").innerHTML = name + " & " + nameTwo + ", your question is " + numberOne + sign + numberTwo + "."
                }
        } else if (sign === "/") {
            userAnswer = document.getElementById("answer").value
            actualAnswer = numberOne / numberTwo
            actualAnswer = actualAnswer.toString()
            if (actualAnswer === userAnswer) {
                document.getElementById("correct_not").innerHTML = name + ", your answer  is correct"
                numCorrect += 1
                attempts += 1
                totalAttempts += 1
                correctCircleColor()
            } else {
                document.getElementById("correct_not").innerHTML = name + ",  your answer is incorrect"
                numWrong += 1
                attempts += 1
                totalAttempts += 1
                incorrectCircleColor()
                if(multiPlayerB === true){
                    document.getElementById("multDisplay").innerHTML = "Please pass to next Player"
                }
            }
            if (mode === "easy") {
                numberOne = Math.floor(Math.random() * 10)
                numberTwo = Math.floor(Math.random() * 10) + 1
                if (numberTwo > numberOne) {
                    randomVariable2 = numberOne
                    numberOne = numberTwo
                    numberTwo = randomVariable2
                }
            } else if (mode === "medium") {
                numberOne = Math.floor(Math.random() * 30)
                numberTwo = Math.floor(Math.random() * 30) + 1
                if (numberTwo > numberOne) {
                    randomVariable2 = numberOne
                    numberOne = numberTwo
                    numberTwo = randomVariable2
                }
            } else if (mode === "hard") {
                numberOne = Math.floor(Math.random() * 50)
                numberTwo = Math.floor(Math.random() * 50) + 1
                if (numberTwo > numberOne) {
                    randomVariable2 = numberOne
                    numberOne = numberTwo
                    numberTwo = randomVariable2
                }
            }
            while (1) {
                if (numberOne % numberTwo === 0) {
                    if(multiPlayerB === false){
                        document.getElementById("question").innerHTML = name + ", your question is " + numberOne + sign + numberTwo + "."
                        }else if(multiPlayerB === true){
                            document.getElementById("question").innerHTML = name + " & " + nameTwo + ", your question is " + numberOne + sign + numberTwo + "."
                        }
                    break
                } else {
                    if (mode === "easy") {
                        numberOne = Math.floor(Math.random() * 10)
                        numberTwo = Math.floor(Math.random() * 10) + 1
                        if (numberTwo > numberOne) {
                            randomVariable2 = numberOne
                            numberOne = numberTwo
                            numberTwo = randomVariable2
                        }
                    } else if (mode === "medium") {
                        numberOne = Math.floor(Math.random() * 30)
                        numberTwo = Math.floor(Math.random() * 30) + 1
                        if (numberTwo > numberOne) {
                            randomVariable2 = numberOne
                            numberOne = numberTwo
                            numberTwo = randomVariable2
                        }
                    } else if (mode === "hard") {
                        numberOne = Math.floor(Math.random() * 50)
                        numberTwo = Math.floor(Math.random() * 50) + 1
                        if (numberTwo > numberOne) {
                            randomVariable2 = numberOne
                            numberOne = numberTwo
                            numberTwo = randomVariable2
                        }
                    }
                }
            }

        }
        document.getElementById("attemptShow").innerHTML = "Total Attempts: " + totalAttempts + " ||| " + " Correct: " + totalCorrectAnswerCounter + " ||| " + " Incorrect: " + totalIncorrectAnswerCounter

}
function submitAnswerTwo(){
    if (sign === "+") {
            
        userAnswer = document.getElementById("answerTwo").value
        actualAnswer = numberOne + numberTwo
        actualAnswer = actualAnswer.toString()
        if (actualAnswer === userAnswer) {
            document.getElementById("correct_not").innerHTML = nameTwo + ", your answer  is correct"
            numCorrect += 1
            attempts += 1
            totalAttempts += 1
            correctCircleColor()
        } else {
            document.getElementById("correct_not").innerHTML = nameTwo + ",  your answer is incorrect"
            numWrong += 1
            attempts += 1
            totalAttempts += 1
            incorrectCircleColor()
            if(multiPlayerB === true){
                document.getElementById("multDisplay").innerHTML = "Please pass to next Player"
            }
        }
        if (mode === "easy") {
            numberOne = Math.floor(Math.random() * 10)
            numberTwo = Math.floor(Math.random() * 10)
        } else if (mode === "medium") {
            numberOne = Math.floor(Math.random() * 30)
            numberTwo = Math.floor(Math.random() * 30)
        } else if (mode === "hard") {
            numberOne = Math.floor(Math.random() * 50)
            numberTwo = Math.floor(Math.random() * 50)
        }
        if(multiPlayerB === false){
            document.getElementById("question").innerHTML = nameTwo + ", your question is " + numberOne + sign + numberTwo + "."
            }else if(multiPlayerB === true){
                document.getElementById("question").innerHTML = nameTwo + " & " + nameTwo + ", your question is " + numberOne + sign + numberTwo + "."
            }
    } else if (sign === "-") {
        userAnswer = document.getElementById("answerTwo").value
        actualAnswer = numberOne - numberTwo
        actualAnswer = actualAnswer.toString()
        if (actualAnswer === userAnswer) {
            document.getElementById("correct_not").innerHTML = nameTwo + ", your answer  is correct"
            numCorrect += 1
            attempts += 1
            totalAttempts += 1
            correctCircleColor()
        } else {
            document.getElementById("correct_not").innerHTML = nameTwo + ",  your answer is incorrect"
            numWrong += 1
            attempts += 1
            totalAttempts += 1
            incorrectCircleColor()
            if(multiPlayerB === true){
                document.getElementById("multDisplay").innerHTML = "Please pass to next Player"
            }
        }
        if (mode === "easy") {
            numberOne = Math.floor(Math.random() * 10)
            numberTwo = Math.floor(Math.random() * 10)
            if (numberTwo > numberOne) {
                randomVariable = numberOne
                numberOne = numberTwo
                numberTwo = randomVariable
            }
        } else if (mode === "medium") {
            numberOne = Math.floor(Math.random() * 30)
            numberTwo = Math.floor(Math.random() * 30)
            if (numberTwo > numberOne) {
                randomVariable = numberOne
                numberOne = numberTwo
                numberTwo = randomVariable
            }
        } else if (mode === "hard") {
            numberOne = Math.floor(Math.random() * 50)
            numberTwo = Math.floor(Math.random() * 50)
            if (numberTwo > numberOne) {
                randomVariable = numberOne
                numberOne = numberTwo
                numberTwo = randomVariable
            }
        }
        if(multiPlayerB === false){
            document.getElementById("question").innerHTML = nameTwo + ", your question is " + numberOne + sign + numberTwo + "."
            }else if(multiPlayerB === true){
                document.getElementById("question").innerHTML = nameTwo + " & " + nameTwo + ", your question is " + numberOne + sign + numberTwo + "."
            }
    } else if (sign === "*") {
        userAnswer = document.getElementById("answerTwo").value
        actualAnswer = numberOne * numberTwo
        actualAnswer = actualAnswer.toString()
        if (actualAnswer === userAnswer) {
            document.getElementById("correct_not").innerHTML = nameTwo + ", your answer  is correct"
            numCorrect += 1
            attempts += 1
            totalAttempts += 1
            correctCircleColor()
        } else {
            document.getElementById("correct_not").innerHTML = nameTwo + ",  your answer is incorrect"
            numWrong += 1
            attempts += 1
            totalAttempts += 1
            incorrectCircleColor()
            if(multiPlayerB === true){
                document.getElementById("multDisplay").innerHTML = "Please pass to next Player"
            }
        }
        if (mode === "easy") {
            numberOne = Math.floor(Math.random() * 5)
            numberTwo = Math.floor(Math.random() * 10)
        } else if (mode === "medium") {
            numberOne = Math.floor(Math.random() * 15)
            numberTwo = Math.floor(Math.random() * 10)
        } else if (mode === "hard") {
            numberOne = Math.floor(Math.random() * 25)
            numberTwo = Math.floor(Math.random() * 10)
        }
        if(multiPlayerB === false){
            document.getElementById("question").innerHTML = nameTwo + ", your question is " + numberOne + sign + numberTwo + "."
            }else if(multiPlayerB === true){
                document.getElementById("question").innerHTML = nameTwo + " & " + nameTwo + ", your question is " + numberOne + sign + numberTwo + "."
            }
    } else if (sign === "/") {
        userAnswer = document.getElementById("answerTwo").value
        actualAnswer = numberOne / numberTwo
        actualAnswer = actualAnswer.toString()
        if (actualAnswer === userAnswer) {
            document.getElementById("correct_not").innerHTML = nameTwo + ", your answer  is correct"
            numCorrect += 1
            attempts += 1
            totalAttempts += 1
            correctCircleColor()
        } else {
            document.getElementById("correct_not").innerHTML = nameTwo + ",  your answer is incorrect"
            numWrong += 1
            attempts += 1
            totalAttempts += 1
            incorrectCircleColor()
            if(multiPlayerB === true){
                document.getElementById("multDisplay").innerHTML = "Please pass to next Player"
            }
        }
        if (mode === "easy") {
            numberOne = Math.floor(Math.random() * 10)
            numberTwo = Math.floor(Math.random() * 10) + 1
            if (numberTwo > numberOne) {
                randomVariable2 = numberOne
                numberOne = numberTwo
                numberTwo = randomVariable2
            }
        } else if (mode === "medium") {
            numberOne = Math.floor(Math.random() * 30)
            numberTwo = Math.floor(Math.random() * 30) + 1
            if (numberTwo > numberOne) {
                randomVariable2 = numberOne
                numberOne = numberTwo
                numberTwo = randomVariable2
            }
        } else if (mode === "hard") {
            numberOne = Math.floor(Math.random() * 50)
            numberTwo = Math.floor(Math.random() * 50) + 1
            if (numberTwo > numberOne) {
                randomVariable2 = numberOne
                numberOne = numberTwo
                numberTwo = randomVariable2
            }
        }
        while (1) {
            if (numberOne % numberTwo === 0) {
                if(multiPlayerB === false){
                    document.getElementById("question").innerHTML = nameTwo + ", your question is " + numberOne + sign + numberTwo + "."
                    }else if(multiPlayerB === true){
                        document.getElementById("question").innerHTML = nameTwo + " & " + nameTwo + ", your question is " + numberOne + sign + numberTwo + "."
                    }
                break
            } else {
                if (mode === "easy") {
                    numberOne = Math.floor(Math.random() * 10)
                    numberTwo = Math.floor(Math.random() * 10) + 1
                    if (numberTwo > numberOne) {
                        randomVariable2 = numberOne
                        numberOne = numberTwo
                        numberTwo = randomVariable2
                    }
                } else if (mode === "medium") {
                    numberOne = Math.floor(Math.random() * 30)
                    numberTwo = Math.floor(Math.random() * 30) + 1
                    if (numberTwo > numberOne) {
                        randomVariable2 = numberOne
                        numberOne = numberTwo
                        numberTwo = randomVariable2
                    }
                } else if (mode === "hard") {
                    numberOne = Math.floor(Math.random() * 50)
                    numberTwo = Math.floor(Math.random() * 50) + 1
                    if (numberTwo > numberOne) {
                        randomVariable2 = numberOne
                        numberOne = numberTwo
                        numberTwo = randomVariable2
                    }
                }
            }
        }
    }
    document.getElementById("attemptShow").innerHTML = "Total Attempts: " + totalAttempts + " ||| " + " Correct: " + totalCorrectAnswerCounter + " ||| " + " Incorrect: " + totalIncorrectAnswerCounter

}