const input = document.querySelector(".text-input");
const output = document.querySelector(".text");

document.addEventListener("DOMContentLoaded", updateText);

function updateText() {
  output.replaceChildren();
  let text = input.value;

  if (!text) {
    return;
  }

  text = text.split("");

  for (let char of text) {
    const span = document.createElement("span");

    if (char !== " ") {
      span.innerText = char;
    } else {
      span.innerText = " ";
      span.setAttribute("class", "text-space");
    }

    output.appendChild(span);
  }
}

input.addEventListener("keyup", updateText);