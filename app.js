let button = document.querySelector(".check")
let input = document.querySelector(".guess")
let message = document.querySelector(".message")
let scoreMessage = document.querySelector(".score")
let correctNumber = document.querySelector(".number")
let resentButton = document.querySelector(".again")
let highScore = document.querySelector(".highscore")
let score = 0;
let secretNumber = Math.floor(Math.random() * 20) + 1
button.addEventListener("click", function(){
    let guess = Number(input.value) 
    if(!guess){
        message.textContent = "⛔ No Number entered"
    }else if(guess === secretNumber){
        message.textContent = "🎉Correct Number"
        score++;
        scoreMessage.textContent = score
        correctNumber.textContent = secretNumber

        document.body.style.backgroundColor = "green"
        correctNumber.style.width = "30rem"
        if(score > highScore.textContent){
            highScore.textContent = score
        }

    }else if(guess > secretNumber){
        if(score > 1){
            message.textContent = "📈 High Number"
            score--
            scoreMessage.textContent = score
        }else{
            message.textContent ="💣 You lost"
            scoreMessage.textContent = 0
            correctNumber.textContent = secretNumber
        }

    }else if(guess < secretNumber){
        if(score > 1){
        message.textContent = "📉 Small Number"
        score--
        scoreMessage.textContent = score
        }else{
            message.textContent ="💣 You lost"
            scoreMessage.textContent = 0
            correctNumber.textContent = secretNumber
        }
    }
})
resentButton.addEventListener("click", function(){
    score = 0
    let secretNumber = Math.trunc(Math.random() * 20) + 1
    document.body.style.backgroundColor="#222"
    correctNumber.style.width = "15rem"
    message.textContent = "Start guessing..."
    scoreMessage.textContent = score
    correctNumber.textContent = "?"
    input.value = ""
})