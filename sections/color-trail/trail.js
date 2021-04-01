let tcontainer = document.querySelector(".tcontainer")

// This loop adds 759 divs to the container, with a class of colorbox
let x = 0
while (x < 759) {
    let div = document.createElement("div")
    div.classList.add("colorbox")
    tcontainer.appendChild(div)
    x++
}

let colorboxes = document.querySelectorAll(".colorbox")

colorboxes.forEach(box => {
    box.addEventListener("mouseover", function(e) {
        // this variable generates a hexadecimal value
        const randomColor = Math.floor(Math.random()*16777215).toString(16)
        
        // style background color with hex value
        box.style.backgroundColor = "#" + randomColor;

        // wait 2 seconds before changing the color back to its default color
        setTimeout(function() {
            box.style.backgroundColor = "rgb(2, 17, 24)"
        }, 2000)
        
    })
})
