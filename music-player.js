// list of wav files in your GitHub Pages repo folder
const songs = [
    "background.mp3",
    "backgound.mp3",
    "backround.mp3"
];
const names = ["basement symphony", "the story of a hamster eating kebab", "explosion hamster"];
let currentIndex = 0;
let isPlaying = false;
let shuffleMode = false;

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio-player");
    const playPauseBtn = document.getElementById("play-pause");
    const trackTitle = document.getElementById("track-title");

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

    document.getElementById("shuffle").onclick = () => {
        shuffleMode = !shuffleMode;
        alert("Shuffle: " + (shuffleMode ? "On" : "Off"));
    };

    audio.onended = nextSong;

    // load first song on page load
    loadSong(currentIndex);
});
