import "../styles/style.css";
import { DOMSelectors } from "./dom";

DOMSelectors.button.addEventListener("click", function () {
  const book = document.getElementById("Name").value;
  const chapter = document.getElementById("Chapter").value;
  const verse = parseInt(document.getElementById("Verse").value);
  const URL = `https://bible-api.com/${book}+${chapter}:${verse}`;
  getData(URL);
  bob();

  console.log(URL);
});

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="output">
      <h3>${data.reference}</h3>
       <h3>${data.text}</h3>
       <button class="btn2">Add</button> 
      </div>`
    );
  } catch (error) {
    console.log(error);
  }
}
async function getDatas(URL2) {
  try {
    const response = await fetch(URL2);
    const data = await response.json();
    document.getElementById("api-response").textContent = data.reference;
    document.getElementById("api-response2").textContent = data.text;
  } catch (error) {
    console.log(error);
  }
}

function bob() {
  let button2 = document.querySelectorAll(".btn2");
  button2.forEach((goNext) => {
    goNext.addEventListener("click", () => {
      console.log("hi");
    });
  });
}
