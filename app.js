const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

function calcul(a, b) {
  return a + b;
}

app.get("/", (req, res) => {
  res.send("Application DevSecOps publiée sur Render ✅");
});

app.get("/calcul", (req, res) => {
  res.json({ resultat: calcul(1, 2) });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
  });
}

module.exports = calcul;
