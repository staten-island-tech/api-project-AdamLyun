import "../styles/style.css";
import { DOMSelectors } from "./dom";

const URL = "https://seussology.info/api/books"


function readQuote(){
  let input = document.querySelectorAll(".output");
  input.forEach((showQuote)=>{
    showQuote.addEventListener("click", function(){ 
      console.log("hi")}
    );
  });
};


async function getDatas(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    data.forEach(element => {
      DOMSelectors.box.insertAdjacentHTML(
        "beforeend",
        `<div class="output">
        <button onclick="readQuote()">
        <img src="${element.image}" alt="E"></button>
        </div>`
      );
    });
  
  } catch (error) {
    console.log(error);
  }
}


getDatas(URL);