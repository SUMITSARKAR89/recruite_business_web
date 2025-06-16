// ==============navigation menu================= 
const menuIcon = document.querySelector(".menuIcon");
const closeIcon = document.querySelector(".closeMenu");
const navigation = document.querySelector("#navigation");


menuIcon.addEventListener("click", () => {
    navigation.style.top = "0";
});
closeIcon.addEventListener("click", () => {
    navigation.style.top = "-100%"
});



// =========================video============= 
const overlay = document.getElementById("overlay");
const video = document.getElementById("myVideo");

overlay.addEventListener("click", () => {
      overlay.classList.add("hidden");
      video.play();
});


// =======================image container========= 
const resultImg = document.querySelectorAll('.result-img')

resultImg.forEach(img => {
    img.addEventListener("click", () => {
        removeClass (resultImg);
        img.classList.add('show-img')
    })
});
function removeClass (resultImg){
    resultImg.forEach(img => {
        img.classList.remove("show-img")
    })
}