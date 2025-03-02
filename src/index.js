function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
  console.log("Poem generated");
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "2a9cba14de5ca8505328abf7tf796fof";
  let prompt = `create a haiku about ${instructionsInput.value} and sperate each line with a <br />. At the end of the haiku put SheCodes AI in <strong>`;
  let context = "You are a haiku expert";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);

  console.log("generating poem");
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
