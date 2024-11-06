// ottengo i nodi
const mailContainerEl = document.getElementById("mail-container");

// genero le mail
for (let i = 0; i < 10; i++) {
  fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((Response) => Response.json())
    .then((data) => {
      // stampo le mail nell'HTML
      mailContainerEl.innerHTML += `<li>${data.response}</li>`;
    });
}
