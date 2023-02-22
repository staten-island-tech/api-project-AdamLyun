import { DOMSelectors } from "./dom";

const URL = "https://seussology.info/api/books";


async function getDatas(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    let count = 0;
    let number = 0;
    data.forEach((element) => {
      

      DOMSelectors.box.insertAdjacentHTML(
        "beforeend",
        `
        <div class="output">
        <button class="hvr-grow yes ${number++}" onClick="">
        <img  src="${element.image}" alt="E"></button>


<div class="hide" id="english${count++}">
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
  let btn = document.querySelectorAll(".yes");
  btn.forEach(function (currentBtn) {
    currentBtn.addEventListener("click", function () {
     
       
        let something = document.getElementById("english5" )
        something.classList.add("open-popup")
      
      });
    });
  };


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
