import "/src/style.css";
import aboutUs from "/src/aboutUs.js";
import hero from "/src/hero.js";
import ourMenu from "/src/ourMenu.js";
import { allMenuItems, makeMenuList } from "/src/ourMenu.js";

const contentDiv = document.querySelector("#content");
const homeBtn = document.querySelector(".home");
const aboutUsBtn = document.querySelector(".about-us-btn");
const ourMenuBtn = document.querySelector(".our-menu-btn");

contentDiv.append(hero())

homeBtn.addEventListener("click", function () {
    contentDiv.innerHTML = "";
    contentDiv.append(hero());
});

aboutUsBtn.addEventListener('click', function () {
    contentDiv.innerHTML='';
    contentDiv.append(aboutUs())
});

ourMenuBtn.addEventListener('click', function () {
    contentDiv.innerHTML='';
    contentDiv.append(ourMenu())
});