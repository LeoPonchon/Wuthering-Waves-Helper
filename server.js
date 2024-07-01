const express = require('express');
const path = require('path');
const app = express();

// Définir le dossier public pour les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Définir EJS comme moteur de template
app.set('views', path.join(__dirname, 'public', 'views'));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Accueil' });
});

app.get('/personnages', (req, res) => {
    res.render('personnages', { title: 'Personnages' });
});

app.get('/tierlist', (req, res) => {
    res.render('tierlist', { title: 'Tier List' });
});

app.get('/armes', (req, res) => {
    res.render('armes', { title: 'Armes' });
});

// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
