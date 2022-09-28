
const containerMenu = document.querySelector('.menu')
const animateBars = () => {
    const line1 = document.querySelector('.line1_bars-menu')
    const line2 = document.querySelector('.line2_bars-menu')
    const line3 = document.querySelector('.line3_bars-menu')  
    line1.classList.toggle('activeline1_bars-menu')
    line2.classList.toggle('activeline2_bars-menu')
    line3.classList.toggle('activeline3_bars-menu')

    containerMenu.classList.toggle('menu_active')
}

document.querySelector('.bars_menu').addEventListener('click',animateBars)


