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

function p(...args) {
  console.log(...args);

  const logEl = document.querySelector(".log"),
    textContent = args.map((arg) => JSON.stringify(arg)).join(" ");

  if (logEl) {
    logEl.textContent = textContent;
  } else {
    appendElement(document.body, "div", {
      className: "log",
      style: `
        position: fixed; bottom: 0; left: 0;
        padding: .75em 1em;
        font-family: monospace;
        font-size: 1.1em;
        word-break: break-all;
        color: darkgray;
        mix-blend-mode: difference;
        pointer-events: none;
        user-select: none;`,
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
