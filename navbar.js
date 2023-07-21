const navBtn = document.querySelector("#nav-btn");
const navbar = document.querySelector("#navbar");
const navclose = document.querySelector("#nav-close");

navBtn.addEventListener("click", () => {
    navbar.classList.add("showNav")
});
navclose.addEventListener("click", () => {
    navbar.classList.remove("showNav")
});



