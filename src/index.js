function generatePoem(event) {
  event.preventDefault();
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "This is a poem";

  new Typewriter("#poem", {
    strings: "This is a poem",
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
