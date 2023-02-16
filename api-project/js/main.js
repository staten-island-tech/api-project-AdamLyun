import { DOMSelectors } from "./dom";

const URL = "https://seussology.info/api/books";

let test = [];
let mood = [];

async function getDatas(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    data.forEach((element) => {
      let id = Math.random() *100;
      test.push(id);
      let popup = Math.random();
      mood.push(popup);

      DOMSelectors.box.insertAdjacentHTML(
        "beforeend",
        `
        <div class="output">
        <button class="hvr-grow" id="${id}" >
        <img  src="${element.image}" alt="E"></button>
<div class="hide" id="${popup}">
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

let i= test.find(element=> element <100)
console.log(i)
console.log(test)
function openPopup() {
  let popup = document.getElementById(test[i]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[i]);
    popup2.classList.add("open-popup");
  });
}

function closePopup() {
  let popup2 = document.getElementById(mood[0]);
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
