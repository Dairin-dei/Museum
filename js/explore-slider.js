export function exploreSlider(){

    let sliderContainer = document.querySelector(".explore-images");
  
    let slider = document.querySelector(".slider");
    let imgBefore = document.querySelector(".img-before");
    let imgBeforeM = document.querySelector(".img-before-m");
    let coordImg = sliderContainer.getBoundingClientRect();
    let werMoving = false;

    function moving(place){
       let half = slider.offsetWidth / 2;
       let change = Math.max(0,Math.min(place,coordImg.right-coordImg.left));
       slider.style.left = String(change-half)+"px";
       imgBefore.style.width = String(change)+"px";
       imgBeforeM.style.width = String(change)+"px";
     }

    document.body.addEventListener("mousemove",(where) =>{

        if (werMoving){
           let coordCurrent = where.x - coordImg.x;
            moving(coordCurrent); 
            where.preventDefault();   
            where.stopPropagation();
        }
    });

    slider.addEventListener("mousedown",() =>{
        werMoving = true;
    })
    document.body.addEventListener("mouseup",() =>{
        werMoving = false;
    })
};



