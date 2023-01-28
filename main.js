const container = document.querySelector(".container");
const btnReveal = document.querySelector(".btn-reveal");

const renderRiddle = function (data, className) {
  const html = `<h1 class="riddle">${data.riddle}</h1>
    <p class="answer ${className}"> 👍${data.answer}</p>
    `;
  container.insertAdjacentHTML("beforeend", html);
};
const riddle = fetch("https://riddles-api.vercel.app/random");
riddle
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    renderRiddle(data, "hide-it");
  })
  .finally(() => {
    const answer = document.querySelector(".answer");
    btnReveal.addEventListener("click", function () {
      answer.classList.toggle("hide-it");
    });
  });
