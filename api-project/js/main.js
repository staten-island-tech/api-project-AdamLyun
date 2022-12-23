import "../styles/style.css";
const URL = "https://bible-api.com/john`+4:3";
const named = document.getElementById("name");

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
document.getElementById("api-response").textContent =data.reference ;
document.getElementById("api-response2").textContent =data.text ;
console.log(named.value)
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
