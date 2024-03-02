// listener escucha cuando la estructura de la pagina se cargado
document.addEventListener("DOMContentLoaded", () => {
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

    // añadir un listener para el promo video
    let btnPromoVideo = document.getElementById('btnPromoVideo')
    btnPromoVideo.addEventListener('click', openPromoVideo)
});

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

function openPromoVideo() {
    let overlay = document.getElementById('overlay')
    let video = document.getElementById('divPromoVideo')

    overlay.addEventListener('click', closePromoVideo)

    overlay.style.display = 'block'
    video.style.display = 'block'
}

function closePromoVideo() {
    let overlay = document.getElementById('overlay')
    let video = document.getElementById('divPromoVideo')

    overlay.style.display = 'none'
    video.style.display = 'none'
}