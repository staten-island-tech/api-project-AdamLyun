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
        <script>let popup= document.getElementById("popup")
        function openPopup(){
          popup.classList.add("open-popup")
        }
        function closePopup(){
          popup.classList.remove("open-popup")
        }</script>
        `
        ,
       
      );
     
      
    });
  } catch (error) {
    console.log(error);
  }
}

getDatas(URL);


