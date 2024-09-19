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
function makeVisible(){
    if(visib === true){
        document.getElementById("labelName").style.visibility = "visible"
        document.getElementById("nameInput").style.visibility = "visible"
        document.getElementById("submitName").style.visibility = "visible"
        document.getElementById("badgesButton").style.visibility = "visible"
    }else if(visib === false){
        document.getElementById("diffLabel").style.visibility = "hidden"
        document.getElementById("labelName").style.visibility = "hidden"
        document.getElementById("nameInput").style.visibility = "hidden"
        document.getElementById("submitName").style.visibility = "hidden"
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

function startGame(){
    visib = true
    makeVisible()
    disable = true
    disableFunction()
}
function submitName(){
    name = document.getElementById("nameInput").value
    disable = false
    disableFunction()
    showDiff()
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

    document.getElementById("question").innerHTML = name + ", your question is " + numberOne + sign + numberTwo + "."
    document.getElementById("answer").style.visibility = "visible"
    document.getElementById("labelAnswer").style.visibility = "visible"
    document.getElementById("submitAnswer").style.visibility = "visible"
    document.getElementById("correct").style.visibility = "visible"
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
    document.getElementById("question").innerHTML = name + ", your question is " + numberOne + sign + numberTwo + "."
    document.getElementById("answer").style.visibility = "visible"
    document.getElementById("labelAnswer").style.visibility = "visible"
    document.getElementById("submitAnswer").style.visibility = "visible"
    document.getElementById("correct").style.visibility = "visible"
    if(unlock === 3 || unlock === 4){
        document.getElementById("submitAnswer").disabled = false
        alert("woojoo 326ln")
    }
}

function multiplication(){
    typesQuestions += 1
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
    document.getElementById("question").innerHTML = name + ", your question is " + numberOne + sign + numberTwo + "."
    document.getElementById("answer").style.visibility = "visible"
    document.getElementById("labelAnswer").style.visibility = "visible"
    document.getElementById("submitAnswer").style.visibility = "visible"
    document.getElementById("correct").style.visibility = "visible"
}

function division(){
    typesQuestions += 1
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
            document.getElementById("question").innerHTML = name + ", your question is " + numberOne + sign + numberTwo + "."
            document.getElementById("answer").style.visibility = "visible"
            document.getElementById("labelAnswer").style.visibility = "visible"
            document.getElementById("submitAnswer").style.visibility = "visible"
            document.getElementById("correct").style.visibility = "visible"
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
}

function mixed(){
    typesQuestions += 1
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
                document.getElementById("question").innerHTML = name + ", your question is " + numberOne + sign + numberTwo + "."
                document.getElementById("answer").style.visibility = "visible"
                document.getElementById("labelAnswer").style.visibility = "visible"
                document.getElementById("submitAnswer").style.visibility = "visible"
                document.getElementById("correct").style.visibility = "visible"
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
        document.getElementById("question").innerHTML = name + ", your question is " + numberOne + sign + numberTwo + "."
        document.getElementById("answer").style.visibility = "visible"
        document.getElementById("labelAnswer").style.visibility = "visible"
        document.getElementById("submitAnswer").style.visibility = "visible"
        document.getElementById("correct").style.visibility = "visible"
    }
}

function correctCircleColor(){
    totalCorrectAnswerCounter += 1
    correctAnswerCounter += 1
    if(attempts === 1){
        document.getElementById("circle1").style.backgroundColor = "green"
    }else if(attempts === 2){
        document.getElementById("circle2").style.backgroundColor = "green"   
    }else if(attempts === 3){
        document.getElementById("circle3").style.backgroundColor = "green"
    }else if(attempts === 4){
        document.getElementById("circle4").style.backgroundColor = "green"
    }else if(attempts === 5){
        document.getElementById("circle5").style.backgroundColor = "green"
    }else{
        document.getElementById("circle1").style.backgroundColor = "#bbb"
        document.getElementById("circle2").style.backgroundColor = "#bbb"
        document.getElementById("circle3").style.backgroundColor = "#bbb"
        document.getElementById("circle4").style.backgroundColor = "#bbb"
        document.getElementById("circle5").style.backgroundColor = "#bbb"
        document.getElementById("circle1").style.backgroundColor = "green"
        attempts = 1
    }
    if(mode === "easy"){
        if(sign === "+" && totalCorrectAnswerCounter === 10){
            document.getElementById("addition").disabled = true
            document.getElementById("submitAnswer").disabled = true
            document.getElementById("correct_not").innerHTML = "Please select new mode and level."
            document.getElementById("correct_not").style.color = "Green"
            document.getElementById("easyMode").disabled = true
        }
        if(sign === "-" && totalCorrectAnswerCounter === 10){
            document.getElementById("subtraction").disabled = true
            document.getElementById("submitAnswer").disabled = true
            document.getElementById("correct_not").innerHTML = "Please select new mode and level."
            document.getElementById("correct_not").style.color = "Green"
            document.getElementById("easyMode").disabled = true
        }
        if(sign === "*" && totalCorrectAnswerCounter === 10){
            document.getElementById("multiplication").disabled = true
            document.getElementById("submitAnswer").disabled = true
            document.getElementById("correct_not").innerHTML = "Please select new mode and level."
            document.getElementById("correct_not").style.color = "Green"
            document.getElementById("easyMode").disabled = true
        }
        if(sign === "/" && totalCorrectAnswerCounter === 10){
            document.getElementById("division").disabled = true
            document.getElementById("submitAnswer").disabled = true
            document.getElementById("correct_not").innerHTML = "Please select new mode and level."
            document.getElementById("correct_not").style.color = "Green"
            document.getElementById("easyMode").disabled = true
        }
    }else if(mode === "medium"){
        if(sign === "+" && totalCorrectAnswerCounter === 10){
            document.getElementById("addition").disabled = true
            document.getElementById("submitAnswer").disabled = true
            document.getElementById("correct_not").innerHTML = "Please select new mode and level."
            document.getElementById("correct_not").style.color = "Green"
            document.getElementById("mediumMode").disabled = true
        }
        if(sign === "-" && totalCorrectAnswerCounter === 10){
            document.getElementById("subtraction").disabled = true
            document.getElementById("submitAnswer").disabled = true
            document.getElementById("correct_not").innerHTML = "Please select new mode and level."
            document.getElementById("correct_not").style.color = "Green"
            document.getElementById("mediumMode").disabled = true
        }
        if(sign === "*" && totalCorrectAnswerCounter === 10){
            document.getElementById("multiplication").disabled = true
            document.getElementById("submitAnswer").disabled = true
            document.getElementById("correct_not").innerHTML = "Please select new mode and level."
            document.getElementById("correct_not").style.color = "Green"
            document.getElementById("mediumMode").disabled = true
        }
        if(sign === "/" && totalCorrectAnswerCounter === 10){
            document.getElementById("division").disabled = true
            document.getElementById("submitAnswer").disabled = true
            document.getElementById("correct_not").innerHTML = "Please select new mode and level."
            document.getElementById("correct_not").style.color = "Green"
            document.getElementById("mediumMode").disabled = true
        }
    }




    if(correctAnswerCounter === 1){
        //document.getElementById("badge1").style.visibility = "visible"
    }
    if(correctAnswerCounter === 5){
        //document.getElementById("badge2").style.visibility = "visible"
    }
    if(correctAnswerCounter === 10){
        //document.getElementById("badge3").style.visibility = "visible"
    }
    if(correctAnswerCounter === 20){
        //document.getElementById("badge4").style.visibility = "visible"
    }
    if(typesQuestions === 5 && correctAnswerCounter === 25){
        //document.getElementById("badge 5").style.visiblity = "visible"
    }
}
function incorrectCircleColor(){
    totalIncorrectAnswerCounter += 1
    incorrectAnswerCounter += 1
    if(attempts === 1){
        document.getElementById("circle1").style.backgroundColor = "red"
    }else if(attempts === 2){
        document.getElementById("circle2").style.backgroundColor = "red"   
    }else if(attempts === 3){
        document.getElementById("circle3").style.backgroundColor = "red"
    }else if(attempts === 4){
        document.getElementById("circle4").style.backgroundColor = "red"
    }else if(attempts === 5){
        document.getElementById("circle5").style.backgroundColor = "red"
    }else{
        document.getElementById("circle1").style.backgroundColor = "#bbb"
        document.getElementById("circle2").style.backgroundColor = "#bbb"
        document.getElementById("circle3").style.backgroundColor = "#bbb"
        document.getElementById("circle4").style.backgroundColor = "#bbb"
        document.getElementById("circle5").style.backgroundColor = "#bbb"
        document.getElementById("circle1").style.backgroundColor = "red"
        incorrectAnswerCounter = 0
        attempts = 1
    }
    if(incorrectAnswerCounter === 1){
        correctAnswerCounter = 0
    }
}

function submitAnswer(){
    if(sign === "+"){
    userAnswer = document.getElementById("answer").value
    actualAnswer = numberOne + numberTwo
    actualAnswer = actualAnswer.toString()
    if(actualAnswer === userAnswer){
        document.getElementById("correct_not").innerHTML = name +  ", your answer  is correct"
        numCorrect += 1
        attempts += 1
        totalAttempts += 1
        correctCircleColor()
    }else{
        document.getElementById("correct_not").innerHTML = name +  ",  your answer is incorrect"
        numWrong += 1
        attempts += 1
        totalAttempts += 1
        incorrectCircleColor()
    }
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
    document.getElementById("question").innerHTML = name + ", your question is " + numberOne + sign + numberTwo + "."
    }else if(sign === "-"){   
    userAnswer = document.getElementById("answer").value
    actualAnswer = numberOne - numberTwo
    actualAnswer = actualAnswer.toString()
    if(actualAnswer === userAnswer){
        document.getElementById("correct_not").innerHTML = name +  ", your answer  is correct"
        numCorrect += 1
        attempts += 1
        totalAttempts += 1
        correctCircleColor()
    }else{
        document.getElementById("correct_not").innerHTML = name +  ",  your answer is incorrect"
        numWrong += 1
        attempts += 1
        totalAttempts += 1
        incorrectCircleColor()
    }
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
    document.getElementById("question").innerHTML = name + ", your question is " + numberOne + sign + numberTwo + "."
    }else if(sign === "*"){   
    userAnswer = document.getElementById("answer").value
    actualAnswer = numberOne * numberTwo
    actualAnswer = actualAnswer.toString()
    if(actualAnswer === userAnswer){
        document.getElementById("correct_not").innerHTML = name +  ", your answer  is correct"
        numCorrect += 1
        attempts += 1
        totalAttempts += 1
        correctCircleColor()
    }else{
        document.getElementById("correct_not").innerHTML = name +  ",  your answer is incorrect"
        numWrong += 1
        attempts += 1
        totalAttempts += 1
        incorrectCircleColor()
    }
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
    document.getElementById("question").innerHTML = name + ", your question is " + numberOne + sign + numberTwo + "."
    }else if(sign === "/"){       
    userAnswer = document.getElementById("answer").value
    actualAnswer = numberOne / numberTwo
    actualAnswer = actualAnswer.toString()
    if(actualAnswer === userAnswer){
        document.getElementById("correct_not").innerHTML = name +  ", your answer  is correct"
        numCorrect += 1
        attempts += 1
        totalAttempts += 1
        correctCircleColor()
    }else{
        document.getElementById("correct_not").innerHTML = name +  ",  your answer is incorrect"
        numWrong += 1
        attempts += 1
        totalAttempts += 1
        incorrectCircleColor()
    }
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
            document.getElementById("question").innerHTML = name + ", your question is " + numberOne + sign + numberTwo + "."
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
    
    }
    document.getElementById("attemptShow").innerHTML = "Total Attempts: " + totalAttempts + " ||| " + " Correct: " + totalCorrectAnswerCounter + " ||| " + " Incorrect: " + totalIncorrectAnswerCounter 
}

function goBack(){
    window.history.back()
}