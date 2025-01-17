let audio = new Audio('sound.mp3');
let isPlaying = false;

document.getElementById('playButton').addEventListener('click', () => {
    if (isPlaying) {
        audio.pause(); // Stop the sound
        audio.currentTime = 0; // Reset to start
        isPlaying = false; // Update state
        document.getElementById('playButton').innerText = 'Play Sound'; // Change button text
    } else {
        audio.play(); // Play the sound
        isPlaying = true; // Update state
        document.getElementById('playButton').innerText = 'Stop Sound'; // Change button text
    }
});

// Register the service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js').then((registration) => {
            console.log('ServiceWorker registered with scope:', registration.scope);
        }).catch((error) => {
            console.error('ServiceWorker registration failed:', error);
        });
    });
}
