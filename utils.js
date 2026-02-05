const { log } = console;

function appendScript(src) {
  const script = document.createElement("script");
  script.src = src;
  document.head.append(script);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
