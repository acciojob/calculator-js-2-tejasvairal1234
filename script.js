const displayBox = document.getElementById("display");

let expression = "";

function updateDisplay() {
  displayBox.textContent = expression;
}

const values = {
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
  "plus": "+",
  "-": "-",
  "divi": "/",
  "multi": "*",
  "dot": ".",
  "op": "(",
  "cl": ")"
};

Object.keys(values).forEach((id) => {
  const btn = document.getElementById(id);

  if (btn) {
    btn.addEventListener("click", () => {
      expression += values[id];
      updateDisplay();
    });
  }
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
    if (
      expression === "" ||
      /[+\-*/.]$/.test(expression)
    ) {
      throw new Error();
    }

    const result = eval(expression);

    if (
      result === Infinity ||
      result === -Infinity ||
      Number.isNaN(result)
    ) {
      throw new Error();
    }

    expression = String(result);
    displayBox.textContent = expression;
  } catch (e) {
    expression = "";
    displayBox.textContent = "Error";
  }
});