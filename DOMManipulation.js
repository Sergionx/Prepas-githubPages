/**
 * @typedef {Object} Carta
 * @property {string} titulo - The title of the carta.
 * @property {string} descripcion - The description of the carta.
 * @property {string} seeMoreDescription - The description of the see more section.
 */

/**
 * @type {Carta[]}
 */

const cartas = [
  {
    titulo: "Coquette Dinámico",
    descripcion: "La mejor descripción de todas",
    seeMoreDescription: "La descripcion supeeeeeeeeeeeeer larga",
  },
  {
    titulo: "Coquette Dinámico 2",
    descripcion: "La mejor descripción de todas 2",
    seeMoreDescription: "La descripcion supeeeeeeeeeeeeer larga 2",
  },
  {
    titulo: "Coquette Dinámico 3",
    descripcion: "La mejor descripción de todas 3",
    seeMoreDescription: "La descripcion supeeeeeeeeeeeeer larga 3",
  },
  {
    titulo: "Coquette Dinámico 4",
    seeMoreDescription: "La descripcion supeeeeeeeeeeeeer larga 3",
  },
];

// 1 Conserguir el card-container
// 2 Agregarle un elemento hijo (article.card)
// 3  Usar los datos de la variable carta

const cardContainer = document.getElementById("card-container");

cartas.forEach((carta) => {
  cardContainer.innerHTML += crearCarta(carta);
});

const cards_HTML = document.getElementsByClassName("card");
agregar_eventListner();
prueba_logica();

/**
 * Creates a card HTML element based on the provided carta object.
 * @param {Carta} carta - The carta object containing the title and description.
 * @returns {string} - The HTML string representing the card element.
 */
function crearCarta(carta) {
  // El null o undefined se comportan como false
  // if (!carta.descripcion) {
  //   carta.descripcion = "No hay descripción";
  // }

  return `<article class="card" id="Coquette">
<img class="ribbon tilt-shaking" src="images/ribbon.png" />

<img
  class="bg-image"
  src="https://images.pexels.com/photos/5124871/pexels-photo-5124871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
/>

<main>
  <h1 class="title">${carta.titulo}</h1>
  <p class="description">${carta.descripcion || "No hay descripción"}</p>
</main>

<footer class="button-container">
  <button class="see-more">Ver más</button>
</footer>
</article>`;
}

function prueba_logica() {
  const valores_especiales = [null, undefined, 0, "", false];

  // La igualdad debil (==) solo toma en cuenta el valor.
  // (USAR ESTA PREFERIBLEMENTE) La igualdad fuerte (===) toma en cuenta el valor y el tipo de dato.
  if (0 == false){
    console.log("igualdad debil")
  }

  if (0 === false){
    console.log("igualdad fuerte")
  }

  // Los nullish coalescing (??) solo toman en cuenta null y undefined
  for (let index = 0; index < valores_especiales.length; index++) {
    const valor = valores_especiales[index];
    console.log(valor, {
      "??": valor ?? "No hay valor",
      "||": valor || "No hay valor",
    });
  }
}

function agregar_eventListner() {
  for (let index = 0; index < cartas.length; index++) {
    const card_HTML = cards_HTML[index];
    const card = cartas[index];

    const footer = card_HTML.querySelector("footer");
    const button = footer.querySelector("button");

    button.addEventListener("click", () => {
      alert(card.seeMoreDescription);
    });
  }
}
