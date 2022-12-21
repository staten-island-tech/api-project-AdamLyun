import "../styles/style.css";
const URL = "https: //api.quotable.io/random";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
document.getElementById("api-response").textContent =data;
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
