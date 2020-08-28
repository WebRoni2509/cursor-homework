
const BASE_URL = `https://swapi.dev/api/`;

const getCharachters = (url) => {
  return axios.get(`${BASE_URL}films/5`).then(
    (res) => {
      return res.data.characters
    }
  ).then((charactersUrls) => {
    const updatedCharactersUrls = [];
    for (let i = 0; i < charactersUrls.length; i++) {
      updatedCharactersUrls[i] = charactersUrls[i].replace("http://", "https://");
    }
    return Promise.all(
      updatedCharactersUrls.map((el) => {
            return axios.get(el).then((res) => res.data);
        })
    );
})
}

console.log(getCharachters())

function showCharacters(characters) {
  const container = document.querySelector('.container');
  container.innerHTML = "";
  characters.map((element) => {
      const characterItem = document.createElement("div");
      characterItem.className = "char";
      characterItem.innerHTML = `
      <div class="characterItem">
        <p>Name: <strong>${element.name}</strong></p>
        <p>Birhday: <strong>${element.birth_year}</strong></p>
        <p>Gender: <strong>${element.gender}</strong></p>
      </div>`;
       container.append(characterItem);
  });
}

getCharachters().then(showCharacters)