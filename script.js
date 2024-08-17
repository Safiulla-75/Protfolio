let menu = document.querySelector("#menuBar");
let menuList = document.querySelector(".list-ul");

menu.addEventListener("click", function(){
    menuList.classList.toggle("menuOpen");
})
