const numberGuesserContainer = document.getElementById('number_guesser_container')
const submitGuessBtn = document.getElementById('submit_guess_btn')
const guessFeedback = document.getElementById('guess_feedback')
const gameInteractionContainer = document.getElementById('game_interaction_container')
const gameEndContainer = document.getElementById('game_end_container')
const correctNumber = document.getElementById('correct_number')

let randomNumber

// EVENT LISTENERS //
window.addEventListener('load', () =>
{
    numberGuesserContainer.classList = 'container number-guesser-container'
    setInputWidth()
    generateRandomNumber()
    clearInput()
})

window.addEventListener('keypress', (e) =>
{
    if(e.key === 'Enter')
    {
        submitGuess()
    }
})

submitGuessBtn.addEventListener('click', submitGuess)

function setInputWidth()
{
    const numberInput = document.getElementById('number_input')
    const inputLength = numberInput.getAttribute('placeholder').length
    numberInput.setAttribute('size', inputLength)
}


// Generate random number
function generateRandomNumber()
{
    randomNumber = Math.floor(Math.random() * 100)
}

function submitGuess()
{    
    checkGuess()
    clearInput()
}

function checkGuess()
{
    const numberInput = +document.getElementById('number_input').value

    if(numberInput < randomNumber)
    {
        guessFeedback.textContent = 'Too low!'
        numberGuesserContainer.classList.add('wrong')
        numberGuesserContainer.classList.add('disabled')
        
        setTimeout(() => {
            guessFeedback.textContent = ''
            numberGuesserContainer.classList.remove('wrong')
            numberGuesserContainer.classList.remove('disabled')
        }, 2000)
    }
    else if(numberInput > randomNumber)
    {
        guessFeedback.textContent = 'Too high!'
        numberGuesserContainer.classList.add('wrong')     

        setTimeout(() => {
            guessFeedback.textContent = ''
            numberGuesserContainer.classList.remove('wrong')
        }, 2000)
    }
    else if(numberInput === randomNumber)
    {
        guessFeedback.textContent = 'Congratulations, you guessed the number!'
        win()
    }
}

// Win Scenario
function win()
{
    numberGuesserContainer.classList.add('correct')
    numberGuesserContainer.classList.add('disabled')
    switchScreen()
    playWinSound()

    setTimeout(() =>
    {
        location.reload()
    }, 3000)
}

// Clear Input
function clearInput()
{
    const numberInput = document.getElementById('number_input')

    numberInput.value = ''
}

// Play Win Sound
function playWinSound()
{
    const winSound = document.getElementById('win_sound')
    winSound.play()
    winSound.volume = .8
}

// Switch Screen
function switchScreen()
{
    gameEndContainer.style.display = 'block'
    gameInteractionContainer.style.display = 'none'
    setCorrectNumber()
}

// Set Correct Number
function setCorrectNumber()
{
    correctNumber.textContent = randomNumber
}
