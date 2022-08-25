let menu = document.getElementById("menu");
let sidemenu = document.getElementById("sidemenu");
let exit = document.getElementById("cancel");
menu.addEventListener("click",openMenu);
function openMenu(){
    sidemenu.style.left = 0;

};
function exitMenu(){
    sidemenu.style.left = "-100%";
};

exit.addEventListener("click",exitMenu);
