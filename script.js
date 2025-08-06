const follower = document.getElementById('follower');
let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;
const speed = 0.1;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  currentX += (mouseX - currentX) * speed;
  currentY += (mouseY - currentY) * speed;
  follower.style.transform = `translate(${currentX}px, ${currentY}px)`;
  requestAnimationFrame(animate);
}

animate();
