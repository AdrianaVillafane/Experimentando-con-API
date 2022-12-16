const $container = document.getElementById("container");

const URL_API = "https://randomuser.me/api/";

const user = fetch(URL_API);

user
  .then((respuesta) => respuesta.json())
  .then((datosRecibidos) => {
    const user = datosRecibidos.results["0"];

    console.log(user);

    $container.innerHTML = `
      <img src="${user.picture.large}" alt=" " />
    `;
  });