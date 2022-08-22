export function consolelog(){
    /*console.log('Самооценка');
    console.log('Итого 150');
    console.log('Вёрстка соответствует макету. Ширина экрана 1024px +40');
    console.log('Блок header +4');
    console.log('Секция Welcome +4');
    console.log('Секция Visiting +4');
    console.log('Секция Explore +4');
    console.log('Секция Video +4');
    console.log('Секция Gallery +4');
    console.log('Секция Tickets +4');
    console.log('Форма покупки билетов +4');
    console.log('Секция Contacts +4');
    console.log('Блок footer +4');
    console.log('Вёрстка соответствует макету. Ширина экрана 768px +40');
    console.log('Блок header +4');
    console.log('Секция Welcome +4');
    console.log('Секция Visiting +4');
    console.log('Секция Explore +4');
    console.log('Секция Video +4');
    console.log('Секция Gallery +4');
    console.log('Секция Tickets +4');
    console.log('Форма покупки билетов +4');
    console.log('Секция Contacts +4');
    console.log('Блок footer +4');
    console.log('Вёрстка соответствует макету. Ширина экрана 420px +40');
    console.log('Блок header +4');
    console.log('Секция Welcome +4');
    console.log('Секция Visiting +4');
    console.log('Секция Explore +4');
    console.log('Секция Video +4');
    console.log('Секция Gallery +4');
    console.log('Секция Tickets +4');
    console.log('Форма покупки билетов +4');
    console.log('Секция Contacts +4');
    console.log('Блок footer +4');
    console.log('Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +6');
    console.log('Совмещается адаптивная и респонсивная (резиновая) вёрстка +14 При изменении ширины экрана плавно изменяются размеры:');
    console.log('слайдера в секции Welcome +2');
    console.log('слайдера сравнения изображений в секции Explore +2');
    console.log('кастомного видеоплеера в секции Video +2');
    console.log('слайдера в секции Video +2');
    console.log('YouTube-видео в плейлисте в секции Video, маленькие видео выровнены по краям большого +2');
    console.log('галереи изображений и изображений в ней +2');
    console.log('карты +2');
    console.log('На ширине экрана 1024рх и меньше реализовано адаптивное меню +10');
    console.log('при нажатии на бургер-иконку меню появляется, плавно выдвигаясь слева, бургер-иконка изменяется на крестик. При нажатии на крестик меню исчезает, плавно возвращаясь назад, иконка крестика превращается в бургер-иконку +2');
    console.log('ссылки в меню работают, обеспечивая плавную прокрутку по якорям +2');
    console.log('вёрстка меню соответствует макету на всех проверяемых разрешениях +6');
    console.log('Оптимизация скорости загрузки страницы +8 Оптимизация скорости загрузки страницы определяется при помощи сервиса https://developers.google.com/speed/pagespeed/insights/. Результат проверки скорости сайта для мобильных устройств:');
    console.log('0 to 49 (red): Poor - не выполнено, 0 баллов');
 */
}

export function changingImages(){
      
    if(document.documentElement.clientWidth <= 420) {
        let map = document.querySelector(".map");
        map.src = "./assets/img/map420.jpg";

    }else if(document.documentElement.clientWidth <= 768) {
        let map = document.querySelector(".map");
        map.src = "./assets/img/map768.jpg";

    } 
}