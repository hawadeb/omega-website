const overlay = document.getElementById('overlay');
const music = document.getElementById('bgMusic');

overlay.addEventListener('click', () => {
    overlay.classList.add('hidden');
    music.play();
});