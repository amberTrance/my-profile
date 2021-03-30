const qcontainer = document.getElementById("qcontainer")
const quote = document.getElementById("quote")
const author = document.getElementById("author")
const qback = document.getElementById("qback")
const qnext = document.getElementById("qnext")
const quoteId = document.getElementById("quote-id")

// List of card styles
const quoteStyles = ["quoteStyle1", "quoteStyle2","quoteStyle3", "quoteStyle4"]

// Set a default index value for quotes data of 0
// The length of the data object is 1643 quotes
let quoteIndex = 0

const changeStyle = () => {
    //run the generateQuote function with the new index
    generateQuote(quoteIndex)
    // make default class qcontainer, so that it removes previously set style
    qcontainer.className = "qcontainer"
    // set a style at random
    qcontainer.classList.add(quoteStyles[Math.floor(Math.random() * quoteStyles.length)])
}

// Change quoteIndex when user clicks back or next
qnext.addEventListener('click', () => {
    // Increment quoteIndex
    quoteIndex++
    if (quoteIndex == 1) {
        qback.disabled = false
    }

    changeStyle()
})

qback.addEventListener('click', () => {
    // Increment quoteIndex    
    if (quoteIndex == 1) {
        qback.disabled = true      
    }
    quoteIndex--
    changeStyle()
})

// Function that fetches quotes in json format from an API
const generateQuote = (quoteIndex) => {

    fetch("https://type.fit/api/quotes")
        .then((response) => response.json())
        .then((data) => {
            quote.innerHTML = data[quoteIndex].text

            // Make a check if the data has an author 
            if (data[quoteIndex].author == null) {
                author.innerHTML = "Unknown"
            } else {
                author.innerHTML = data[quoteIndex].author
            }
            
            quoteId.innerHTML = ++quoteIndex
        })
}

generateQuote(quoteIndex)
