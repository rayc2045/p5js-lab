function getSearchString(str) {
  return new URLSearchParams(window.location.search).get(str);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
