import "../styles/style.css";
import { DOMSelectors } from "./dom";

const URL = "https://seussology.info/api/books";

async function getDatas(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    data.forEach((element) => {
      DOMSelectors.box.insertAdjacentHTML(
        "beforeend",
        `<div class="output">
        <button type="submit" onclick="openPopup()">
        <img src="${element.image}" alt="E"></button>
<div class="popup" id="popup">
<h1>${element.title}</h1>
<h2>${element.description}</h2>
<h3>Published In ${element.year_published}</h3>
<button type="button" onclick="closePopup()">Ok</button>
</div>
        </div>
        
        `
      );
    });
    console.log();
  } catch (error) {
    console.log(error);
  }
}

function openPopup() {
  let popup = document.querySelectorAll("popup");
  popup.forEach((button) => {
    button.addEventListener("click", function () {
      popup.classList.add("open-popup");
    });
  });
}

function closePopup() {
  let popup = document.querySelectorAll("popup");
  popup.forEach((button) => {
    button.addEventListener("click", function () {
      popup.classList.remove("open-popup");
    });
  });
}

function yes() {
  getDatas(URL);
  openPopup();
  closePopup();
}
yes();
