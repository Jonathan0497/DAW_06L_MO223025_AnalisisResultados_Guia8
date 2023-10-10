document.getElementById("player").addEventListener("play", function() {
    updateSongInfo("Closer", "Chainsmokers");
});

function updateSongInfo(title, artist) {
    const scrollingText = document.getElementById("scrollingText");
    scrollingText.textContent = `${title} - ${artist}`;
}

const player = document.getElementById("player");

function playAudio() {
    player.play();
}

function pauseAudio() {
    player.pause();
}

function restartAudio() {
    player.pause();
    player.currentTime = 0; 
}