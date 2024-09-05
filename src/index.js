let poemFormElement = document.querySelector("#poem-generator");

function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["Ah que la neige a neigee!"],
    autoStart: true,
    delay: 25,
    cursor: "",
  });
}

poemFormElement.addEventListener("submit", generatePoem);
