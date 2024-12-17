function expressFeeling(feeling) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `Hari ini kamu merasa: ${feeling}`;
}

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log('Service Worker terdaftar dengan sukses:', registration);
            })
            .catch(error => {
                console.log('Pendaftaran Service Worker gagal:', error);
            });
    });
}
