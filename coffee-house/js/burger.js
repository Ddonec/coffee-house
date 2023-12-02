const burgerBtn = document.querySelector(".burger-button");
const burgerMenu = document.querySelector(".burger-menu");
const links = document.querySelectorAll(".burger-menu li a");

let burgerStatus = false;

burgerBtn.addEventListener("click", function () {});

burgerBtn.addEventListener("click", function () {
    toggleBurgerMenu();
});

links.forEach((link) => {
    link.addEventListener("click", function () {
        closeBurgerMenu();
    });
});

function toggleBurgerMenu() {
    if (!burgerStatus) {
        burgerBtn.classList.add("burger-button-active");
        burgerMenu.style.transform = "translateX(-16px)";
    } else {
        burgerBtn.classList.remove("burger-button-active");
        burgerMenu.style.transform = "translateX(100vw)";
    }

    burgerStatus = !burgerStatus;
}

function closeBurgerMenu() {
    burgerBtn.classList.remove("burger-button-active");
    burgerMenu.style.transform = "translateX(100vw)";
    burgerStatus = false;
}
