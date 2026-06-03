//your JS code here. If required.
const input = document.getElementById("input");
const btn = document.querySelectorAll(".btn");
const button = document.getElementById("button");
const clear = document.getElementById("clear");
const back = document.getElementById("back");
const solution = document.getElementById("final");
let exprestion = "";

btn.forEach((v) =>
{
  v.addEventListener("click", (e) =>
  {
    exprestion += e.target.innerText;
    input.value = exprestion;
  });
});

clear.addEventListener("click", () =>
{
  exprestion = "";
  input.value=exprestion;
});

back.addEventListener("click", () =>
{
  exprestion = exprestion.slice(0,exprestion.length - 1);
  input.value = exprestion;
});

solution.addEventListener("click", () =>
{
  exprestion = eval(exprestion);
  input.value=exprestion;
});