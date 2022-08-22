export function addEventListenersAll(){

let burgerMenu = document.querySelector('.burger_menu');
let burgerMenuClose = document.querySelector('.burger_menu_close');



burgerMenu.addEventListener('click',()=>{
    if(document.documentElement.clientWidth <= 420) {
 
        let sectionWelcome = document.querySelector('.welcome');
        let welcomeH2 = sectionWelcome.querySelector('.h2');
        welcomeH2.classList.add('hide_class');
        let welcomeH4 = sectionWelcome.querySelector('.h4');
        welcomeH4.classList.add('hide_class');
        let welcomeButton = sectionWelcome.querySelector('.button-discover');
        welcomeButton.classList.add('hide_class');
        let welcomeSlider = sectionWelcome.querySelector('.welcome-slider-container');
        welcomeSlider.classList.add('hide_class');
        let arrBurgerLi = document.querySelectorAll('.menu-li');
        arrBurgerLi.forEach(function(item,index,arrBurgerLi){
            item.classList.add('add-arrows');
        })
        let headerNav = document.querySelector('.header-nav');
        headerNav.classList.add('header-nav-move');
        headerNav.classList.add('show_menu');
    
        burgerMenu.classList.add('hide_burger');
        
        burgerMenuClose.classList.add('show_burger');

        let burger420 = document.querySelector('.burger420');
        
        burger420.classList.add('show-burger420')

    }else if(document.documentElement.clientWidth <= 768) {
 
        let sectionWelcome = document.querySelector('.welcome');
        let welcomeH2 = sectionWelcome.querySelector('.h2');
        welcomeH2.classList.add('hide_class');
        let welcomeH4 = sectionWelcome.querySelector('.h4');
        welcomeH4.classList.add('hide_class');
        let welcomeButton = sectionWelcome.querySelector('.button-discover');
        welcomeButton.classList.add('hide_class');
        let welcomeSlider = sectionWelcome.querySelector('.welcome-slider-container');
        welcomeSlider.classList.add('hide_class');
        let arrBurgerLi = document.querySelectorAll('.menu-li');
        arrBurgerLi.forEach(function(item,index,arrBurgerLi){
            item.classList.add('add-arrows');
        })
        let headerNav = document.querySelector('.header-nav');
        headerNav.classList.add('header-nav-move');
        headerNav.classList.add('show_menu');
    
        burgerMenu.classList.add('hide_burger');
        
        burgerMenuClose.classList.add('show_burger');

        let burger768 = document.querySelector('.burger768');
        
        burger768.classList.add('show-burger768')

    }else if(document.documentElement.clientWidth <= 1024) {
    let sectionWelcome = document.querySelector('.welcome');
    let welcomeH2 = sectionWelcome.querySelector('.h2');
    welcomeH2.classList.add('hide_class');
    let welcomeH4 = sectionWelcome.querySelector('.h4');
    welcomeH4.classList.add('hide_class');
    let welcomeButton = sectionWelcome.querySelector('.button-discover');
    welcomeButton.classList.add('hide_class');
    let arrBurgerLi = document.querySelectorAll('.menu-li');
    arrBurgerLi.forEach(function(item,index,arrBurgerLi){
        item.classList.add('add-arrows');
    })
    let headerNav = document.querySelector('.header-nav');
    headerNav.classList.add('show_menu');



    burgerMenu.classList.add('hide_burger');
    
    burgerMenuClose.classList.add('show_burger');

}



})


burgerMenuClose.addEventListener('click',()=>{
    let sectionWelcome = document.querySelector('.welcome');
    let welcomeH2 = sectionWelcome.querySelector('.h2');
    welcomeH2.classList.remove('hide_class');
    let welcomeH4 = sectionWelcome.querySelector('.h4');
    welcomeH4.classList.remove('hide_class');
    let welcomeButton = sectionWelcome.querySelector('.button-discover');
    welcomeButton.classList.remove('hide_class');
    let arrBurgerLi = document.querySelectorAll('.menu-li');
    arrBurgerLi.forEach(function(item,index,arrBurgerLi){
        item.classList.remove('add-arrows');
    })
    let headerNav = document.querySelector('.header-nav');
    headerNav.classList.remove('show_menu');
    headerNav.classList.remove('header-nav-move');

    burgerMenu.classList.remove('hide_burger');
    let burgerMenuClose = document.querySelector('.burger_menu_close');
    burgerMenuClose.classList.remove('show_burger');
    let welcomeSlider = sectionWelcome.querySelector('.welcome-slider-container');
    welcomeSlider.classList.remove('hide_class');
    if(document.documentElement.clientWidth <= 420) {
        let burger420 = document.querySelector('.burger420');
        
        burger420.classList.remove('show-burger420')
    }else    if(document.documentElement.clientWidth <= 768) {
    let burger768 = document.querySelector('.burger768');
        
    burger768.classList.remove('show-burger768')
    }
})
}


