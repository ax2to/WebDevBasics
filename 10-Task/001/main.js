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

    /**
     * Seleccion de Trabajos
     */
    let btnResearch = document.getElementById("btnResearch")
    btnResearch.addEventListener('click', showResearchWorks)

    let btnPlanning = document.getElementById("btnPlanning")
    btnPlanning.addEventListener('click', showPanningWorks)

    let btnMarketing = document.getElementById("btnMarketing")
    btnMarketing.addEventListener('click', showMarketingWorks)

    let btnBranding = document.getElementById("btnBranding")
    btnBranding.addEventListener('click', showBrandinggWorks)

    let btnAllWorks = document.getElementById("btnAllWorks")
    btnAllWorks.addEventListener('click', showAllWorks)
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

function showResearchWorks(event) {
    // evitar comportamiento por defecto
    event.preventDefault()

    // setup
    setUpWorksButton()

    // mostrar el trabajo "Web development"
    document.getElementById('divWebDevelopment').style.display = 'block'

    // añadir la seccion actual
    document.getElementById('btnResearch').parentNode.classList.add('active')
}

function showPanningWorks(event) {
    // evitar comportamiento por defecto
    event.preventDefault()

    // setup
    setUpWorksButton()

    // mostrar el trabajo "Digital Marketing"
    document.getElementById('divDigitalMarketing').style.display = 'block'

    // añadir la seccion actual
    document.getElementById('btnPlanning').parentNode.classList.add('active')
}

function showMarketingWorks(event) {
    // evitar comportamiento por defecto
    event.preventDefault()

    // setup
    setUpWorksButton()

    // mostrar el trabajo "App Development" "Product Design"
    document.getElementById('divAppDevelopment').style.display = 'block'
    document.getElementById('divProductDesign').style.display = 'block'

    // añadir la seccion actual
    document.getElementById('btnMarketing').parentNode.classList.add('active')
}

function showBrandinggWorks(event) {
    // evitar comportamiento por defecto
    event.preventDefault()

    // setup
    setUpWorksButton()

    // mostrar el trabajo "divGraphicDesign" "divSEOServices"
    document.getElementById('divGraphicDesign').style.display = 'block'
    document.getElementById('divSEOServices').style.display = 'block'

    // añadir la seccion actual
    document.getElementById('btnBranding').parentNode.classList.add('active')
}

function showAllWorks() {
    // evitar comportamiento por defecto
    event.preventDefault()

    // setup
    setUpWorksButton()

    // mostrar el todos los trabajos
    document.getElementById('divGraphicDesign').style.display = 'block'
    document.getElementById('divWebDevelopment').style.display = 'block'
    document.getElementById('divAppDevelopment').style.display = 'block'
    document.getElementById('divDigitalMarketing').style.display = 'block'
    document.getElementById('divSEOServices').style.display = 'block'
    document.getElementById('divProductDesign').style.display = 'block'

    // añadir la seccion actual
    document.getElementById('btnAllWorks').parentNode.classList.add('active')
}

function setUpWorksButton() {
    // ocultar todos los elements (trabajos)
    document.getElementById('divGraphicDesign').style.display = 'none'
    document.getElementById('divWebDevelopment').style.display = 'none'
    document.getElementById('divAppDevelopment').style.display = 'none'
    document.getElementById('divDigitalMarketing').style.display = 'none'
    document.getElementById('divSEOServices').style.display = 'none'
    document.getElementById('divProductDesign').style.display = 'none'

    // quitar la seleccion en el menu
    let buttons = document.querySelectorAll(".our-work ul li")
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active')
    }
}