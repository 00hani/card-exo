export const conter = () => {
  const plus = document.querySelector("#plus");
  const minus = document.querySelector("#moin");
  const number = document.querySelector("p");
  let count = 0;
  plus.addEventListener("click", () => {
    count++;
    number.textContent = count;
  });
  minus.addEventListener("click", () => {
    count--;
    number.textContent = count;
  });
};
