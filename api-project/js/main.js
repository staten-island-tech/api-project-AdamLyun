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
        <button id="f" >
        <img  src="${element.image}" alt="E"></button>
<div class="hide" id="popup">
<h1>${element.title}</h1>
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
  let popup = document.querySelectorAll("#f");
  popup.forEach((element) => {
    element.addEventListener("click", function () {
      let aboutbook = document.querySelectorAll(".hide");
      console.log(aboutbook);
      aboutbook.forEach(book => {
        book.classList.add("open-popup");
      });
      
      
    });
  });
}

function closePopup() {
  let popup2 = document.getElementById("popup");
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}

async function yes() {
  await getDatas(URL);
  openPopup();
  closePopup();
}
yes();
