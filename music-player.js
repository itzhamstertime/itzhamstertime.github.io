// list of wav files in your GitHub Pages repo folder
const songs = [
    "background.mp3",
    "backgound.mp3",
    "backround.mp3"
];
const names = ["basement symphony", "hamster eating kebab", "explosion hamster"];
let currentIndex = 0;
let isPlaying = false;
let shuffleMode = false;

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio-player");
    const playPauseBtn = document.getElementById("play-pause");
    const trackTitle = document.getElementById("track-title");
    audio.loop = true;
    function loadSong(index) {
    currentIndex = index;
    trackTitle.textContent = songs[index]; // show immediately
    audio.src = songs[index];
    audio.play().catch(() => {});
}
}

    loadSong(currentIndex);
    function loadSong(index) {
        audio.src = songs[index];
        trackTitle.textContent = names[index];
        audio.play().catch(() => {
            // autoplay might be blocked by browser
        });
        isPlaying = true;
        playPauseBtn.textContent = "⏸";
    }

    function playPause() {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            playPauseBtn.textContent = "▶";
        } else {
            audio.play();
            isPlaying = true;
            playPauseBtn.textContent = "⏸";
        }
    }

    function nextSong() {
        if (shuffleMode) {
            currentIndex = Math.floor(Math.random() * songs.length);
        } else {
            currentIndex = (currentIndex + 1) % songs.length;
        }
        loadSong(currentIndex);
    }

    function prevSong() {
        if (shuffleMode) {
            currentIndex = Math.floor(Math.random() * songs.length);
        } else {
            currentIndex = (currentIndex - 1 + songs.length) % songs.length;
        }
        loadSong(currentIndex);
    }

    document.getElementById("next").onclick = nextSong;
    document.getElementById("prev").onclick = prevSong;
    playPauseBtn.onclick = playPause;
    };
    // load first song on page load
    loadSong(currentIndex);
});
