const computer = document.getElementById('computer-choise')
const user = document.getElementById('user-choise')
const resultFinal = document.getElementById('result')

const possibleChoise = document.querySelectorAll('button')
let userChoise
let computerChoise
let result

possibleChoise.forEach(possibleChoise => possibleChoise.addEventListener('click', (e) => {
    userChoise = e.target.id
    user.textContent = userChoise
    generateComputerChoise()
    getResult()
}))

function generateComputerChoise(){
    const nbr = Math.floor(Math.random() * 3)

    if(nbr === 0){
        computerChoise = 'rock'
    }else if(nbr === 1){
        computerChoise = 'paper'
    }else{
        computerChoise = 'scissor'
    }

    computer.textContent = computerChoise
}

function getResult(){
    if(computerChoise === userChoise){
        result =  "It's a draw"
    }else if(computerChoise === 'rock' && userChoise === "paper") {
        result = 'you win!'
    }
    else if(computerChoise === 'rock' && userChoise === "scissor") {
        result = 'you lost!'
    }
    else if(computerChoise === 'paper' && userChoise === "scissor") {
        result = 'you win!'
    }
    else if(computerChoise === 'paper' && userChoise === "rock") {
        result = 'you lose!'
    }
    else if(computerChoise === 'scissor' && userChoise === "rock") {
        result = 'you win!'
    }
    if (computerChoise === 'scissor' && userChoise === "paper") {
        result = 'you lose!'
    }
    
    resultFinal.textContent = result
}