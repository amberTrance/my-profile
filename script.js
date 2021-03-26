// Script that toggles between hobby descriptions
let art, psy, science, code
art = document.getElementById('art')
psy = document.getElementById('psy')
science = document.getElementById('science')
code = document.getElementById('code')

// The default visible section is art
let visibleHobby = art;

const showHobby = (hobby) => {
    // Hide the currently visible section
    visibleHobby.classList.add('hide')

    switch (hobby) {
        case 'art':
            // Remove hide class from art section
            art.classList.remove('hide')
            // Set the 'visible' variable to art
            visibleHobby = art
            break
        case 'psy':
            psy.classList.remove('hide')
            visibleHobby = psy
            break
        case 'science':
            science.classList.remove('hide')
            visibleHobby = science
            break
        default:
            code.classList.remove('hide')
            visibleHobby = code
    }
}

// Show Project by clicking on nav titles
let navbar = document.getElementById("navbar");

let spaceProject, artProject
spaceProject = document.getElementById('space-cards-placeholder')
artProject = document.getElementById('my-art-placeholder')
xoProject = document.getElementById('xo-game-placeholder')

let visibleProject = spaceProject;

const showProject = (project) => {

    // Hides the previously visible project, and the navbar list
    visibleProject.classList.add('hide')
    navbar.classList.remove('responsive')

    switch (project) {
        case 'space':
            spaceProject.classList.remove('hide')
            visibleProject = spaceProject
            break
        case 'myart':
            artProject.classList.remove('hide')
            visibleProject = artProject
            break
        default:
            xoProject.classList.remove('hide')
            visibleProject = xoProject        
    }   
}

// Function that gets called when you click on the navbar icon
const toggleNavList = () => {
    // If the navbar classes are 'navbar' when clicked, add class 'responsive'
    navbar.className === "navbar" ?
    navbar.classList.add("responsive") :
    // If it already has a class of 'responsive', remove it
    navbar.classList.remove("responsive")
}

// Add html projects inside the index.html page 
$(function() {
    $("#space-cards-placeholder").load("sections/space-cards/space.html")
    $("#my-art-placeholder").load("sections/my-art/myart.html")
    $("#xo-game-placeholder").load("sections/xo-game/xo.html")
});
