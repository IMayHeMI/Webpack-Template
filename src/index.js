import "./styles.css";

const homeTab = document.getElementById("homeTab");
const menuTab = document.getElementById("menuTab");
const contactTab = document.getElementById("contactTab");
const content = document.getElementById("content");

import homePageLoad from "./homePage.js";
import menuPageLoad from "./menuPage.js";
import contactPageLoad from "./contactPage.js";

homePageLoad();

homeTab.addEventListener("click", () => {
    content.innerHTML = "";
    homePageLoad();
});
menuTab.addEventListener("click", () => {
    content.innerHTML = "";
    menuPageLoad();
});
contactTab.addEventListener("click", () => {
    content.innerHTML = "";
    contactPageLoad();
});