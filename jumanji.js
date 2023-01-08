let playBtn = document.querySelector(".btnTrailer");
let playyBtn = document.querySelector(".jumanji-btn");
let video = document.querySelector(".video-container");
let myVideo = document.querySelector("#myvideo");
let closeBtn = document.querySelector(".close-video");


playBtn.addEventListener("click", function () {
  video.classList.remove("active");
  myVideo.play();
});

playyBtn.addEventListener("click", function () {
  video.classList.remove("active");
  myVideo.play();
});

closeBtn.addEventListener("click", function () {
  video.classList.add("active");
  myVideo.pause();
});

// --------

