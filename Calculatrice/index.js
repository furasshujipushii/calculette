const buttons = document.querySelectorAll(".btn");
const input = document.getElementById("result");
const reset = document.getElementById("reset");
const equal = document.getElementById("equal");
reset.addEventListener("click", () => {
  input.textContent = "";
});
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    input.textContent += `${button.textContent}`;
  });
});
equal.addEventListener("click", () => {
  input.textContent = eval(input.textContent).toFixed(2);
});
