const squares = document.querySelectorAll('.xo-square')

// When clicking a square:
squares.forEach(square => {
    square.addEventListener('click', () => {

        // If the user clicks on a non-empty square, do nothing
        if (
            square.classList.contains('o-sign') 
            ||
            square.classList.contains('x-sign')
        ) {
            return;
        } else {

            // when the user clicks on an empty square, add 'o'      
            square.classList.add('o-sign') 


            // Grab the leftover squares
            let leftSquares = [...squares].filter(square => (!square.classList.contains('o-sign')) 
            & (!square.classList.contains('x-sign')))


            // Pick a random square and mark it with x
            const random = Math.floor(Math.random() * leftSquares.length);
            leftSquares[random].classList.add('x-sign')
            let x = leftSquares[random].id


            // Check for winning
            if ( leftSquares.length < 5 ) {
                
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

                    document.getElementById('xo-container').classList.add('win-line-a')

                } else if (
                    squares[3].className === "xo-square o-sign" &
                    squares[4].className === "xo-square o-sign" &
                    squares[5].className === "xo-square o-sign"
                    ||
                    squares[3].className === "xo-square x-sign" &
                    squares[4].className === "xo-square x-sign" &
                    squares[5].className === "xo-square x-sign"
                ) {
                    
                    document.getElementById('xo-container').classList.add('win-line-b')
                    
                } else if (
                    squares[6].className === "xo-square o-sign" &
                    squares[7].className === "xo-square o-sign" &
                    squares[8].className === "xo-square o-sign"
                    ||
                    squares[6].className === "xo-square x-sign" &
                    squares[7].className === "xo-square x-sign" &
                    squares[8].className === "xo-square x-sign"                    
                ) {

                    document.getElementById('xo-container').classList.add('win-line-c')

                } else if (
                    squares[0].className === "xo-square o-sign" &
                    squares[3].className === "xo-square o-sign" &
                    squares[6].className === "xo-square o-sign"
                    ||
                    squares[0].className === "xo-square x-sign" &
                    squares[3].className === "xo-square x-sign" &
                    squares[6].className === "xo-square x-sign"
                ) {

                    document.getElementById('xo-container').classList.add('win-line-1')
                    
                } else if (
                    squares[1].className === "xo-square o-sign" &
                    squares[4].className === "xo-square o-sign" &
                    squares[7].className === "xo-square o-sign"
                    ||
                    squares[1].className === "xo-square x-sign" &
                    squares[4].className === "xo-square x-sign" &
                    squares[7].className === "xo-square x-sign"
                ) {

                    document.getElementById('xo-container').classList.add('win-line-2')

                } else if (
                    squares[2].className === "xo-square o-sign" &
                    squares[5].className === "xo-square o-sign" &
                    squares[8].className === "xo-square o-sign"
                    ||
                    squares[2].className === "xo-square x-sign" &
                    squares[5].className === "xo-square x-sign" &
                    squares[8].className === "xo-square x-sign"
                ) {

                    document.getElementById('xo-container').classList.add('win-line-3')

                } else if (
                    squares[0].className === "xo-square o-sign" &
                    squares[4].className === "xo-square o-sign" &
                    squares[8].className === "xo-square o-sign"
                    ||
                    squares[0].className === "xo-square x-sign" &
                    squares[4].className === "xo-square x-sign" &
                    squares[8].className === "xo-square x-sign"
                ) {

                    document.getElementById('xo-container').classList.add('win-diagon-1')

                } else if (
                    squares[2].className === "xo-square o-sign" &
                    squares[4].className === "xo-square o-sign" &
                    squares[6].className === "xo-square o-sign"
                    ||
                    squares[2].className === "xo-square x-sign" &
                    squares[4].className === "xo-square x-sign" &
                    squares[6].className === "xo-square x-sign"
                ) {

                    document.getElementById('xo-container').classList.add('win-diagon-2')

                }

            }
        }
    })
})
