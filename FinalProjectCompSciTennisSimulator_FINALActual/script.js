let back = new Image()
let player = new Image()
let opponent = new Image()
opponent.src = "ResourceDirectory/nadalWithBackground-removebg-preview.png"
let ball = new Image()
ball.src = "ResourceDirectory/tennisBallEmoji-removebg-preview.png"
let speedPower = new Image()
speedPower.src = "ResourceDirectory/download-removebg-preview.png"
let speed = 10
let topSpeed = 2
let oppSpeed = 0
let decider = 0
let playerScore = 0
let oppScore = 0
let oppServe = false
let plyServe = false
let playerGameScoreActual = 0
let oppGameScoreActual = 0
let oppSetScore = 0
let playerSetScore = 0
let urlParams = new URLSearchParams(window.location.search)
let courtSelection 
let playerSelection 
let courtAnswer
let playerAnswer
let mover = 1
let win = false
let playerHardSpeed = 4
let playerGrassSpeed = 8
let playerRedSpeed = 2
let createImage = function(src,xco,yco,w,h) {
    let img= new Image();
    img.src   = src;
    img.left = xco;
    img.top = yco;
    img.width = w;
    img.height = h;
    img.vis = true;
    return img;
};

function courtSelect(courtSelectionParam){
    courtSelection = courtSelectionParam
    if(courtSelection == "Hard Court"){
        back.src = "ResourceDirectory/hardCourts.jpg"
    }else if(courtSelection == "Red Court"){
        back.src = "ResourceDirectory/redCourts.jpg"
    }else if(courtSelection == "Grass Court"){
        back.src = "ResourceDirectory/grassCourts.jpg"
    }

}

function playerSelect(playerSelectionParam){
    playerSelection = playerSelectionParam
    if(playerSelection == "R. Federer"){
        player.src = "ResourceDirectory/tennis-roger-federer-swiss-wallpaper-preview-removebg-preview.png"
    }else if(playerSelection == "N. Djokovic"){
        player.src = "ResourceDirectory/DJOKOVIC-AUSTRALIAN-OPEN-17012023-32059-removebg-preview.png"
    }else if(playerSelection == "A. Agassi"){
        player.src = "ResourceDirectory/american-tennis-player-andre-agassi-1990s-2D8YD4E-removebg-preview.png"
    }    
    if(playerSelection == "R. Federer"){
        playerHardSpeed += 2
        playerGrassSpeed -= 2
        playerRedSpeed += 1
    }else if(playerSelection == "N. Djokovic"){
        playerHardSpeed -= 1
        playerGrassSpeed -= 1
        playerRedSpeed += 3
    }else if(playerSelection == "A. Agassi"){
        playerHardSpeed += 2
        playerGrassSpeed -= 0
        playerRedSpeed -= 1
    }
}

function startGame(){
    window.location.href = 'main.html?courtSelection=' + courtSelection + '&playerSelection=' + playerSelection
}

function dropFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function changeScore() {
    let scoreShow = ""
    // for in compSci: set playerGameScore equal to zero as well?
    let playerGameScore = playerScore % 4
    if(playerGameScore === 1){
        playerGameScoreActual = 15
    }else if(playerGameScore === 2  && playerGameScoreActual != 0){
        playerGameScoreActual = 30
    }else if(playerGameScore === 3  && playerGameScoreActual != 0){
        playerGameScoreActual = 40
    }else if(playerGameScore === 0 && playerGameScoreActual != 0){
        playerGameScoreActual = 0
        oppGameScoreActual = 0
        oppScore = 4
        playerScore = 4
        playerSetScore += 1
    }
    let oppGameScore = oppScore % 4
    if(oppGameScore === 1){
        oppGameScoreActual = 15
    }else if(oppGameScore === 2  && oppGameScoreActual != 0){
        oppGameScoreActual = 30
    }else if(oppGameScore === 3  && oppGameScoreActual != 0){
        oppGameScoreActual = 40
    }else if(oppGameScore === 0 && oppGameScoreActual != 0){
        oppGameScoreActual = 0
        playerGameScoreActual = 0
        oppScore = 4
        playerScore = 4
        oppSetScore += 1
    }
    if(oppSetScore >= 8){
        win = true
        scoreShow = "R. Nadal Won!"
    }else if(playerSetScore >= 8){
        win = true
        scoreShow = playerSelection + " Won!"
    }
    if(win === false){
        document.getElementById("scoring").innerHTML = "G: " + playerGameScoreActual + " | S: " + playerSetScore + " ||| S: " +  oppSetScore + " | G: " + oppGameScoreActual;
    }else{
        document.getElementById("scoring").innerHTML = scoreShow
    }
    
}

$(document).keydown(function(event) {
    let keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode === 13) {
        alert("Paused, press return key to unpause.");
    }
    if (keycode === 27) {
        alert("reloading...")
        location.reload()
    }

    if (keycode === 87 && player.top >= 30) {
        if(courtSelection == "Hard Court"){
            player.top -= playerHardSpeed
        }else if(courtSelection == "Grass Court"){
            player.top -= playerGrassSpeed
        }else if(courtSelection == "Red Court"){
            player.top -= playerRedSpeed
        }
    }
    if (keycode === 83 && player.top <= 490) {
        if(courtSelection == "Hard Court"){
            player.top += playerHardSpeed
        }else if(courtSelection == "Grass Court"){
            player.top += playerGrassSpeed
        }else if(courtSelection == "Red Court"){
            player.top += playerRedSpeed
        }
    }
    if (keycode === 68 && player.left <= 600){
        if(courtSelection == "Hard Court"){
            player.left += playerHardSpeed
        }else if(courtSelection == "Grass Court"){
            player.left += playerGrassSpeed
        }else if(courtSelection == "Red Court"){
            player.left += playerRedSpeed
        }
    }
    if (keycode === 65 && player.left >= 0){
        if(courtSelection == "Hard Court"){
            player.left -= playerHardSpeed
        }else if(courtSelection == "Grass Court"){
            player.left -= playerGrassSpeed
        }else if(courtSelection == "Red Court"){
            player.left -= playerRedSpeed
        }
    }
    if(keycode === 88){
        speedPower.top = 100
        mover = 0
    }
});

function moveSpeedPower(){
    speedPower.top += mover
    if(speedPower.top >= 800){
        speedPower.top = -1000
    }
    if(speedPower.left + speedPower.width > ball.left && speedPower.left < ball.left + ball.width &&
        speedPower.top + speedPower.height > ball.top && speedPower.top < ball.top + ball.height){
            if(speed > 0){
                if(courtSelection == "Hard Court"){
                    playerHardSpeed += 1
                }else if(courtSelection == "Red Court"){
                    playerGrassSpeed += 1
                }else if(courtSelection == "Grass Court"){
                    playerRedSpeed += 1
                }
            }
            if(speed < 0){
                oppSpeed += 1
            }
            speedPower.top = -1000
    }
}
function drawPlayer(){
    let ctx = document.getElementById("canvas").getContext("2d")
    ctx.drawImage(player, player.left, player.top, player.width, player.height)
}
function drawSpeedPower(){
    let ctx = document.getElementById("canvas").getContext("2d")
    ctx.drawImage(speedPower, speedPower.left, speedPower.top, speedPower.width, speedPower.height)
}

function drawOpp(){
    let ctx = document.getElementById("canvas").getContext("2d")
    ctx.drawImage(opponent, opponent.left, opponent.top, opponent.width, opponent.height)
}

function drawBall(){
    let ctx = document.getElementById("canvas").getContext("2d")
    ctx.drawImage(ball, ball.left, ball.top, ball.width, ball.height)
}

function changeScoreTester(){
    if(ball.left < 0){
        speed = 0
        oppServe = true
        ball.top = 10000
        ball.left = 600
        opponent.top = 125
        oppSpeed = 0
        topSpeed = 3
        player.top = 425
        player.left = 0
        setTimeout(()=> {
            ball.left = opponent.left
            ball.top = opponent.top
        },2000);
        oppScore += 1
        changeScore()
    }else if(ball.left > 1450){
        speed = 0
        plyServe = true
        ball.top = 10000
        ball.left = 600
        opponent.top = 125
        oppSpeed = 0
        topSpeed = 3
        player.top = 425
        player.left = 0
        setTimeout(()=> {
            ball.left = player.left
            ball.top = player.top
        },2000);
        playerScore += 1
        changeScore()
    }
    if(win === true){
        ball.top = 10000
        oppSpeed = 0
        mover = 0
    }
}

async function moveBall(){
    ball.left += speed
    ball.top += topSpeed
    if (opponent.left + opponent.width > ball.left && opponent.left < ball.left + ball.width &&
        opponent.top + opponent.height > ball.top && opponent.top < ball.top + ball.height) {

        if(courtSelection == "Hard Court"){
            speed = -20
        }else if(courtSelection == "Red Court"){
            speed = -15
        }else if(courtSelection == "Grass Court"){
            speed = -17
        }

        plyServe = false
        decider = Math.floor(Math.random()*2)
        if(opponent.top < 315 && oppServe === false){
            if(decider === 1){
                topSpeed = 1
            }else{
                topSpeed = Math.floor(Math.random()*3)
            }
        }else if(opponent.top < 315 && oppServe === true){ 
            topSpeed = 4
        }
        if(opponent.top > 315 && oppServe === false){
            if(decider === 1){
                topSpeed = -1
            }else{
                topSpeed = Math.floor(Math.random()*-3)
            }
        }else if(opponent.top > 315 && oppServe === true){
            topSpeed = -4
        }
    }
    if (player.left + player.width > ball.left && player.left < ball.left + ball.width &&
        player.top + player.height > ball.top && player.top < ball.top + ball.height) {

        if(courtSelection == "Hard Court"){
            speed = 20
        }else if(courtSelection == "Red Court"){
            speed = 15
        }else if(courtSelection == "Grass Court"){
            speed = 17
        }

        oppServe = false
        decider = Math.floor(Math.random()*2)
        if(player.top < 315 && plyServe === false){
            if(decider === 1){
                topSpeed = 1
            }else{
                topSpeed = Math.floor(Math.random()*3)
            }
        }else if(player.top < 315 && plyServe === true){
            topSpeed = 4
        }
        if(player.top > 315 && plyServe === false){
            if(decider === 1){
                topSpeed = -1
            }else{
                topSpeed = Math.floor(Math.random()*-3)
            }
        }else if(player.top > 315 && plyServe === true){
            topSpeed = -4
        }
    }
}

function moveOpponent(){
    opponent.top += oppSpeed
    if(ball.top < opponent.top+2 && ball.left >= 600 && oppServe === false && plyServe === false){
        if(courtSelection == "Hard Court"){
            oppSpeed = -2
        }else if(courtSelection == "Grass Court"){
            oppSpeed = -5
        }else if(courtSelection == "Red Court"){
            oppSpeed = -1
        }
    }else if(oppServe === true || plyServe === true){
        oppSpeed = 0
    }
    if(ball.top > opponent.top+2  && ball.left >= 600 && oppServe === false && plyServe === false){
        if(courtSelection == "Hard Court"){
            oppSpeed = 2
        }else if(courtSelection == "Grass Court"){
            oppSpeed = 5
        }else if(courtSelection == "Red Court"){
            oppSpeed = 1
        }
    }else if(oppServe === true || plyServe === true){
        oppSpeed = 0
    }
    if(opponent.top < 0){
        if(courtSelection == "Hard Court"){
            opponent.top += 2
        }else if(courtSelection == "Grass Court"){
            opponent.top += 5
        }else if(courtSelection == "Red Court"){
            opponent.top += 1
        }
    }else if(opponent.top > 500){
        if(courtSelection == "Hard Court"){
            opponent.top += -2
        }else if(courtSelection == "Grass Court"){
            opponent.top += -5
        }else if(courtSelection == "Red Court"){
            opponent.top += -1
        }
    }
    if(opponent.left + opponent.width > ball.left && opponent.left < ball.left + ball.width &&
        opponent.top + opponent.height > ball.top && opponent.top < ball.top + ball.height){
        oppSpeed = 0
    }
}
function drawBackground() {
    let ctx = document.getElementById("canvas").getContext("2d");
    back = createImage(back.src,0,0,1500,650)
    ctx.drawImage(back,back.left,back.top,back.width,back.height)
}

function initialize(){
    alert("Starting...")
    let temp1 = urlParams.get('courtSelection')
    let temp2 = urlParams.get('playerSelection')
    courtAnswer = temp1
    playerAnswer = temp2
    courtSelect(courtAnswer)
    playerSelect(playerAnswer)
    drawBackground()
    changeScore()
    player = createImage(player.src, 0, 250, 180, 180)
    speedPower = createImage(speedPower.src, 500, -1000, 180, 180)
    opponent = createImage(opponent.src, 1350, 250, 180, 180)
    ball = createImage(ball.src, 200, 220, 25, 25)
    animate()
}

function animate(){
    let a= requestAnimationFrame(animate);
    drawBackground()
    drawPlayer()
    drawSpeedPower()
    moveSpeedPower()
    drawOpp()
    drawBall()
    moveBall()
    moveOpponent()
    changeScoreTester()
}