console.log("hello");

//menu
const menuToggle = document.getElementById("menu-toggle");
const menuNav = document.getElementById("menu-nav");

const toggleMenu = () => {
  console.log("called toggleMenu")
  menuNav.classList.toggle("menu-toggle");
}

menuToggle.addEventListener("click", toggleMenu);

//Diet Page BMI calculator
function bmi () {
  let height = Number(document.getElementById("height").value);
  let weight = Number(document.getElementById("weight").value);
  let result = weight / (height * height);
  document.getElementById("result").innerHTML = "Your bmi score is : " + result;
  }