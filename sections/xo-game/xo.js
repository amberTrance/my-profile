const squares = document.querySelectorAll('.xo-square')
const xoButton = document.getElementById('xo-button');
const xoContainer = document.getElementById('xo-container');

xoButton.addEventListener('click', () => {
    squares.forEach(square => {
        square.className = "xo-square"
    })
    xoContainer.className = "xo-container"
})

// Center and corner squares
let a1, a3, b2, c1, c3
a1 = document.getElementById('a1')
a3 = document.getElementById('a1')
b2 = document.getElementById('b2')
c1 = document.getElementById('c1')
c3 = document.getElementById('c3')

const corners = [a1, a3, c1, c3]

// When clicking a square:
squares.forEach(square => {
    square.addEventListener('click', () => {

        // If the user clicks on a non-empty square, do nothing
        if (
            square.classList.contains('o-sign') 
            ||
            square.classList.contains('x-sign')
        ) {
            return
        } else {

            // when the user clicks on an empty square, add 'o'      
            square.classList.add('o-sign')


            // Grab the leftover squares
            let leftSquares = [...squares].filter(square => (!square.classList.contains('o-sign')) 
            & (!square.classList.contains('x-sign')))

            checkWinning(leftSquares)
            
            // Computer moves:
            // First make sure the xoContainer only has the default class and not the win class
            if ( xoContainer.className === "xo-container" ) {
                // For first round
                if (leftSquares.length === 8) {
                    // Check if b2 (the center) is free, and start with it if so
                    if ( b2.className === 'xo-square' ) {                    
                        b2.classList.add('x-sign')
                    } else {
                        // else, pick one of the corners at random
                        let corner = corners[Math.floor(Math.random() * 4)]
                        corner.classList.add('x-sign')                  
                    }
                } else if (leftSquares.length <= 6) {
                    // for the following moves, pick an empty square at random
                    const random = Math.floor(Math.random() * leftSquares.length);
                    leftSquares[random].classList.add('x-sign')
                    let x = leftSquares[random].id
                }
            }

            checkWinning(leftSquares)
        }
    })
})

const checkWinning = (leftSquares) => {

    /* Check for winning only once there are less than 5 squares left
    and the container class doesn't already have an additional win class */
    if ( leftSquares.length < 5 & xoContainer.className === "xo-container") {
                
        /* If the first row of 3 all have o-sign or x-sign, 
        add a class of win-line-a which crosses the first row*/
        if ( 
            squares[0].className === "xo-square o-sign" &
            squares[1].className === "xo-square o-sign" &
            squares[2].className === "xo-square o-sign"
            ||
            squares[0].className === "xo-square x-sign" &
            squares[1].className === "xo-square x-sign" &
            squares[2].className === "xo-square x-sign"  
        ) {

            xoContainer.classList.add('win-line-a')

        } else if (
            squares[3].className === "xo-square o-sign" &
            squares[4].className === "xo-square o-sign" &
            squares[5].className === "xo-square o-sign"
            ||
            squares[3].className === "xo-square x-sign" &
            squares[4].className === "xo-square x-sign" &
            squares[5].className === "xo-square x-sign"
        ) {
            
            xoContainer.classList.add('win-line-b')
            
        } else if (
            squares[6].className === "xo-square o-sign" &
            squares[7].className === "xo-square o-sign" &
            squares[8].className === "xo-square o-sign"
            ||
            squares[6].className === "xo-square x-sign" &
            squares[7].className === "xo-square x-sign" &
            squares[8].className === "xo-square x-sign"                    
        ) {

            xoContainer.classList.add('win-line-c')

        } else if (
            squares[0].className === "xo-square o-sign" &
            squares[3].className === "xo-square o-sign" &
            squares[6].className === "xo-square o-sign"
            ||
            squares[0].className === "xo-square x-sign" &
            squares[3].className === "xo-square x-sign" &
            squares[6].className === "xo-square x-sign"
        ) {

            xoContainer.classList.add('win-line-1')
            
        } else if (
            squares[1].className === "xo-square o-sign" &
            squares[4].className === "xo-square o-sign" &
            squares[7].className === "xo-square o-sign"
            ||
            squares[1].className === "xo-square x-sign" &
            squares[4].className === "xo-square x-sign" &
            squares[7].className === "xo-square x-sign"
        ) {

            xoContainer.classList.add('win-line-2')

        } else if (
            squares[2].className === "xo-square o-sign" &
            squares[5].className === "xo-square o-sign" &
            squares[8].className === "xo-square o-sign"
            ||
            squares[2].className === "xo-square x-sign" &
            squares[5].className === "xo-square x-sign" &
            squares[8].className === "xo-square x-sign"
        ) {

            xoContainer.classList.add('win-line-3')

        } else if (
            squares[0].className === "xo-square o-sign" &
            squares[4].className === "xo-square o-sign" &
            squares[8].className === "xo-square o-sign"
            ||
            squares[0].className === "xo-square x-sign" &
            squares[4].className === "xo-square x-sign" &
            squares[8].className === "xo-square x-sign"
        ) {

            xoContainer.classList.add('win-diagon-1')

        } else if (
            squares[2].className === "xo-square o-sign" &
            squares[4].className === "xo-square o-sign" &
            squares[6].className === "xo-square o-sign"
            ||
            squares[2].className === "xo-square x-sign" &
            squares[4].className === "xo-square x-sign" &
            squares[6].className === "xo-square x-sign"
        ) {

            xoContainer.classList.add('win-diagon-2')

        }
    }
}
