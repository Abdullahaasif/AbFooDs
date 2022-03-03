const nav = document.querySelector(".nav")
    toggle = document.querySelector("#toggle")

toggle.addEventListener("click", () => {
    nav.classList.toggle("active")
    toggle.classList.toggle("lineLength")
})