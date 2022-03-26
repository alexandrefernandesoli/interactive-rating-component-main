const options = document.getElementsByClassName("option");

console.log(options);

let active = null;
let activeValue = null;

for (const element of options) {
  element.addEventListener("click", (event) => {
    if (!active) {
      active = event.target;
      event.target.classList.add("active");
      activeValue = event.target.getAttribute("data-value");
      return;
    }

    active.classList.remove("active");
    event.target.classList.add("active");
    activeValue = event.target.getAttribute("data-value");
    active = event.target;
  });
}

const button = document.getElementById("submit-button");
const thanksContainer = document.getElementById("thanks-container");
const ratingContainer = document.getElementById("rating-container");
const ratingDisplay = document.getElementById("rating-display");

button.addEventListener("click", (event) => {
  if (activeValue !== null) {
    thanksContainer.style.display = "block";
    ratingContainer.style.display = "none";
    ratingDisplay.innerText = `You selected ${activeValue} out of 5`;
  }
});
