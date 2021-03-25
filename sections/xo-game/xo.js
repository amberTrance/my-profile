let squares = document.querySelectorAll('.xo-square')

squares.forEach(square => {
    square.addEventListener('click', () => {
        // If the user clicks on a non-empty square, alert error
        if (
            square.classList.contains('o-sign') 
            ||
            square.classList.contains('x-sign')
        ) {

            alert('Choose an empty square, please!');

        } else {

            // when the user clicks on a square, add 'o'      
            square.classList.add('o-sign')
            
            // then filter out the non-empty squares
            let leftSquares = [...squares].filter(square => (!square.classList.contains('o-sign')) & (!square.classList.contains('x-sign')))
        
            // in one of the empty squares, add an x
            leftSquares[0].classList.add('x-sign')

            //if there are less than 6 squares left, start tracking for 3 in a row:
            if ((leftSquares.length - 1) < 6) {
                
            }
        }
    })
})
