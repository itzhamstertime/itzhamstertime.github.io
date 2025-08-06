const normal = 'https://i.imgur.com/dNiFXNN.png';
const blink = 'https://i.imgur.com/xen8G5e.png';
const favicon = document.getElementById('favicon');

setInterval(() => {
  if (favicon.href.endsWith(normal)) {
    favicon.href = blink;
  } else {
    favicon.href = normal;
  }
}, 20000);

