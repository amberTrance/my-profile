// Script that toggles between hobby descriptions
let art = document.getElementById('art')
let psy = document.getElementById('psy')
let science = document.getElementById('science')
let code = document.getElementById('code')

let hobbies = [art, psy, science, code]

let showArt = () => {
    hobbies.forEach(hobby => hobby.classList.add('hide'))  
    art.classList.remove('hide')
}

let showPsy = () => {
    hobbies.forEach(hobby => hobby.classList.add('hide'))   
    psy.classList.remove('hide')
}

let showScience = () => {
    hobbies.forEach(hobby => hobby.classList.add('hide'))   
    science.classList.remove('hide')
}

let showCode = () => {
    hobbies.forEach(hobby => hobby.classList.add('hide'))    
    code.classList.remove('hide')
}

// Show Project by clicking on nav titles
let spaceProject = document.getElementById('space-cards-placeholder')
let artProject = document.getElementById('my-art-placeholder')

let projects = [spaceProject, artProject]

let showSpaceProject = () => {
    projects.forEach(project => project.classList.add('hide'))   
    spaceProject.classList.remove('hide')
}

let showArtProject = () => {
    projects.forEach(project => project.classList.add('hide'))   
    artProject.classList.remove('hide')
}