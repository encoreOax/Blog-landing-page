const btnHam = document.getElementById('ham')
const navMobile = document.getElementById('nav')
const subMenuBtn = document.querySelectorAll('.sub-menu-btn')
const subMenuBtnDesk = document.querySelectorAll('.sub-menu-btn-desk')

btnHam.addEventListener('click', ()=>{

    if (btnHam.classList.contains('ham-on')){
        btnHam.classList.remove('ham-on')
        btnHam.classList.add('ham-off')
        navMobile.classList.remove('vis-hidden')
        navMobile.classList.add('vis-visible')
    }else {
        btnHam.classList.remove('ham-off')
        btnHam.classList.add('ham-on')
        navMobile.classList.remove('vis-visible')
        navMobile.classList.add('vis-hidden')
        
    }
})
for (let index = 0; index < subMenuBtn.length; index++) {
    subMenuBtn[index].addEventListener('click', ()=> {
        const subMenu = subMenuBtn[index].nextElementSibling
        const navIcon = subMenuBtn[index].firstElementChild

        if (subMenu.style.display == ('block')) {
            navIcon.classList.remove('nav_icon-open')
            navIcon.classList.add('nav_icon')
            subMenuBtn[index].style.color = ('var(--primary-very-dark-blue-heading)')
            subMenu.style.display = ('none')
            
        } else {
            navIcon.classList.remove('nav_icon')
            navIcon.classList.add('nav_icon-open')
            subMenuBtn[index].style.color = ('var(--neutral-very-dark-grayish-blue-body-copy)')
            subMenu.style.display = ('block')
            
        }
    })
    
}
for (let index = 0; index < subMenuBtnDesk.length; index++) {
    subMenuBtnDesk[index].addEventListener('click', ()=> {
        const subMenu = subMenuBtnDesk[index].nextElementSibling
        const navIcon = subMenuBtnDesk[index].firstElementChild
      
        if (subMenu.style.display == ('flex')) {
            navIcon.classList.remove('nav_icon-open')
            navIcon.classList.add('nav_icon')
            subMenu.style.display = ('none')
            subMenu.classList.remove('vis-hidden')
            subMenu.classList.add('vis-visible')
            
        } else {
            navIcon.classList.remove('nav_icon')
            navIcon.classList.add('nav_icon-open')
            subMenu.style.display = ('flex')
            
        }
    })
    
}