document.addEventListener("DOMContentLoaded", () => {
    // existing music-player code...

    function setGridBackground() {
        document.body.style.backgroundImage = "url('https://i.imgur.com/FwJDQnz.png')";
        document.body.style.backgroundRepeat = "repeat";
        document.body.style.backgroundSize = "32px 32px";
        document.body.style.backgroundColor = "cyan";
    }

    setGridBackground(); // call it once the DOM is ready
});
