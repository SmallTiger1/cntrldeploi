const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques du dossier 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Route API /api/status qui retourne un message JSON
app.get('/api/status', (req, res) => {
    res.json({
        status: "OK",
        message: "L'application GreenFood fonctionne parfaitement !",
        timestamp: new Date()
    });
});

// Pour toutes les autres routes, renvoyer l'index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

module.exports = app; // Important pour le déploiement Vercel
