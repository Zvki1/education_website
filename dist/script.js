const mobile_menu = document.getElementById("mobile-menu");
const button = document.getElementById("btn");

button.addEventListener('click', () => {
    mobile_menu.classList.toggle("hidden")

});
