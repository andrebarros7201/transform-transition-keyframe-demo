const translateX = () => {
  const contentDiv = document.querySelector("#content");

  const div = document.createElement("div");
  const title = document.createElement("h2");
  title.textContent = "TranslateX";

  const paragraph = document.createElement("p");
  paragraph.textContent = `Moves the element from its current position.
  Positive value goes to right.
  Negative value goes to left.`;

  const square = document.createElement("div");
  square.classList.add("translateX");

  div.appendChild(title);
  div.appendChild(paragraph);
  div.appendChild(square);

  contentDiv.appendChild(div);
};
const translateY = () => {
  const contentDiv = document.querySelector("#content");

  const div = document.createElement("div");
  const title = document.createElement("h2");
  title.textContent = "TranslateY";

  const paragraph = document.createElement("p");
  paragraph.textContent = `Moves the element from its current position.
  Positive value goes to down.
  Negative value goes to up.`;

  const square = document.createElement("div");
  square.classList.add("translateY");

  div.appendChild(title);
  div.appendChild(paragraph);
  div.appendChild(square);

  contentDiv.appendChild(div);
};
const scaleX = () => {
  const contentDiv = document.querySelector("#content");

  const div = document.createElement("div");
  const title = document.createElement("h2");
  title.textContent = "ScaleX";

  const paragraph = document.createElement("p");
  paragraph.textContent = `Changes the size of the element.
  Positive value increases the width of the element.
  Negative value decreases the width of the element.`;

  const square = document.createElement("div");
  square.classList.add("scaleX");

  div.appendChild(title);
  div.appendChild(paragraph);
  div.appendChild(square);

  contentDiv.appendChild(div);
};

const scaleY = () => {
  const contentDiv = document.querySelector("#content");

  const div = document.createElement("div");
  const title = document.createElement("h2");
  title.textContent = "ScaleX";

  const paragraph = document.createElement("p");
  paragraph.textContent = `Changes the size of the element.
  Positive value increases the height of the element.
  Negative value decreases the height of the element.`;

  const square = document.createElement("div");
  square.classList.add("scaleY");

  div.appendChild(title);
  div.appendChild(paragraph);
  div.appendChild(square);

  contentDiv.appendChild(div);
};
const transformAll = () => {
  const contentDiv = document.querySelector("#content");

  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
  translateX();
  translateY();
  scaleX();
  scaleY();
};

export { transformAll };
