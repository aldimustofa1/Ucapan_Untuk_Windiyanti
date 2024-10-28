// Fungsi untuk menampilkan halaman sesuai tombol yang diklik
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// Memainkan musik saat tombol "Play Music" diklik
const playMusicButton = document.getElementById('playMusic');
const audio = new Audio('assets/background.mp3');  // Arahkan ke lokasi file musik

playMusicButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playMusicButton.textContent = 'Pause Music ⏸️';
    } else {
        audio.pause();
        playMusicButton.textContent = 'Play Music 🎵';
    }
});