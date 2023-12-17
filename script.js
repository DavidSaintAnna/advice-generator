const $button = document.querySelector(".btn");
const $adviceString = document.querySelector(".advice");
const $numberAdvice = document.querySelector(".number-advice");

function generateUrl() {
  const randomNumber = Math.floor(Math.random() * 201);
  const url = `https://api.adviceslip.com/advice/${randomNumber}`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.slip;
    });
}

$button.addEventListener("click", () => {
  generateUrl().then((slip) => {
    $adviceString.textContent = slip.advice;
    $numberAdvice.textContent = `#${slip.id}`;
  });
});
