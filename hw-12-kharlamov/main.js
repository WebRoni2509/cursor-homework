
const BASE_URL = `https://swapi.dev/api/`;
const mainContainer = document.querySelector('.container');
const showCharactersBtn = document.querySelector('#showCharactersBtn');
const showPlanetsBtn = document.querySelector('#showPlanetsBtn');


//get characters list
const getCharachters = (url) => {
  return axios.get(`${BASE_URL}films/5/`).then(
    (res) => {
      return res.data.characters
    }
  ).then((charactersUrls) => {
    let updatedCharactersUrls = [];
    let i = 0;
    while (i < charactersUrls.length) {
      updatedCharactersUrls[i] = charactersUrls[i].replace('http:', 'https:');
      i++;
    }
    return Promise.all(updatedCharactersUrls.map((element) => axios.get(element).then((res) => res.data)));
})
}

console.log(getCharachters())

//get planets list
const planets = (page) => {
  const config = {
    url: `${BASE_URL}planets/`,
    params: {page}
  }
  return axios(config).then(
    (res) => {
      return res.data.results;
    }
  )
}

console.log(planets())


//render characters list
const renderCharacters = (characters) => {
  mainContainer.innerHTML = '';
  characters.map((element) => {
      const characterItem = document.createElement('div');
      characterItem.className = 'characterItem';
      characterItem.innerHTML = `
        <span>Name: <strong>${element.name}</strong></span>
        <span>Birhday: <strong>${element.birth_year}</strong></span>
        <span>Gender: <strong>${element.gender}</strong></span>`;
        mainContainer.append(characterItem);
  });
}

document.querySelector('#showCharacters').addEventListener('click', () => {
  getCharachters().then(renderCharacters)
});

//render planets list
const renderPlanets = (planets) => {
  mainContainer.innerHTML = ''
  planets.forEach(element => {
    const planet = document.createElement('div');
    planet.className = 'planetItem';
    planet.innerHTML = `
      <span>Planet name: <strong>${element.name}</strong></span>
    `;
  });
}
document.querySelector('#showPlanets').addEventListener('click', () => {
  planets(1).then(renderPlanets)
});
