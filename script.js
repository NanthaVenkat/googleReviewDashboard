
// login page script -----------------
let password = document.getElementById("password");
let toggleEye = document.getElementById("check-eye");
let showEye = document.getElementById("eye-icon")

// show password icon change code
if (password) {
    password.addEventListener("input", function () {
        if (password.value) {
            showEye.style.display = "inline-block";
        } else {
            showEye.style.display = "none";
        }
    });
}

// code for show password action
if (toggleEye) {
    toggleEye.addEventListener("change", function () {
        if (toggleEye.checked) {
            password.type = "text";
        } else {
            password.type = "password";
        }
    });
}


// dashboard nav bar-------------------

// navbar open/close
document.addEventListener("DOMContentLoaded", function () {
    const navButton = document.getElementById("navbtn");
    const toggleNav = document.getElementById("toggle-nav");
    const dashboardBody = document.querySelector(".dashboard-body");
    const navOverlay = document.querySelector(".nav-overlay");

    navButton.addEventListener("click", function () {
        toggleNav.classList.toggle("hide-nav");
        dashboardBody.classList.toggle("expand-body");
        navOverlay.style.display = "block";
        console.log("testing");

    });

    navOverlay.addEventListener("click", function () {
        toggleNav.classList.add("hide-nav");
        dashboardBody.classList.remove("expand-body");
        navOverlay.style.display = "none";
    });
});


// menu activ deactive
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', function () {
        menuItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

const menuFilter = document.querySelectorAll('.menu-filt');

menuFilter.forEach(item => {
    item.addEventListener('click', function () {
        menuFilter.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

// mobile seachbar
let mobileSeachBar = document.querySelector(".search-section");
let btnDs = document.querySelectorAll(".display-search");

btnDs.forEach((disSer) => {
    disSer.addEventListener("click", function () {
        mobileSeachBar.classList.toggle("hide");
    });
});
