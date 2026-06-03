const display = document.getElementById("display");

let expression = "";

function updateDisplay() {
  display.textContent = expression;
}

const valueMap = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  plus: "+",
  "-": "-",
  divi: "/",
  multi: "*",
  dot: ".",
  op: "(",
  cl: ")"
};

Object.keys(valueMap).forEach((id) => {
  document.getElementById(id).addEventListener("click", () => {
    expression += valueMap[id];
    updateDisplay();
  });
});

document.getElementById("C").addEventListener("click", () => {
  expression = "";
  updateDisplay();
});

document.getElementById("back").addEventListener("click", () => {
  expression = expression.slice(0, -1);
  updateDisplay();
});

document.getElementById("equal").addEventListener("click", () => {
  try {
    if (expression.trim() === "") {
      display.textContent = "Error";
      expression = "";
      return;
    }

    const result = eval(expression);

    if (
      result === Infinity ||
      result === -Infinity ||
      Number.isNaN(result)
    ) {
      display.textContent = "Error";
      expression = "";
      return;
    }

    expression = result.toString();
    display.textContent = expression;
  } catch (e) {
    display.textContent = "Error";
    expression = "";
  }
});