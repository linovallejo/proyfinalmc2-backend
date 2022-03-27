const globales = require("./globales");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const nuevoMazo = (req, res, next) => {
  let stack = {};
  let montones = {};
  let contenidoMazo = {};
  let barajado = false;

  let naipes = globales.NAIPES;

  const idMazo = new Date().getTime().toString(36);
  contenidoMazo = shuffle(naipes.slice(0, 21));
  barajado = true;
  let mazo = { id: idMazo, barajado, naipes: contenidoMazo };

  res.json({ mazo });
};

const dibujarMazo = (req, res, next) => {
  const idMazo = req.params.idmazo;
  let naipes = req.params.naipes;
  console.log(idMazo);
  console.log(naipes);

  naipes = naipes.split(",");
  console.log(naipes);

  let naipesCompletos = [];

  const host = "http://localhost";
  const port = process.env.PORT || 8080;
  const locationImagenes = `${host}:${port}/img/`;

  for (let i = 0; i < naipes.length; i++) {
    srcImagen = `${locationImagenes}${naipes[i]}.png`;
    naipesCompletos.push({ codigo: naipes[i], imagen: srcImagen });
  }

  res.json({ id: idMazo, naipes: naipesCompletos });
};

module.exports = { nuevoMazo, dibujarMazo };
