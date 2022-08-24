let menu = document.getElementById("menu");
let sidemenu = document.getElementById("sidemenu");
let exit = document.getElementById("cancel");
menu.addEventListener("click", openMenu);
function openMenu() {
    sidemenu.style.left = 0;

};
function exitMenu() {
    sidemenu.style.left = "-100%";
};

exit.addEventListener("click", exitMenu);
let signlogin = document.getElementById("signlogin");

function log() {
    signlogin.style.display = "flex";


}
function exitlogin() {

    signlogin.style.display = "none";


}

//  up
let span = document.querySelector(".up");

window.onscroll = function () {
    this.scrollY >= 100 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};


//  img slide show  
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2500); // Change image every 2 seconds
}