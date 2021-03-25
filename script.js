// Script that toggles between hobby descriptions
let art, psy, science, code
art = document.getElementById('art')
psy = document.getElementById('psy')
science = document.getElementById('science')
code = document.getElementById('code')

// The default visible section is art
let visibleHobby = art;

// Function that adds 'hide' class 
const hideHobby = () => {
    visibleHobby.classList.add('hide')
}

const showArt = () => {
    // Hide the currently visible section
    hideHobby()
    // Remove hide class from art section
    art.classList.remove('hide')
    // Set the 'visible' variable to art
    visibleHobby = art
}

const showPsy = () => {
    hideHobby()    
    psy.classList.remove('hide')
    visibleHobby = psy
}

const showScience = () => {
    hideHobby()    
    science.classList.remove('hide')
    visibleHobby = science
}

const showCode = () => {
    hideHobby()   
    code.classList.remove('hide')
    visibleHobby = code
}

// Show Project by clicking on nav titles
let navbar = document.getElementById("navbar");

let spaceProject, artProject
spaceProject = document.getElementById('space-cards-placeholder')
artProject = document.getElementById('my-art-placeholder')
xoProject = document.getElementById('xo-game-placeholder')

let visibleProject = spaceProject;

// Function that hides the previously visible project, and the navbar list
const hideStuff = () => {
    visibleProject.classList.add('hide')
    navbar.classList.remove('responsive')
}

const showSpaceProject = () => {
    hideStuff()  
    spaceProject.classList.remove('hide')
    visibleProject = spaceProject;    
}

const showArtProject = () => {
    hideStuff()  
    artProject.classList.remove('hide')
    visibleProject = artProject
}

const showXoProject = () => {
    hideStuff()  
    xoProject.classList.remove('hide')
    visibleProject = xoProject
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
