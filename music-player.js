const songs = [
    "backround.mp3",
    "backgound.mp3",
    "background.mp3"
];
const names = ["explosion hamster", "hamster eating kebab", "basement symphony"];
let currentIndex = 0;
let isPlaying = false;

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio-player");
    const playPauseBtn = document.getElementById("play-pause");
    const trackTitle = document.getElementById("track-title");

    audio.loop = true; // loop current song

    // single loadSong function
    function loadSong(index) {
        currentIndex = index;
        audio.src = songs[index];
        trackTitle.textContent = names[index];
        audio.play().catch(() => {}); // autoplay might be blocked
        isPlaying = true;
        playPauseBtn.textContent = "⏸";
    }

    // button functions
    function nextSong() {
        currentIndex = (currentIndex + 1) % songs.length;
        loadSong(currentIndex);
    }

    function prevSong() {
        currentIndex = (currentIndex - 1 + songs.length) % songs.length;
        loadSong(currentIndex);
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

    // attach button handlers
    document.getElementById("next").onclick = nextSong;
    document.getElementById("prev").onclick = prevSong;
    playPauseBtn.onclick = playPause;

    // load first song on page load
    loadSong(currentIndex);
});
