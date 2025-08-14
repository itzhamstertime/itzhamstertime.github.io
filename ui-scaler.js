function scaleUI() {
    const scale = Math.min(window.innerWidth / 1200, 1); // don’t scale above original size
    const buttons = document.querySelectorAll('#music-player button, .retro-btn, .button');

    buttons.forEach(btn => {
        btn.style.transform = `scale(${scale})`;
        btn.style.transformOrigin = 'top right'; // keeps music player in corner
    });
}

// scale on load and on window resize
window.addEventListener('load', scaleUI);
window.addEventListener('resize', scaleUI);
