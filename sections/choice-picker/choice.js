const choiceInput = document.querySelector(".choiceInput")
const choicesBox = document.querySelector(".choices")


choiceInput.addEventListener("keyup", event => {
    // Save values
    let values = event.target.value
    
    // Split values into array items, map into each item
    // and trim the spaces around it, and if an item is an
    // empty string, filter it out
    values = values.split(',').map(choice => choice.trim())
    .filter(choice => choice !== '')
    

    // Empty up the choices container, so that you only
    // get the final value from keyup and remove repetition
    choicesBox.innerHTML = ''

    values.forEach(value => {
        // create new span element
        let span = document.createElement('span')
        // add class to span
        span.classList.add('choice')
        // set inner html to choice
        span.innerHTML = value
        // append
        choicesBox.appendChild(span)
    })
    
    if (event.key === 'Enter') {
        event.target.value = ''

        choiceRandomizer()
    }

})


const choiceRandomizer = () => {
    let choices = document.querySelectorAll(".choice")
    let x = 0;
    let interval = setInterval(() => {
        let choice = choices[Math.floor(Math.random() * choices.length)]

        choice.classList.add('random')

        setTimeout(() => {
            choice.classList.remove('random')
        }, 150)

        x++
        if (x > 30) {
            setTimeout(() => {
                choice.classList.add('random')
            }, 150)
            clearInterval(interval)           
        }
    }, 150)
}
