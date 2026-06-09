document.getElementById('statusBtn').addEventListener('click', async () => {
    const resultDiv = document.getElementById('statusResult');
    try {
        const response = await fetch('/api/status');
        const data = await response.json();
        
        resultDiv.innerHTML = `Statut: <span style="color: green;">${data.status}</span><br>Message: ${data.message}`;
    } catch (error) {
        resultDiv.innerText = "Erreur lors de la récupération du statut.";
    }
});
