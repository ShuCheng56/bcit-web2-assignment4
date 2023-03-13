const navBtn = document.querySelector("#nav-btn");
const navList = document.querySelector("#nav-list")

navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("active");
    navList.classList.toggle("active");
});

