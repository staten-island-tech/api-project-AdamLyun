import { DOMSelectors } from "./dom";

const URL = "https://seussology.info/api/books";

let test = [];
let mood = [];

async function getDatas(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    data.forEach((element) => {
      let id = Math.random() * 100;
      test.push(id);
      let popup = Math.random();
      mood.push(popup);

      DOMSelectors.box.insertAdjacentHTML(
        "beforeend",
        `
        <div class="output">
        <button class="hvr-grow yes" >
        <img  src="${element.image}" alt="E"></button>
<div class="hide" id="english">
<h2>${element.title}</h2>
<h3>Published In ${element.year_published}</h3>
<p>${element.description}</p> 
<button type="button" >Ok</button>
</div>
        </div>
`
      );
    });
  } catch (error) {
    console.log(error);
  }
}

function openPopup() {
  let popup = document.querySelectorAll(".yes");
  popup.forEach(function (currentBtn) {
    currentBtn.addEventListener("click", function () {
      let spanish = document.querySelectorAll("english");
      spanish.forEach((element) => {
        element.classList.add("open-popup");
      });
    });
  });
}

// function closePopup() {
//   let popup2 = document.getElementById(mood[0]);
//   popup2.addEventListener("click", function () {
//     popup2.classList.remove("open-popup");
//   });
// }

async function yes() {
  await getDatas(URL);
  openPopup();

  // closePopup();
}
yes();
