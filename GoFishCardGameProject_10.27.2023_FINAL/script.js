let deck = []
let playerDeck = []
let computerDeck = []
let computer2Deck =[]
let cardDeck = ["AD.jpg", "2D.jpg", "3D.jpg", "4D.jpg", "5D.jpg", "6D.jpg", "7D.jpg", "8D.jpg", "9D.jpg", "10D.jpg", "JD.jpg", "QD.jpg", "KD.jpg"]
let playerImageID = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10"]
let computerImageID = ["card1C1", "card2C1", "card3C1", "card4C1", "card5C1", "card6C1", "card7C1", "card8C1", "card9C1", "card10C1"]
let computer2ImageID = ["card1C2", "card2C2", "card3C2", "card4C2", "card5C2", "card6C2", "card7C2", "card8C2", "card9C2", "card10C2"]
let turn = 0
let cardSelector = -1
let cardFound = false
let index = -1
let playerSets = 0
let computerSets = 0
let computer2Sets = 0
let playerOption
function show(){
    deck = []
    playerDeck = []
    computerDeck = []
    computer2Deck = []
    document.getElementById("totalDeckHeader").hidden = false
    document.getElementById("playerCardsHeader").hidden = false
    document.getElementById("computerCardsHeader").hidden = false
    document.getElementById("computer2CardsHeader").hidden = false
    document.getElementById("turns").hidden = false
    document.getElementById("playerTurnButton").disabled = true
    document.getElementById("computerTurnButton").disabled = true
    document.getElementById("computer2TurnButton").disabled = true
    document.getElementById("pairHeader").hidden = false
    document.getElementById("imageDeck").hidden = false
    document.getElementById("playerChoose").hidden = false
    document.getElementById("chooseComputer").disabled = true
    document.getElementById("chooseComputer2").disabled = true
    document.getElementById("imageDeckComputer").hidden = false
    document.getElementById("imageDeckComputer2").hidden = false
}
function playerEnabler(){
    document.getElementById("playerTurnButton").disabled = true
    document.getElementById("computerTurnButton").disabled = true
    document.getElementById("computer2TurnButton").disabled = true
    document.getElementById("turn").innerHTML = "Player's Turn | Choose who you want to take from: "
    document.getElementById("chooseComputer").disabled = false
    document.getElementById("chooseComputer2").disabled = false
}
function computerEnabler(){
    document.getElementById("playerTurnButton").disabled = true
    document.getElementById("computerTurnButton").disabled = false
    document.getElementById("computer2TurnButton").disabled = true
    document.getElementById("turn").innerHTML = "Computer's Turn"
    document.getElementById("chooseComputer").disabled = true
    document.getElementById("chooseComputer2").disabled = true
}
function computer2Enabler(){
    document.getElementById("computerTurnButton").disabled = true
    document.getElementById("playerTurnButton").disabled = true
    document.getElementById("computer2TurnButton").disabled = false
    document.getElementById("turn").innerHTML = "Computer 2's Turn"  
    document.getElementById("chooseComputer").disabled = true
    document.getElementById("chooseComputer2").disabled = true  
}
function allDeckUpdater(){
    document.getElementById("totalDeck").innerHTML = deck
    document.getElementById("playerCards").innerHTML = playerDeck
    document.getElementById("computerCards").innerHTML = computerDeck
    document.getElementById("computer2Cards").innerHTML = computer2Deck
    for(let i = 0; i <= playerDeck.length+2; i++){
        document.getElementById(playerImageID[i]).src = null
    }
    for(let i = 0; i <= computerDeck.length+2; i++){
        document.getElementById(computerImageID[i]).src = null
    }
    for(let i = 0; i <= computer2Deck.length+2; i++){
        document.getElementById(computer2ImageID[i]).src = null
    }
    for(let i = 0; i < playerDeck.length; i++){
        document.getElementById(playerImageID[i]).src = "Source Directory/JPEG/" + cardDeck[playerDeck[i]-1]
    }
    for(let i = 0; i < computerDeck.length; i++){
        document.getElementById(computerImageID[i]).src = "Source Directory/JPEG/" + cardDeck[computerDeck[i]-1]
    }
    for(let i = 0; i < computer2Deck.length; i++){
        document.getElementById(computer2ImageID[i]).src = "Source Directory/JPEG/" + cardDeck[computer2Deck[i]-1]
    }
}
function setUpdater(){
    document.getElementById("playerSets").innerHTML = "Player Sets: " + playerSets
    document.getElementById("computerSets").innerHTML = "Computer Sets: " + computerSets
    document.getElementById("computer2Sets").innerHTML = "Computer 2 Sets: " + computer2Sets
}
function checkPairs(){
    if(playerDeck.length !== 0 || computerDeck.length !== 0){
        playerDeck.sort()
        computerDeck.sort()
        computer2Deck.sort()
        for(let i = playerDeck.length; i > 0; i--){
            if(playerDeck[i] === playerDeck[i-1]){
                playerDeck.splice(i, 1)
                playerDeck.splice(i-1, 1)
                playerSets += 1
                alert("Player made a set!")
            }
        }
        for(let i = computerDeck.length; i > 0; i--){
            if(computerDeck[i] === computerDeck[i-1]){
                computerDeck.splice(i, 1)
                computerDeck.splice(i-1, 1)
                computerSets += 1
                alert("Computer made a set!")
            }
        }
        for(let i = computer2Deck.length; i > 0; i--){
            if(computer2Deck[i] === computer2Deck[i-1]){
                computer2Deck.splice(i, 1)
                computer2Deck.splice(i-1, 1)
                computer2Sets += 1
                alert("Computer 2 made a set!")
            }
        }
        if(computerDeck.length === 0){
            computerDeck.push(deck[0])
            deck.splice(0,1)
        }
        if(playerDeck.length === 0){
            playerDeck.push(deck[0])
            deck.splice(0,1)
        }
        if(computer2Deck.length === 0){
            computer2Deck.push(deck[0])
            deck.splice(0,1)
        }
        setUpdater()
    }
    allDeckUpdater()
}
function startGame(){
    show()
    for(let i = 0; i < 4; i++){
        for(let j = 1; j <= 13; j++){
            deck.push(j)
        }
    }
    for(let k = 0; k <= 1000; k++){
        let num1 = Math.floor(Math.random()*deck.length)
        let num2 = Math.floor(Math.random()*deck.length)
        let temp
        temp = deck[num1]
        deck[num1] = deck[num2]
        deck[num2] = temp
    }
    for(let i = 0; i < 15; i++){
        if(i % 2 === 0 && i % 3 !== 0){
            playerDeck.push(deck[0])
            deck.splice(0,1)
        }else if(i % 3 !== 0){
            computerDeck.push(deck[0])
            deck.splice(0,1)
        }
        if(i % 3 === 0){
            computer2Deck.push(deck[0])
            deck.splice(0,1)
        }
    }
    checkPairs()
    allDeckUpdater()
    turn = Math.floor(Math.random()*3)+1
    if(turn === 1){
        playerEnabler()
        alert("Player Turn")
    }else if(turn === 2){
        computerEnabler()
        alert("Computer Turn")
    }else if(turn === 3){
        computer2Enabler()
        alert("Computer 2's Turn")
    }
    document.getElementById("playerTurnButton").disabled = false
    document.getElementById("computerTurnButton").disabled = false
    document.getElementById("computer2TurnButton").disabled = false
}
function disableAllButton(){
    document.getElementById("playerTurnButton").disabled = true
    document.getElementById("computerTurnButton").disabled = true
    document.getElementById("computer2TurnButton").disabled = true
}
function winDecider(){
    if(deck.length === 0){
        if(playerSets > computerSets){
            if(playerSets > computer2Sets){
                alert("The Player Wins!")
                document.getElementById("winner").innerHTML = "Player Won."
                disableAllButton()
            }else{
                alert("Computer 2 Wins!")
                document.getElementById("winner").innerHTML = "Computer 2 Won."
                disableAllButton()
            }
        }else{
            alert("Computer Wins!")
            document.getElementById("winner").innerHTML = "Computer Won."
            disableAllButton()
        }
    }
}
function allFunctionsRunner(){
    allDeckUpdater()
    winDecider()
}
function choseComputer(){
    playerOption = 1
    document.getElementById("playerTurnButton").disabled = false
    alert("Chosen!")
}
function choseComputer2(){
    playerOption = 2 
    document.getElementById("playerTurnButton").disabled = false
    alert("Chosen!")
}
function playerTurn(){
    document.getElementById("chooseComputer").disabled = false
    document.getElementById("chooseComputer2").disabled = false
    if(playerDeck.length === 0){
        playerDeck.push(deck[0])
        deck.splice(0,1)
        allDeckUpdater()
    }
    if(computer2Deck.length === 0){
        computer2Deck.push(deck[0])
        deck.splice(0,1)
        allDeckUpdater()
    }
    if(computerDeck.length === 0){
        computerDeck.push(deck[0])
        deck.splice(0,1)
        allDeckUpdater()
    }
    cardSelector = 0
    index = 0
    let finder = false
    cardSelector = prompt("Please choose your card: ")
    let decider
    if(playerOption === 1){
        decider = computerDeck
    }else{
        decider = computer2Deck
    }

    while(finder === false){
        if(playerDeck.length === 0){
            playerDeck.push(deck[0])
            deck.splice(0,1)
        }
        for(let i = 0; i <= playerDeck.length; i++){
            if (parseInt(cardSelector) === parseInt(playerDeck[i])) {
                finder = true
                i = 100
            } else {
                finder = false
            }
        } 
            if(finder === true){
                for(let j = 0; j <= 5; j++){
                    if(parseInt(cardSelector) === parseInt(decider[j])){
                        cardFound = true
                        index = j
                        j = 6
                    }
                }
                if(cardFound === true){
                    playerDeck.push(decider[index])
                    decider.splice(index, 1)
                    cardFound = false
                    alert("Card found!")
                }else{
                    playerDeck.push(deck[0])
                    deck.splice(0,1)
                    alert("Card not found.")
                }
                allFunctionsRunner()
            }else{
                alert("Please choose a card that is in your set.")
                cardSelector = prompt("Please choose your card: ")
            }
    }
    if(playerDeck.length > 0){
        checkPairs()
    }
    if(playerOption === 1){
        computerEnabler()
    }else{
        computer2Enabler()
    }
    allFunctionsRunner()
    allDeckUpdater()
}
function computerTurn(){
    let chooseTurnComputer = Math.floor(Math.random()*2)
    if(computerDeck.length === 0){
        computerDeck.push(deck[0])
        deck.splice(0,1)
        allDeckUpdater()
    }
    if(playerDeck.length === 0){
        playerDeck.push(deck[0])
        deck.splice(0,1)
        allDeckUpdater()
    }
    if(computer2Deck.length === 0){
        computer2Deck.push(deck[0])
        deck.splice(0,1)
        allDeckUpdater()
    }
    cardSelector = 0
    index = 0
    if(chooseTurnComputer === 1){
        // from computer 2
        cardSelector = computerDeck[Math.floor(Math.random()*computerDeck.length)]
        alert("Computer asks for a " + cardSelector + " from computer 2.")
        for(let i = 0; i <= 5; i++){
            if(parseInt(cardSelector) === parseInt(computer2Deck[i])){
                cardFound = true
                index = i
                i = 6
            }
        }
        if(cardFound === true){
            computerDeck.push(computer2Deck[index])
            computer2Deck.splice(index, 1)
            cardFound = false
            alert("Computer found card " + cardSelector + " from Computer 2's Deck.")
        }else{
            computerDeck.push(deck[0])
            deck.splice(0,1)
            alert("Computer did not find card.")
        }
    }else{
        // from the player
        cardSelector = computerDeck[Math.floor(Math.random()*computerDeck.length)]
        alert("Computer asks for a " + cardSelector + " from Player.")
        for(let i = 0; i <= 5; i++){
            if(parseInt(cardSelector) === parseInt(playerDeck[i])){
                cardFound = true
                index = i
                i = 6
            }
        }
        if(cardFound === true){
            computerDeck.push(playerDeck[index])
            playerDeck.splice(index, 1)
            cardFound = false
            alert("Computer found card " + cardSelector + " from Player's Deck.")
        }else{
            computerDeck.push(deck[0])
            deck.splice(0,1)
            alert("Computer did not find card.")
        }
    }
    
    if(computerDeck.length > 0){
        checkPairs()
    }
    allFunctionsRunner()
    
    if(chooseTurnComputer === 1){
        computer2Enabler()
    }else{
        playerEnabler()
    }
}
function computer2Turn(){
    let chooseTurnComputer2 = Math.floor(Math.random()*2)
    if(computerDeck.length === 0){
        computerDeck.push(deck[0])
        deck.splice(0,1)
        allDeckUpdater()
    }
    if(computer2Deck.length === 0){
        computer2Deck.push(deck[0])
        deck.splice(0,1)
        allDeckUpdater()
    }
    if(playerDeck.length === 0){
        playerDeck.push(deck[0])
        deck.splice(0,1)
        allDeckUpdater()
    }
    cardSelector = 0
    index = 0
    let breaker2
    while(breaker2 === false){
        cardSelector = playerDeck[Math.floor(Math.random()*computer2Deck.length)]
        for(let i = 0; i <= playerDeck.length; i++){
            if(cardSelector === playerDeck[i]){
                breaker2 = true
            }else{
                break
            }
        }
        if(breaker2 === false){
            break
        }
    }
    if(breaker2 === true){
        // from the player
        cardSelector = computer2Deck[Math.floor(Math.random()*computer2Deck.length)]
        alert("Computer 2 asks for a " + cardSelector + " from player.")
        for(let i = 0; i <= 5; i++){
            if(parseInt(cardSelector) === parseInt(playerDeck[i])){
                cardFound = true
                index = i
                i = 6
            }
        }
        if(cardFound === true){
            computer2Deck.push(playerDeck[index])
            playerDeck.splice(index, 1)
            cardFound = false
            alert("Computer 2 found card " + cardSelector + " from Player's Deck.")
        }else{
            computer2Deck.push(deck[0])
            deck.splice(0,1)
            alert("Computer 2 did not find card.")
        }
    }else{
        // from other computer
        cardSelector = computer2Deck[Math.floor(Math.random()*computer2Deck.length)]
        alert("Computer 2 asks for a " + cardSelector + " from computer.")
        for(let i = 0; i <= 5; i++){
            if(parseInt(cardSelector) === parseInt(computerDeck[i])){
                cardFound = true
                index = i
                i = 6
            }
        }
        if(cardFound === true){
            computer2Deck.push(computerDeck[index])
            computerDeck.splice(index, 1)
            cardFound = false
            alert("Computer 2 found card " + cardSelector + " from Computers's Deck.")
        }else{
            computer2Deck.push(deck[0])
            deck.splice(0,1)
            alert("Computer 2 did not find card.")
        }
    }
    if(computer2Deck.length > 0){
        checkPairs()
    }
    allFunctionsRunner()
    if(chooseTurnComputer2 === 1){
        playerEnabler()
    }else{
        computerEnabler()
    }
}