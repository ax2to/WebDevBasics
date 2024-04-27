export function storyButtonsHandler() {
    // seleccionar el boton
    let btnWhoWeAre = document.getElementById("btnWhoWeAre")
    let btnOurVision = document.getElementById("btnOurVision")
    let btnOurStory = document.getElementById("btnOurStory")

    // añadir un listener para el evento click
    btnWhoWeAre.addEventListener("click", function () {
        displayStoryContent("content-who-we-are")
        btnWhoWeAre.className = 'active'
    })
    btnOurVision.addEventListener("click", function () {
        displayStoryContent("content-our-vision")
        btnOurVision.className = 'active'
    })
    btnOurStory.addEventListener("click", function () {
        displayStoryContent("content-our-story")
        btnOurStory.className = 'active'
    })
}

function displayStoryContent(elementId) {
    console.log("displayStoryContent execute!")

    // remover clase active a todos los botones
    let buttons = document.querySelectorAll(".story .actions button")
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active')
    }

    // acceder al elemento para ocultar
    let divsToHide = document.getElementsByClassName("internal-content")
    // recorrer el conjunto de datos devuelto por el className
    for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = 'none'
    }
    // i = 0; i < 3; i =  i + 1 => true
    // i = 1; i < 3; i =  i + 1 => true
    // i = 2; i < 3; i =  i + 1 => true
    // i = 3; i < 3; i =  i + 1 => false

    // acceder al elemento
    let divToDisplay = document.getElementById(elementId)
    divToDisplay.style.display = "block"
}