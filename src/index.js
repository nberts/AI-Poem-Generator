let poemFormElement = document.querySelector("#poem-generator");
//display generated poem
function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: " ",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");
  //build API URL
  let apiKey = "48faoe8ab18e23t93c002654f81bbf6e";
  let prompt = `User instructions: Generate a poem in English about ${instructionInput.value}`;
  let context =
    "You are a romantic poet AI assistant, your purpose is to write short 4 line poems. The poems should be written in basic HTML and separate each line of the poem with a <br/>. Make sure to follow the user instructions and only include the poem, the user should not see any HTML elements. Please sign the poem with <strong>SheCodes AI</strong>";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<span class="generating">Generating a poem for you about ${instructionInput.value}...</span>`;

  //call to API
  axios.get(apiURL).then(displayPoem);
}

poemFormElement.addEventListener("submit", generatePoem);
