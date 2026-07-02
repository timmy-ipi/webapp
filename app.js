const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
app.disable('x-powered-by');

function calcul(a, b) {
  return a + b;
}

app.get('/', (req, res) => {
  res.send(
    'Hello DevOps - webapp sur Kubernetes ! 2 + 3 = ' + calcul(2, 3)
  );
});

// Sonde utilisée par Kubernetes : readiness / liveness
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// On ne démarre le serveur que si le fichier est lancé directement.
// Cela évite de bloquer les tests Jest qui importent le module.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log('Serveur démarré sur le port ' + PORT);
  });
}

module.exports = { calcul, app };
