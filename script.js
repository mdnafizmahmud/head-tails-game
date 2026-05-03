const head = document.querySelector("#head");
const tail = document.querySelector("#tail");
const result = document.querySelector("#result");
const flipButton = document.querySelector("#flip-btn");

let headCount = +head.textContent;
let tailCount = +tail.textContent;

flipButton.addEventListener("click", (event) => {
  const resultEl = computerPlay();
  result.textContent = resultEl.toUpperCase();

  if (resultEl === "head") {
    headCount++;
    head.textContent = headCount;
  } else {
    tailCount++;
    tail.textContent = tailCount;
  }
});

function computerPlay() {
  const choices = ["head", "tail"];
  const randomChoices = Math.floor(Math.random() * choices.length);
  return choices[randomChoices];
}
