const choiceInput = document.querySelector(".choiceInput")
const choicesBox = document.querySelector(".choices")
const choiceInfo = document.querySelector(".choiceInfo")
const description = document.getElementById("description")

// Toggles on and off the visibility of app info
choiceInfo.addEventListener("click", () => {
    description.classList.toggle('hide')
})

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
    
    // On enter
    if (event.key === 'Enter' && values.length > 1) {
        // Clear input
        event.target.value = ''

        // Start randomization of choices
        choiceRandomizer()
    }

})


const choiceRandomizer = () => {
    // Grab all the choices
    let choices = document.querySelectorAll(".choice")
    
    // Set a counter for the setInterval loop
    let x = 0;

    let interval = setInterval(() => {
        // select and save a choice by a random index
        let choice = choices[Math.round(Math.random() * (choices.length - 1))]

        // add a class of random to choice, which highlights it
        choice.classList.add('random')

        // 150 ms later, the class is removed
        setTimeout(() => {
            choice.classList.remove('random')
        }, 150)

        // Increment x
        x++

        // After x is larger then 30
        if (x > 30) {
            // highlight the last picked choice
            setTimeout(() => {
                choice.classList.add('random')
            }, 150)
            // clear interval
            clearInterval(interval)           
        }
    }, 150)
}
