const translate = () => {
  const contentDiv = document.querySelector("#content");
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }

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

const transformAll = () => {
  translate();
};

export { transformAll };
