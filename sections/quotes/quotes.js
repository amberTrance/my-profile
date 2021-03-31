const qcontainer = document.getElementById("qcontainer")
const quote = document.getElementById("quote")
const author = document.getElementById("author")
const qback = document.getElementById("qback")
const qnext = document.getElementById("qnext")
const quoteId = document.getElementById("quote-id")
const qline = document.getElementById("qline")
const qprog = document.getElementById("qprog")

// List of card styles
const quoteStyles = ["quoteStyle1", "quoteStyle2","quoteStyle3", "quoteStyle4"]

// Set a default index value for quotes data of 0
// The length of the data object is 1643 quotes
let quoteIndex = 0



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

// Run the function once at start
generateQuote(quoteIndex)




// Change card color function
const changeStyle = () => {

    // make default class qcontainer, so that it removes previously set style
    qcontainer.className = "qcontainer"
    // set a style at random
    qcontainer.classList.add(quoteStyles[Math.floor(Math.random() * quoteStyles.length)])

}




// Event listener for next button
qnext.addEventListener('click', () => {

    // Increment quoteIndex
    quoteIndex++
    // Change progress bar
    qprog.style.width = ((quoteIndex / 1643 ) * 100) + '%'

    // Enable back button once the value is 1
    if (quoteIndex == 1) {
        qback.disabled = false
    }
    // Disable next button when the quoteIndex value is max
    if (quoteIndex === 1642) {
        qnext.disabled = true
    }

    //run the generateQuote function with the new index
    generateQuote(quoteIndex)

    //change style
    changeStyle()

})




// Event listener for back button
qback.addEventListener('click', () => {

    // Disable back button  
    if (quoteIndex == 1) {
        qback.disabled = true      
    }
    // Enable next button
    if (quoteIndex === 1642) {
        qnext.disabled = false
    }

    // Decrement quoteIndex
    quoteIndex--

    // Change progress bar
    qprog.style.width = ((quoteIndex / 1643 ) * 100) + '%'

    //run the generateQuote function with the new index
    generateQuote(quoteIndex)

    // change style
    changeStyle()

})




// Event listener for clicking on progress line
qline.addEventListener('click', function(e) {

    // Percentage of div progress bar clicked
    let bcr = this.getBoundingClientRect()
    let barPercentage = ((e.clientX - bcr.left) / bcr.width)

    // Change quoteIndex to new value
    quoteIndex = Math.floor(1643 * barPercentage)

    // Set width of progress bar
    qprog.style.width = (barPercentage * 100) + '%'

    // Enable back button if value is higher than 1
    if (quoteIndex > 1) {
        qback.disabled = false
    }
    // Disable next button when the quoteIndex value is max
    if (quoteIndex === 1642) {
        qnext.disabled = true
    }
    // Disable back button  
    if (quoteIndex === 0) {
        qback.disabled = true      
    }
    // Enable next button
    if (quoteIndex < 1642) {
        qnext.disabled = false
    }

    generateQuote(quoteIndex)

    changeStyle()

});
