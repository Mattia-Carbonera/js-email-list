// ottengo i nodi
const mailContainerEl = document.getElementById("mail-container");
const buttonGeneraEl = document.getElementById("button-genera");
console.log(buttonGeneraEl);

const mailGenerator = () => {
  fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((Response) => Response.json())
    .then((data) => {
      // stampo le mail nell'HTML
      mailContainerEl.innerHTML += `<li>${data.response}</li>`;
    });
};

// genero le mail
for (let i = 0; i < 10; i++) {
  mailGenerator();
}

// aggiungo mail attraverso un button
buttonGeneraEl.addEventListener("click", (event) => {
  mailGenerator();
});
