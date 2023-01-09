import "../styles/style.css";
import { DOMSelectors } from "./dom";

const URL = "https://seussology.info/api/books";

function readQuote() {
  let input = document.querySelectorAll(".output");
  input.forEach((showQuote) => {
    showQuote.addEventListener("click", function () {
      filter((wat) => wat.type.includes(input.id));
      console.log("hi");
    });
  });
}

async function getDatas(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    data.forEach((element) => {
      DOMSelectors.box.insertAdjacentHTML(
        "beforeend",
        `<div class="output">
        <button>
        <img src="${element.image}" alt="E"></button>
        </div>`,
        console.log(element.id)
      );
    });
    readQuote();
  } catch (error) {
    console.log(error);
  }
}

getDatas(URL);
