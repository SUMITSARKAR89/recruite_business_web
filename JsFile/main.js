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