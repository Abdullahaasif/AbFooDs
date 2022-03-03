const nav = document.getElementById("nav");
const div = document.getElementById("menu");


div.addEventListener('click' , () => {
    nav.classList.toggle("target")
})
div.addEventListener('click' , () => {
    div.classList.toggle("target")
})
