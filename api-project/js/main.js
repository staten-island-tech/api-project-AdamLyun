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
        <button class="f" >
        <img  src="${element.image}" alt="E"></button>
<div class="popup" id="popup">
<p    >${element.title}</p>
<p>${element.description}</p>
<h3>Published In ${element.year_published}</h3>
<button type="button" >Ok</button>
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
  let popup = document.querySelectorAll("button");
  console.log(popup);
  popup.forEach((button) => {
    console.log(button);
    button.addEventListener("click", function () {
      console.log("ADam is poop");
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

async function yes() {
  await getDatas(URL);

  openPopup();
}
yes();
