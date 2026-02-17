function appendElement(parent, tag, attr = {}) {
  const element = document.createElement(tag);
  for (const key in attr) element[key] = attr[key];
  if (typeof parent === "string") parent = document.querySelector(parent);
  parent.append(element);
}

function waitForElement(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector))
      return resolve(document.querySelector(selector));

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

function p(args) {
  console.log(args);

  const consoleEl = document.querySelector(".console"),
    textContent = JSON.stringify(args)
      .replaceAll("[", "[ ")
      .replaceAll("]", " ]")
      .replaceAll("{", "{ ")
      .replaceAll("}", " }")
      .replaceAll(",", ", ")
      .replaceAll(":", ": ")
      .replaceAll("  ", " ");

  if (consoleEl) {
    consoleEl.textContent = textContent;
  } else {
    appendElement(document.body, "div", {
      className: "console",
      style: `
        position: fixed; bottom: 0; left: 0;
        width: 100%;
        padding: .75em;
        padding-left: 1em;
        font-family: monospace;
        font-size: 1.2em;
        color: darkgray;`,
      textContent,
    });
  }
}

function getColorNames(str) {
  return (str.split("?colors=")[1] || str).split("+").filter(Boolean);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
