const btn = document.querySelector(".btn");
const adviceString = document.querySelector(".advice");
const numberAdvice = document.querySelector(".numberAdvice");

function generateUrl() {
  let randomNumber = Math.floor(Math.random() * 201);
  const url = `https://api.adviceslip.com/advice/${randomNumber}`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return [data.slip.advice, data.slip.id];
    });
}

btn.addEventListener("click", () => {
  generateUrl().then((advice) => {
    adviceString.textContent = advice[0];
    numberAdvice.textContent = `#${advice[1]}`;
  });
});
