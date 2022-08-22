export function functionsOnLoad() {
  /* progressRewindBarColor();
  progressSoundColor();*/
  progressBarColor(document.getElementById("progress-length"), 0);
  progressBarColor(document.getElementById("progress-sound"), 50);
}

export function managingVideo() {
  let bigVideo = document.querySelector(".big-video");
  let buttonPlayBig = document.getElementById("play-big");

  let buttonPlaySmall = document.getElementById("play-button");
  let imgButtonPlay = document.querySelector(".button-image-play");

  let rangeLength = document.getElementById("progress-length");

  let rangeSound = document.getElementById("progress-sound");

  let buttonSound = document.getElementById("button-sound");
  let imgButtonSound = document.querySelector(".button-image-sound");

  let buttonFullScreen = document.getElementById("full-screen");
  let videoManager = document.querySelector(".video-manager");

  //events
  buttonPlaySmall.addEventListener("click", playBigVideo);

  buttonPlayBig.addEventListener("click", playBigVideo);

  bigVideo.addEventListener("click", playBigVideo);
  bigVideo.addEventListener("ended", toggleButtonsBigVideo);

  bigVideo.addEventListener("timeupdate", updateProgressRewind);
  rangeLength.addEventListener("input", changeValueLength);

  rangeSound.addEventListener("input", changeValueSound);

  buttonSound.addEventListener("click", muteUnmute);

  buttonFullScreen.addEventListener("click", getFullScreen);

  document.addEventListener("keydown", function (event) {
    if (event.code == "KeyM") {
      muteUnmute();
    }
    if (event.code == "KeyF") {
      getFullScreen();
    }
    if (event.code == "Equal" && (event.shiftKey || event.metaKey)) {
      increaseVelocity();
    }
    if (event.code == "NumpadAdd " && (event.shiftKey || event.metaKey)) {
      increaseVelocity();
    }
    if (event.code == "NumpadSubtract " && (event.shiftKey || event.metaKey)) {
      decreaseVelocity();
    }
    if (event.code == "Minus" && (event.shiftKey || event.metaKey)) {
      decreaseVelocity();
    }
  });

  //functions

  function playBigVideo() {
    toggleButtonsBigVideo();

    if (bigVideo.paused) {
      buttonPlayBig.style.opacity = "0";
      bigVideo.play();
    } else {
      buttonPlayBig.style.opacity = "1";
      bigVideo.pause();
    }
  }

  function muteUnmute() {
    toggleButtonsSound();
    if (bigVideo.muted) {
      bigVideo.muted = false;
      bigVideo.volume = 0.5;
    } else {
      bigVideo.muted = true;
      bigVideo.volume = 0;
    }
  }

  function toggleButtonsBigVideo() {
    imgButtonPlay.classList.toggle("button-image-play");
    imgButtonPlay.classList.toggle("button-image-pause");
  }

  function toggleButtonsSound() {
    imgButtonSound.classList.toggle("button-image-mute");
    imgButtonSound.classList.toggle("button-image-shout");
  }

  function updateProgressRewind() {
    if (isNaN(bigVideo.duration)) {
    } else {
      rangeLength.value =
        Math.floor(100 * bigVideo.currentTime) / Math.floor(bigVideo.duration);
      progressBarColor(rangeLength, rangeLength.value);
    }
  }

  function changeValueLength() {
    bigVideo.currentTime = Math.floor(
      (bigVideo.duration * rangeLength.value) / 100
    );
    progressBarColor(rangeLength, rangeLength.value);
  }

  function changeValueSound() {
    let value = rangeSound.value;
    bigVideo.volume = value / 100;
    progressBarColor(rangeSound, value);
    if (value == 0) {
      bigVideo.muted = true;

      imgButtonSound.classList.add("button-image-mute");
      imgButtonSound.classList.remove("button-image-shout");
    } else {
      bigVideo.muted = false;
      imgButtonSound.classList.remove("button-image-mute");
      imgButtonSound.classList.add("button-image-shout");
    }
  }

  function progressBarColor(thisRange, value) {
    thisRange.style.background =
      "linear-gradient(to right, #710707 0%, #710707 " +
      value +
      "%, #fff " +
      value +
      "%, white 100%)";
  }

  function getFullScreen() {
    let videoContainer = document.querySelector(".container-player");

    if (!bigVideo.classList.contains("video-full")) {
      videoContainer.webkitRequestFullScreen();
      toggleButtonsFullScreen();
      toggleManagerFullScreen();
      toggleVideoFullScreen();
      toggleRangesFullScreen();
    } else {
      document.webkitCancelFullScreen();
      toggleButtonsFullScreen();
      toggleManagerFullScreen();
      toggleVideoFullScreen();
      toggleRangesFullScreen();
    }
  }

  function toggleButtonsFullScreen() {
    buttonFullScreen.classList.toggle("button-larger");
    buttonFullScreen.classList.toggle("button-smaller");
  }
  function toggleManagerFullScreen() {
    videoManager.classList.toggle("video-manager-full");
  }
  function toggleVideoFullScreen() {
    bigVideo.classList.toggle("video-full");
  }

  function toggleRangesFullScreen() {
    rangeLength.classList.toggle("rewind-full");
    rangeSound.classList.toggle("sound-full");
  }

  function increaseVelocity() {
    bigVideo.playbackRate = bigVideo.playbackRate + 0.25;
  }

  function decreaseVelocity() {
    bigVideo.playbackRate = bigVideo.playbackRate - 0.25;
  }
}

function progressBarColor(thisRange) {
  thisRange.style.background =
    "linear-gradient(to right, #710707 0%, #710707 " +
    thisRange.value +
    "%, #fff " +
    thisRange.value +
    "%, white 100%)";
}

export function ManagingFrames() {
  let tag = document.createElement("script");

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let player = [];

  function onPlayerStateChange(event) {
    console.log("stop all", event);
    if (event.data == YT.PlayerState.PLAYING) {
      for (let i = 0; i < player.length; i++) {
        if (i + 1 != event.target.id) {
          player[i].pauseVideo();
        }
      }
    }
  }

  function onYouTubeIframeAPIReady() {
    player[0] = new YT.Player("player0", {
      height: "254",
      width: "452",
      loading: "lazy",
      videoId: "2OR0OCr6uRE",

      events: {
        onStateChange: onPlayerStateChange,
      },
    });

    player[1] = new YT.Player("player1", {
      height: "254",
      width: "452",
      loading: "lazy",
      videoId: "zp1BXPX8jcU",

      events: {
        onStateChange: onPlayerStateChange,
      },
    });

    player[2] = new YT.Player("player2", {
      height: "254",
      width: "452",
      loading: "lazy",
      videoId: "Vi5D6FKhRmo",

      events: {
        onStateChange: onPlayerStateChange,
      },
    });

    player[3] = new YT.Player("player3", {
      height: "254",
      width: "452",
      loading: "lazy",
      videoId: "NOhDysLnTvY",

      events: {
        onStateChange: onPlayerStateChange,
      },
    });

    player[4] = new YT.Player("player4", {
      height: "254",
      width: "452",
      loading: "lazy",
      videoId: "aWmJ5DgyWPI",

      events: {
        onStateChange: onPlayerStateChange,
      },
    });
  }

  //slider
  function managingSlider() {
    let bigVideo = document.querySelector(".big-video");
    let framesContainer = document.querySelector(".my-slider");
    let framesScreen = document.querySelectorAll(".frame-youtube");
    let sliderPag = document.querySelectorAll(".video-slider-button");
    let arrowLeft = document.querySelector(".slider-video-left");
    let arrowRight = document.querySelector(".slider-video-right");
    let buttonPlayBig = document.getElementById("play-big");
    let imgButtonPlay = document.querySelector(".button-image-play");
    let rangeLength = document.getElementById("progress-length");

    function toggleButtonsBigVideo() {
      imgButtonPlay.classList.toggle("button-image-play");
      imgButtonPlay.classList.toggle("button-image-pause");
    }

    let sliderBegin = 0;

    arrowRight.addEventListener("click", moveFrameToTheRight);
    arrowLeft.addEventListener("click", moveFrameToTheLeft);

    function loadMainVideo(number) {
      let path = "./assets/video/video" + String(number) + ".mp4";
      let posterPath = "./assets/video/poster" + String(number) + ".jpg";

      bigVideo.src = path;
      bigVideo.poster = posterPath;

      bigVideo.currentTime = 0;
      rangeLength.value = 0;
      progressBarColor(rangeLength, rangeLength.value);
      toggleButtonsBigVideo();
      buttonPlayBig.style.opacity = "1";
    }

    for (let i = 0; i < sliderPag.length; i++) {
      sliderPag[i].addEventListener("click", (event) => {
        let currentSlide = 0;
        for (let j = 0; j < player.length; j++) {
          if (sliderPag[j].classList.contains("first-video-slider-button")) {
            currentSlide = j;
          }
        }

        if (currentSlide < i) {
          for (let j = currentSlide; j < i; j++) {
            moveFrameToTheRight();
          }
        } else {
          for (let j = i; j < currentSlide; j++) {
            moveFrameToTheLeft();
          }
        }

        loadMainVideo(sliderBegin);

        for (let j = 0; j < player.length; j++) {
          player[j].pauseVideo();
          sliderPag[j].classList.remove("first-video-slider-button");
        }
        sliderPag[i].classList.add("first-video-slider-button");
      });
    }

    function moveFrameToTheRight() {
      onYouTubeIframeAPIReady();
      let first = framesContainer.querySelector(".frame-youtube");
      let firstNumber = Number(first.id.slice(6));
      let currentNumber = firstNumber == 4 ? 0 : firstNumber + 1;

      framesContainer.append(first);

      for (let i = 0; i < framesScreen.length; i++) {
        framesScreen[i].classList.remove(".right-video-slider");
      }

      loadMainVideo(currentNumber);
      for (let i = 0; i < player.length; i++) {
        player[i].pauseVideo();
        sliderPag[i].classList.remove("first-video-slider-button");
      }
      sliderPag[currentNumber].classList.add("first-video-slider-button");
    }

    function moveFrameToTheLeft() {
      let first = framesContainer.querySelector(".frame-youtube");
      let currentNumber =
        first.id.slice(6) == "4" ? 0 : Number(first.id.slice(6)) + 1;

      let last = framesContainer.querySelector(".frame-youtube:last-child");

      framesContainer.insertBefore(last, first);
      loadMainVideo(currentNumber);

      for (let i = 0; i < player.length; i++) {
        player[i].pauseVideo();
        sliderPag[i].classList.remove("first-video-slider-button");
      }
      sliderPag[currentNumber].classList.add("first-video-slider-button");
    }
  }

  onYouTubeIframeAPIReady();
  managingSlider();
}
