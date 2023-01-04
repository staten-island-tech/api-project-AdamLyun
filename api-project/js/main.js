import "../styles/style.css";
import { DOMSelectors } from "./dom";

DOMSelectors.button.addEventListener("click", function () {
  const book = document.getElementById("Name").value;
  const chapter = document.getElementById("Chapter").value;
  const verse = document.getElementById("Verse").value;
  const URL = `https://bible-api.com/${book}+${chapter}:${verse}`;
  getData(URL);
  console.log(URL);
});

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    document.getElementById("api-response").textContent = data.reference;
    document.getElementById("api-response2").textContent = data.text;
  } catch (error) {
    console.log(error);
  }
}

DOMSelectors.button2.addEventListener("click", function () {
  const addVerse = function () {
    const verse = document.getElementById("Verse").value;
    this.verse++;
  };
});

const monkey = {
  firstName: "monkey",
  lastName: "Monkeyson",
  bananaCount: 25,
  alive: true,
  addBanana: function () {
    //method
    console.log(this);
    this.bananaCount++; //adds 1 banana to banana count
  },
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
monkey.addBanana();
monkey.addBanana();
console.log(monkey.getFullName());
