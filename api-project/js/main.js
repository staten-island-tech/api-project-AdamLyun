import { DOMSelectors } from "./dom";

const URL = "https://seussology.info/api/books";

async function getDatas(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    data.forEach((element) => {
      DOMSelectors.box.insertAdjacentHTML(
        "beforeend",
        `
        <div class="output">
        <button class="yes" >
        <img  src="${element.image}" alt="${Math.random()}"></button>
<div class="hide"  id="close">
<h2>${element.title}</h2>
<h3>Published In ${element.year_published}</h3>
<p>${element.description}</p> 
<button type="button">Ok</button>
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
  let btn = document.querySelectorAll(".yes");
  btn.forEach(function (currentBtn) {
    currentBtn.addEventListener("click", function () {
      currentBtn
        .closest(".output")
        .querySelector(".hide")
        .classList.add("open-popup");
    });
  });
}

function closePopup() {
  let popup2 = document.querySelectorAll("#close");
  popup2.forEach((element) => {
    element.addEventListener("click", function () {
      element.classList.remove("open-popup");
    });
  });
}

async function yes() {
  await getDatas(URL);
  openPopup();
  closePopup();
}
yes();
