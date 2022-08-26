let back = document.getElementById("back");
let box = document.getElementById("box");
let back2 = document.getElementById("back2");
let box2 = document.getElementById("box2");
let user = "seif@sam.com";
let pass_user = "seif seif";
let user2 = "boda@3omda.com";
let pass_user2 = "3ooomdaa";




document.getElementById("giftbtn").innerHTML = user2[0] + user2[1] + user2[2] + user2[3];



function validateForm() {


    var valid = true;

    if (inputForm.name.value.length <= 7) {
        back.style.display = "block";
        box.style.display = "block";
        document.inputForm.name.focus();
        valid = false;
    }
    else if (document.inputForm.email.value.indexOf("@") == -1 || document.inputForm.email.value.indexOf(".") == -1) {
        back2.style.display = "block";
        box2.style.display = "block";
        document.inputForm.email.focus();
        valid = false;
    }

    else if (document.inputForm.email.value == "Admin@admin.com" && document.inputForm.name.value == "11111111") {
        location.href = "/admin/index.html";
        valid = false;
    }
    else if (document.inputForm.email.value == user && document.inputForm.name.value == pass_user || document.inputForm.email.value == user2 && document.inputForm.name.value == pass_user2) {
        location.href = "../index.html";
        valid = false;

    }
    else if (document.inputForm.email.value != user || document.inputForm.name.value != pass_user) {
        back3.style.display = "block";
        box3.style.display = "block";
        valid = false;
    }
    // else if (document.inputForm.email.value == user && document.inputForm.name.value == pass_user || document.inputForm.email.value == user2 && document.inputForm.name.value == pass_user2) {
    //     location.href = "../index.html";
    //     valid = false;

    // }

    return valid;
};

function aa() {
    back.style.display = "none";
    box.style.display = "none";
}
function aa2() {
    back2.style.display = "none";
    box2.style.display = "none";
}
function aa3() {
    back3.style.display = "none";
    box3.style.display = "none";
}


