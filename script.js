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
let spaceProject, artProject
spaceProject = document.getElementById('space-cards-placeholder')
artProject = document.getElementById('my-art-placeholder')

let visibleProject = spaceProject;

const showSpaceProject = () => {
    visibleProject.classList.add('hide')  
    spaceProject.classList.remove('hide')
    visibleProject = spaceProject;
}

const showArtProject = () => {
    visibleProject.classList.add('hide')
    artProject.classList.remove('hide')
    visibleProject = artProject
}

// Add html projects inside the index.html page 
$(function() {
    $("#space-cards-placeholder").load("sections/space-cards/space.html")
    $("#my-art-placeholder").load("sections/my-art/myart.html")
});
