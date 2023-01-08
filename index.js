// Home
let play = document.querySelector(".play-btn");
let myyVideo = document.querySelector("#myyvideo");
let videoo = document.querySelector(".video-containerr");
let closeeBtn = document.querySelector(".close-videoo");

play.addEventListener("click", function () {
  videoo.classList.remove("activee");
  myyVideo.play();
});

closeeBtn.addEventListener("click", function () {
  videoo.classList.add("activee");
  myyVideo.pause();
});

// -------
// const search = function () {
//   const searchbox = document.getElementById("search").value.toUpperCase();
//   const movieSearch = document.getElementById("movie");
//   const names = document.querySelectorAll(".name-genre");
//   const tags = movieSearch.getElementsByTagName("h3");

//   for (let i = 0; i < tags.length; i++) {
//     let match = names[i].getElementsByTagName("h2")[0];

//     if (match) {
//       let textvalue = match.textContent || match.innerHTML;

//       if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
//         names[i].style.display = "";
//       } else {
//         names[i].style.display = "none";
//       }
//     }
//   }
// };
