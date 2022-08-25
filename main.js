// Background music
const audioContext = new AudioContext();
const audio = new Audio("./Savage.mp3")
const source = audioContext.createMediaElementSource(audio)
source.connect(audioContext.destination)

var musicButton = document.querySelector('.music')

musicButton.addEventListener('click', function(event) {
    if(audioContext.state === 'suspended') {
        audioContext.resume()
        console.log('meow')
    }
    console.log(audioContext)
    audio.play()
})

// Players
var Player1 = "X"
var Player2 = "O"
var player1Name = 'Player 1'
var player2Name = 'Player 2'
var Player1Turn = true
var winner = null

var Player1NameInput = document.querySelector('.player1_name')
var Player2NameInput = document.querySelector('.player2_name')

// Playing field Components
var playingField = document.querySelector(".container")
var rowA = document.querySelectorAll('.RA')
var rowB = document.querySelectorAll('.RB')
var rowC = document.querySelectorAll('.RC')
var column1 = document.querySelectorAll('.C1')
var column2 = document.querySelectorAll('.C2')
var column3 = document.querySelectorAll('.C3')
var diagonal1 = document.querySelectorAll('.D1')
var diagonal2 = document.querySelectorAll('.D2')
var everyTile = document.querySelectorAll('.tile')

// Buttons
var titleButton = document.querySelector('h1')
var player1ReadyButton = document.querySelector('.player1_ok')
var player2ReadyButton = document.querySelector('.player2_ok')
var replayButton = document.querySelector('.replay')

// Game Status
var Player1WinCount = 0
var Player2WinCount = 0
var player1IsReady = false
var player2IsReady = false
var gameStatus = true

// Name Choosing
player1ReadyButton.addEventListener('click', function(event) {
    event.preventDefault()
    player1Name = Player1NameInput.value
    if (Player1NameInput.value === '') {
        player1Name = 'Player 1'
    }
    document.querySelector('.player1_name').style.display = 'none'
    document.querySelector('.player1_ok').style.display = 'none'
    document.querySelector('.p1_ready').textContent = player1Name + " is ready"
    console.log(player1Name)
    player1IsReady = true


    if (player1IsReady === true && player2IsReady === true) {
        document.querySelector('.menu').style.visibility = 'hidden'
        document.querySelector('.display').style.visibility = 'visible'
        document.querySelector('.container').style.visibility = 'visible'
        document.querySelector('.display_player').textContent = player1Name + ", begin."
        document.querySelector('.title').style.marginBottom = '-60px'
    }
})

player2ReadyButton.addEventListener('click', function(event) {
    event.preventDefault()
    player2Name = Player2NameInput.value
    if (Player2NameInput.value === '') {
        player2Name = 'Player 2'
    } 
    document.querySelector('.player2_name').style.display = 'none'
    document.querySelector('.player2_ok').style.display = 'none'
    document.querySelector('.p2_ready').textContent = player2Name + " is ready"
    console.log(player2Name)
    player2IsReady = true

    
    if (player1IsReady === true && player2IsReady === true) {
        document.querySelector('.menu').style.visibility = 'hidden'
        document.querySelector('.display').style.visibility = 'visible'
        document.querySelector('.container').style.visibility = 'visible'
        document.querySelector('.display_player').textContent = player1Name + ", begin."
        document.querySelector('.title').style.marginBottom = '-60px'
    }
})

console.log('test before')
if (player1IsReady === true && player2IsReady === true) {
    document.querySelector('.menu').style.display = 'none'
    console.log('test after')
}

// Player switch turns
playingField.addEventListener('click', function playGame(event) {
    if (winner === null) {
        var selection = event.target
        if (selection.textContent !== Player1 && selection.textContent !== Player2 && selection.tagName === "DIV") {
            if (Player1Turn === true) {
                selection.textContent = Player1
                document.querySelector('.display_player').textContent = player2Name + "'s turn"
                Player1Turn = false
            } else if (selection.tagName === "DIV") {
                selection.textContent = Player2
                document.querySelector('.display_player').textContent = player1Name + "'s turn"
                Player1Turn = true
            }   
        }   
    }
    function winningScenario(playerX) {
        if (rowA[0].textContent === playerX && rowA[1].textContent === playerX && rowA[2].textContent === playerX) { 
            rowA[0].classList.add('tileWinner')
            rowA[1].classList.add('tileWinner')
            rowA[2].classList.add('tileWinner')
            console.log(playerX + " wins!")
            return winner = playerX
        } else if (rowB[0].textContent === playerX && rowB[1].textContent === playerX && rowB[2].textContent === playerX) { 
            rowB[0].classList.add('tileWinner')
            rowB[1].classList.add('tileWinner')
            rowB[2].classList.add('tileWinner')
            console.log(playerX + " wins!")
            return winner = playerX
        } else if (rowC[0].textContent === playerX && rowC[1].textContent === playerX && rowC[2].textContent === playerX) { 
            rowC[0].classList.add('tileWinner')
            rowC[1].classList.add('tileWinner')
            rowC[2].classList.add('tileWinner')
            console.log(playerX + " wins!")
            return winner = playerX
        } else if (column1[0].textContent === playerX && column1[1].textContent === playerX && column1[2].textContent === playerX) {
            column1[0].classList.add('tileWinner')
            column1[1].classList.add('tileWinner')
            column1[2].classList.add('tileWinner') 
            console.log(playerX + " wins!")
            return winner = playerX
        } else if (column2[0].textContent === playerX && column2[1].textContent === playerX && column2[2].textContent === playerX) { 
            column2[0].classList.add('tileWinner')
            column2[1].classList.add('tileWinner')
            column2[2].classList.add('tileWinner')
            console.log(playerX + " wins!")
            return winner = playerX
        } else if (column3[0].textContent === playerX && column3[1].textContent === playerX && column3[2].textContent === playerX) { 
            column3[0].classList.add('tileWinner')
            column3[1].classList.add('tileWinner')
            column3[2].classList.add('tileWinner')
            console.log(playerX + " wins!")
            return winner = playerX
        } else if (diagonal1[0].textContent === playerX && diagonal1[1].textContent === playerX && diagonal1[2].textContent === playerX) { 
            diagonal1[0].classList.add('tileWinner')
            diagonal1[1].classList.add('tileWinner')
            diagonal1[2].classList.add('tileWinner')
            console.log(playerX + " wins!")
            return winner = playerX
        } else if (diagonal2[0].textContent === playerX && diagonal2[1].textContent === playerX && diagonal2[2].textContent === playerX) { 
            diagonal2[0].classList.add('tileWinner')
            diagonal2[1].classList.add('tileWinner')
            diagonal2[2].classList.add('tileWinner')
            console.log(playerX + " wins!")
            return winner = playerX
        } 
    }
    
    winningScenario(Player1)
    winningScenario(Player2)
    
    if (winner === Player1 && gameStatus === true) {
        Player1WinCount = Player1WinCount + 1
        document.querySelector('.display_player').textContent = player1Name + " wins!"
        document.querySelector('.replay').style.visibility = 'visible'
        document.querySelector('.replay').style.opacity = '100%'
        document.querySelector('.player1_win_count').textContent = player1Name + ":  " + Player1WinCount
        gameStatus = false

    } else if (winner === Player2 && gameStatus === true) {
        Player2WinCount = Player2WinCount + 1
        document.querySelector('.display_player').textContent = player2Name + " wins!"
        document.querySelector('.replay').style.visibility = 'visible'
        document.querySelector('.replay').style.opacity = '100%'
        document.querySelector('.player2_win_count').textContent = player2Name + ":  " + Player2WinCount
        gameStatus = false

    } else if (rowA[0].textContent !== '' && rowA[1].textContent !== '' && rowA[2].textContent !== '' && rowB[0].textContent !== '' && rowB[1].textContent !== '' && rowB[2].textContent !== '' && rowC[0].textContent !== '' && rowC[1].textContent !== '' && rowC[2].textContent !== '') {
        console.log("It's a draw!")
        document.querySelector('.display_player').textContent = "It's a draw!"
        document.querySelector('.replay').style.visibility = 'visible'
        document.querySelector('.replay').style.opacity = '100%'
        gameStatus = false
    }
})

titleButton.addEventListener('click', function changeBackground(event) {
    if (document.querySelector('.main').className.includes('background2') === true) {
        document.querySelector('.main').classList.remove('background2')
        document.querySelector('.main').classList.add('background3')
    } else if (document.querySelector('.main').className.includes('background3') === true) {
        document.querySelector('.main').classList.remove('background3')
        document.querySelector('.main').classList.add('background4')
    } else if (document.querySelector('.main').className.includes('background4') === true) {
        document.querySelector('.main').classList.remove('background4')
        document.querySelector('.main').classList.add('background')
    } else {
        document.querySelector('.main').classList.remove('background')
        document.querySelector('.main').classList.add('background2')
    }
})

replayButton.addEventListener('click', function(event) {
    for (let i = 0; i < everyTile.length; i++) {
        everyTile[i].textContent = ''
        if (everyTile[i].className.includes('tileWinner') === true) {
            everyTile[i].classList.remove('tileWinner')
        } 
    }
    document.querySelector('.display_player').textContent = player1Name + ", Begin."
    document.querySelector('.win_count_group').style.visibility = 'visible'
    document.querySelector('.replay').style.visibility = 'hidden'
    document.querySelector('.replay').style.opacity = '0%'
    Player1Turn = true
    winner = null
    return gameStatus = true
})