export function controlSlider(){
    let sliderContainerInner = document.querySelector(".welcome-slider");
    sliderContainerInner.style.maxWidth = '5000px';
    sliderContainerInner.style.width = '5000px';

    let buttonSliderRight = document.querySelector(".welcome-slider-button-right");
    let buttonSliderLeft = document.querySelector(".welcome-slider-button-left");
    let slides = document.querySelectorAll('.welcome-image');
    let slidersLength = slides.length;

    let slidesControl = document.querySelectorAll('.slider-counter-div');
    let digit = document.querySelector('.slider-counter-text-current');
   
    
    let curSlide = 0;

    let weCan = true;

    function changeNumber(number){
        curSlide = (number + slidersLength)% slidersLength;
    }
    
    function movePrevious(where){

        weCan = false;
        slides[curSlide].classList.add(where);

        for (let elem of slidesControl){
            elem.classList.remove('active-slider-counter-div');
        }
              
        slides[curSlide].addEventListener("animationend",function(){
           // this.classList.remove(where);
            this.classList.remove('active-welcome-slide');
            for (let i = 0; i<slides.length;i++){

                slides[i].classList.remove(where);

            }
        });
    }

    function moveNext(where){

        slides[curSlide].classList.add('next-welcome-slider',where);
        slidesControl[curSlide].classList.add('active-slider-counter-div');
        digit.textContent = '0'+String((curSlide+(where == 'to-left'?-1:1)));
        slides[curSlide].addEventListener("animationend",function(){
            this.classList.remove(where,'next-welcome-slider');
            this.classList.add('active-welcome-slide');
            weCan = true;
            
            for (let i = 0; i<slides.length;i++){

                slides[i].classList.remove(where);
                //console.log(slides[i].classList);
            }
        });

    }

    buttonSliderLeft.addEventListener("click",function(){
        if (weCan){
            movePrevious('to-right');
            changeNumber(curSlide-1);
            moveNext('from-left');
        }
    });
    
    buttonSliderRight.addEventListener("click",function(){
        if (weCan){
            movePrevious('to-left');
            changeNumber(curSlide+1);
            moveNext('from-right')
        } 
    });

    //slider pagination
    function changeItemsBySlidesControl(){
        let carousel = document.querySelectorAll('.slider-counter-div');

        for (let ind1 = 0; ind1<carousel.length; ind1++){
 
            carousel[ind1].addEventListener("click",function(){
                carousel[curSlide].classList.remove('active-slider-counter-div');
                
                carousel[ind1].classList.add('active-slider-counter-div'); 

                if (curSlide < ind1){
                    if (weCan){
                        movePrevious('to-left');
                        curSlide = ind1;
                        moveNext('from-right');
                       }
                }else if (curSlide > ind1){
                    if (weCan){
                        movePrevious('to-right');
                        changeNumber(ind1);
                        moveNext('from-left');      
                        }            
               }else{
                    curSlide = ind1;
                    slides[curSlide].classList.add('active-welcome-slide');
               }
            


            /*    let curIndex = 0;
                for (let ind2 = 0; ind2<carousel.length; ind2++){
                    carousel[ind2].classList.remove('active-slider-counter-div');
                    if (ind2 == ind1){
                        curIndex = ind2;
                    }
                }  
                for (let elem = 0; elem< slides.length; elem++){
                    console.log(slides[elem].classList);
                    if (slides[elem].classList.contains('active-welcome-slide')){
                        
                        slides[elem].classList.remove('active-welcome-slide');
                        curSlide = elem;
                    }
                    
                } */ 
               // slides[curIndex].classList.add('active-welcome-slide'); 
                //carousel[ind1].classList.add('active-slider-counter-div'); 
          
             /*   if (curSlide < ind1){
                    if (weCan){
                        console.log(curSlide);
                        movePrevious('to-left');
                        curSlide = ind1;*/
                      //  moveNext('from-right')
           /*             }
                }else if (curSlide > ind1){
                    if (weCan){
                        console.log(curSlide);
                        movePrevious('to-right');
                        changeNumber(ind1);*/
                       // moveNext('from-left');      
               /*         }            
               }else{
                    curSlide = ind1;
                    slides[curSlide].classList.add('active-welcome-slide');
               }*/
                //digit.textContent = '0'+String((ind1+1));
            })
        }
    }
    changeItemsBySlidesControl();

    //drag&drop

    function dragDrop(container){

    let begX = 0;
    let begY = 0;
    let difX = 0;
    let difY = 0;
    let limDist = 10;
    
    container.addEventListener("mousedown",function(param){
        begX = param.pageX;
        begY = param.pageY;

        param.preventDefault();
    })

    container.addEventListener("mouseup",function(param){
        difX = param.pageX - begX;
        difY = param.pageY - begY;

        let weCan = true;

        if (difX >= limDist) { //moving to the rigth
            if (weCan){
                movePrevious('to-right');
                changeNumber(curSlide-1);
                moveNext('from-left');              
            }    
        }else if (difX<-limDist){ //moving to the left
            if (weCan){
                movePrevious('to-left');
                changeNumber(curSlide+1);
                moveNext('from-right')
            }               
        }
    })
    }

    for (elem of document.querySelectorAll('.not-select')){
        elem.addEventListener("select", function(){
            preventDefault();
        })
    }

    let sliderContainer = document.querySelector(".welcome-slider"); 
    dragDrop(sliderContainer);
    let blur = document.querySelector(".blur"); 
    dragDrop(blur);


}






