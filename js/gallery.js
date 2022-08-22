export function loadImages() {
  const pictureInnerContainer = document.querySelector(
    ".picture-inner-container"
  );

  let arrImages = [
    "./assets/img/gallery/gallery1.jpg",
    "./assets/img/gallery/gallery2.jpg",
    "./assets/img/gallery/gallery3.jpg",
    "./assets/img/gallery/gallery4.jpg",
    "./assets/img/gallery/gallery5.jpg",
    "./assets/img/gallery/gallery6.jpg",
    "./assets/img/gallery/gallery7.jpg",
    "./assets/img/gallery/gallery8.jpg",
    "./assets/img/gallery/gallery9.jpg",
    "./assets/img/gallery/gallery10.jpg",
    "./assets/img/gallery/gallery11.jpg",
    "./assets/img/gallery/gallery12.jpg",
    "./assets/img/gallery/gallery13.jpg",
    "./assets/img/gallery/gallery14.jpg",
    "./assets/img/gallery/gallery15.jpg",
  ];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffle(arrImages);

  function showImage(item) {
    const img = document.createElement("img");
    img.classList.add("gallery-image");
    img.src = item;
    img.alt = `Image` + item;
    /*img.style.marginBottom = '24px';*/
    /*img.style.width = '456px';*/

    pictureInnerContainer.append(img);
  }
  arrImages.map(showImage);
}

export function mainFloatingImages() {
  let containerGallery = document.querySelector(".picture-container");
  let galleryImages = document.querySelectorAll(".gallery-image");

  /*function onceATime(func,wait = 20){
    return function(){
      let context = this;
      let args = arguments;
      let var_time = null;

      let delay =  function(){
        var_time = null;
      }

      clearTimeout(var_time);
      setTimeout(delay,wait);
      func.apply(context,args);
  }
}*/

  function floatImages() {
    for (let i = 0; i < galleryImages.length; i++) {
      let currentImage = galleryImages[i];

      let coord = currentImage.getBoundingClientRect();

      if (
        coord.y < document.documentElement.clientHeight &&
        coord.y > -coord.height
      ) {
        currentImage.classList.add("gallery-floating-image");
      } else {
        currentImage.classList.remove("gallery-floating-image");
      }
    }
  }
  window.addEventListener("scroll", floatImages);
}

export function showOnLoad() {
  function checkAndFloat() {
    let sectionGallery = document.querySelector(".gallery-section");

    let coord = sectionGallery.getBoundingClientRect();

    if (
      coord.y >= -document.documentElement.clientHeight &&
      coord.y <= document.documentElement.clientHeight
    ) {
      let galleryImages = document.querySelectorAll(".gallery-image");
      for (let i = 0; i < galleryImages.length; i++) {
        let currentImage = galleryImages[i];

        currentImage.classList.add("gallery-floating-image");
      }
    }
  }

  //window.addEventListener("DOMContentLoaded ",checkAndFloat);
  window.addEventListener("load", checkAndFloat);
}

export function manageImages() {
  let galleryImages = document.getElementsByClassName("gallery-image");
  for (let i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener("mouseover", upScaleGalleryImage);
    galleryImages[i].addEventListener("mouseout", unScaleGalleryImage);
  }

  function upScaleGalleryImage() {
    this.style.transform = "scale(1.2)";
  }

  function unScaleGalleryImage() {
    this.style.transform = "scale(1)";
  }
}
