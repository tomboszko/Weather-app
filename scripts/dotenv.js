// dotenv.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('.env')
        .then((response) => response.text())
        .then((envText) => {
            const envLines = envText.split('\n');
            envLines.forEach((line) => {
                const [key, value] = line.split('=');
                if (key && value) {
                    process.env[key] = value;
                }
            });

            // Votre code JavaScript ici
            // Vous pouvez maintenant utiliser les variables d'environnement chargées
        });
});
