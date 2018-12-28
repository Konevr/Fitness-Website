console.log("hello");
/*
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
*/

const menuToggle = document.getElementById("menu-toggle");
const menuNav = document.getElementById("menu-nav");

const toggleMenu = () => {
  console.log("called toggleMenu")
  menuNav.classList.toggle("menu-toggle");
}

menuToggle.addEventListener("click", toggleMenu);