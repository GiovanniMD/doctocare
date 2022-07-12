const nav = document.querySelector('#nav')
const section = document.querySelector('section')

const  ShowNavOnScroll = () => {
    if (window.scrollY > 0) {
        nav.classList.add('scroll')
    } else {
        nav.classList.remove('scroll')
    }
}

const ShowBackToTopButtonOnScroll = () => {   
    if (scrollY > 500) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

const activateMenuAtCurrentSection = (section) => {
    //linha alvo
    const targetLine = scrollY + innerHeight / 2
    //verificar se a seção passou da linha
    //quais dados vou precisar?
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    //o topo da seção cheou ou ultrapssou a linha alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    //informações dos dados e da lógica
    
    //verificar se a base da seção está abaixo  da linha alvo
    //quais dados vou precisar?

    //a seção termina onde?
    const sectionEndsAt = sectionTop + sectionHeight

    //o final da seção passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    //limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*= ${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
}

onScroll()

window.addEventListener('scroll', onScroll)

function onScroll() {
    ShowNavOnScroll()
    ShowBackToTopButtonOnScroll()
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services),activateMenuAtCurrentSection(about),activateMenuAtCurrentSection(contacts)
}


function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`#home:before, 
    #home img,
    #home .informações,
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content`);
