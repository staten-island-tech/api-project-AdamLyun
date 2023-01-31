import { DOMSelectors } from "./dom";

const URL = "https://seussology.info/api/books";

let test = [];
let mood = [];

async function getDatas(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    data.forEach((element) => {
      let id = Math.random();
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



function openPopup() {
  let popup = document.getElementById(test[0]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[0]);
    popup2.classList.add("open-popup");
  });
}

function openPopup1() {
  let popup = document.getElementById(test[1]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[1]);
    popup2.classList.add("open-popup");
  });
}
function openPopup2() {
  let popup = document.getElementById(test[2]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[2]);
    popup2.classList.add("open-popup");
  });
}
function openPopup3() {
  let popup = document.getElementById(test[3]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[3]);
    popup2.classList.add("open-popup");
  });
}
function openPopup4() {
  let popup = document.getElementById(test[4]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[4]);
    popup2.classList.add("open-popup");
  });
}
function openPopup5() {
  let popup = document.getElementById(test[5]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[5]);
    popup2.classList.add("open-popup");
  });
}
function openPopup6() {
  let popup = document.getElementById(test[6]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[6]);
    popup2.classList.add("open-popup");
  });
}
function openPopup7() {
  let popup = document.getElementById(test[7]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[7]);
    popup2.classList.add("open-popup");
  });
}
function openPopup8() {
  let popup = document.getElementById(test[8]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[8]);
    popup2.classList.add("open-popup");
  });
}
function openPopup9() {
  let popup = document.getElementById(test[9]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[9]);
    popup2.classList.add("open-popup");
  });
}
function openPopup10() {
  let popup = document.getElementById(test[10]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[10]);
    popup2.classList.add("open-popup");
  });
}
function openPopup11() {
  let popup = document.getElementById(test[11]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[11]);
    popup2.classList.add("open-popup");
  });
}
function openPopup12() {
  let popup = document.getElementById(test[12]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[12]);
    popup2.classList.add("open-popup");
  });
}
function openPopup13() {
  let popup = document.getElementById(test[13]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[13]);
    popup2.classList.add("open-popup");
  });
}
function openPopup14() {
  let popup = document.getElementById(test[14]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[14]);
    popup2.classList.add("open-popup");
  });
}
function openPopup15() {
  let popup = document.getElementById(test[15]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[15]);
    popup2.classList.add("open-popup");
  });
}
function openPopup16() {
  let popup = document.getElementById(test[16]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[16]);
    popup2.classList.add("open-popup");
  });
}
function openPopup17() {
  let popup = document.getElementById(test[17]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[17]);
    popup2.classList.add("open-popup");
  });
}
function openPopup18() {
  let popup = document.getElementById(test[18]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[18]);
    popup2.classList.add("open-popup");
  });
}
function openPopup19() {
  let popup = document.getElementById(test[19]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[19]);
    popup2.classList.add("open-popup");
  });
}
function openPopup20() {
  let popup = document.getElementById(test[20]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[20]);
    popup2.classList.add("open-popup");
  });
}
function openPopup21() {
  let popup = document.getElementById(test[21]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[21]);
    popup2.classList.add("open-popup");
  });
}
function openPopup22() {
  let popup = document.getElementById(test[22]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[22]);
    popup2.classList.add("open-popup");
  });
}
function openPopup23() {
  let popup = document.getElementById(test[23]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[23]);
    popup2.classList.add("open-popup");
  });
}
function openPopup24() {
  let popup = document.getElementById(test[24]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[24]);
    popup2.classList.add("open-popup");
  });
}
function openPopup25() {
  let popup = document.getElementById(test[25]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[25]);
    popup2.classList.add("open-popup");
  });
}
function openPopup26() {
  let popup = document.getElementById(test[26]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[26]);
    popup2.classList.add("open-popup");
  });
}
function openPopup27() {
  let popup = document.getElementById(test[27]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[27]);
    popup2.classList.add("open-popup");
  });
}
function openPopup28() {
  let popup = document.getElementById(test[28]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[28]);
    popup2.classList.add("open-popup");
  });
}
function openPopup29() {
  let popup = document.getElementById(test[29]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[29]);
    popup2.classList.add("open-popup");
  });
}
function openPopup30() {
  let popup = document.getElementById(test[30]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[30]);
    popup2.classList.add("open-popup");
  });
}
function openPopup31() {
  let popup = document.getElementById(test[31]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[31]);
    popup2.classList.add("open-popup");
  });
}
function openPopup32() {
  let popup = document.getElementById(test[32]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[32]);
    popup2.classList.add("open-popup");
  });
}
function openPopup33() {
  let popup = document.getElementById(test[33]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[33]);
    popup2.classList.add("open-popup");
  });
}
function openPopup34() {
  let popup = document.getElementById(test[34]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[34]);
    popup2.classList.add("open-popup");
  });
}
function openPopup35() {
  let popup = document.getElementById(test[35]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[353]);
    popup2.classList.add("open-popup");
  });
}
function openPopup36() {
  let popup = document.getElementById(test[36]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[36]);
    popup2.classList.add("open-popup");
  });
}
function openPopup37() {
  let popup = document.getElementById(test[37]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[37]);
    popup2.classList.add("open-popup");
  });
}
function openPopup40() {
  let popup = document.getElementById(test[40]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[40]);
    popup2.classList.add("open-popup");
  });
}
function openPopup38() {
  let popup = document.getElementById(test[38]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[38]);
    popup2.classList.add("open-popup");
  });
}
function openPopup39() {
  let popup = document.getElementById(test[39]);
  popup.addEventListener("click", function () {
    let popup2 = document.getElementById(mood[39]);
    popup2.classList.add("open-popup");
  });
}

function closePopup() {
  let popup2 = document.getElementById(mood[0]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup1() {
  let popup2 = document.getElementById(mood[1]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup2() {
  let popup2 = document.getElementById(mood[2]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup3() {
  let popup2 = document.getElementById(mood[3]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup4() {
  let popup2 = document.getElementById(mood[4]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup5() {
  let popup2 = document.getElementById(mood[5]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup6() {
  let popup2 = document.getElementById(mood[6]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup7() {
  let popup2 = document.getElementById(mood[7]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup8() {
  let popup2 = document.getElementById(mood[8]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup9() {
  let popup2 = document.getElementById(mood[9]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup10() {
  let popup2 = document.getElementById(mood[10]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup11() {
  let popup2 = document.getElementById(mood[11]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup12() {
  let popup2 = document.getElementById(mood[12]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup13() {
  let popup2 = document.getElementById(mood[13]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup14() {
  let popup2 = document.getElementById(mood[14]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup15() {
  let popup2 = document.getElementById(mood[15]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup16() {
  let popup2 = document.getElementById(mood[16]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup17() {
  let popup2 = document.getElementById(mood[17]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup18() {
  let popup2 = document.getElementById(mood[18]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup19() {
  let popup2 = document.getElementById(mood[19]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup20() {
  let popup2 = document.getElementById(mood[20]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup21() {
  let popup2 = document.getElementById(mood[21]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup22() {
  let popup2 = document.getElementById(mood[22]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup23() {
  let popup2 = document.getElementById(mood[23]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup24() {
  let popup2 = document.getElementById(mood[24]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup25() {
  let popup2 = document.getElementById(mood[25]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup26() {
  let popup2 = document.getElementById(mood[26]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup27() {
  let popup2 = document.getElementById(mood[27]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup28() {
  let popup2 = document.getElementById(mood[28]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup29() {
  let popup2 = document.getElementById(mood[29]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup30() {
  let popup2 = document.getElementById(mood[30]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup31() {
  let popup2 = document.getElementById(mood[31]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup32() {
  let popup2 = document.getElementById(mood[32]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup33() {
  let popup2 = document.getElementById(mood[33]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup34() {
  let popup2 = document.getElementById(mood[34]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup35() {
  let popup2 = document.getElementById(mood[35]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup36() {
  let popup2 = document.getElementById(mood[36]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup37() {
  let popup2 = document.getElementById(mood[37]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup38() {
  let popup2 = document.getElementById(mood[38]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup39() {
  let popup2 = document.getElementById(mood[39]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}
function closePopup40() {
  let popup2 = document.getElementById(mood[40]);
  popup2.addEventListener("click", function () {
    popup2.classList.remove("open-popup");
  });
}

async function yes() {
  await getDatas(URL);
  openPopup();
  openPopup1();
  openPopup2();
  openPopup3();
  openPopup4();
  openPopup5();
  openPopup6();
  openPopup7();
  openPopup8();
  openPopup9();
  openPopup10();
  openPopup11();
  openPopup12();
  openPopup13();
  openPopup14();
  openPopup15();
  openPopup16();
  openPopup17();
  openPopup18();
  openPopup19();
  openPopup20();
  openPopup21();
  openPopup22();
  openPopup23();
  openPopup24();
  openPopup25();
  openPopup26();
  openPopup27();
  openPopup28();
  openPopup29();
  openPopup30();
  openPopup31();
  openPopup32();
  openPopup33();
  openPopup34();
  openPopup35();
  openPopup36();
  openPopup37();
  openPopup38();
  openPopup39();
  openPopup40();
  closePopup();
  closePopup1();
  closePopup2();
  closePopup3();
  closePopup4();
  closePopup5();
  closePopup6();
  closePopup7();
  closePopup8();
  closePopup9();
  closePopup10();
  closePopup11();
  closePopup12();
  closePopup13();
  closePopup14();
  closePopup15();
  closePopup16();
  closePopup17();
  closePopup18();
  closePopup19();
  closePopup20();
  closePopup21();
  closePopup22();
  closePopup23();
  closePopup24();
  closePopup25();
  closePopup26();
  closePopup27();
  closePopup28();
  closePopup29();
  closePopup30();
  closePopup31();
  closePopup32();
  closePopup33();
  closePopup34();
  closePopup35();
  closePopup36();
  closePopup37();
  closePopup38();
  closePopup39();
  closePopup40();
}
yes();
