
const BASE_URL = `https://swapi.dev/api/`;
const mainContainer = document.querySelector('.main');
const showCharactersBtn = document.querySelector('#showCharacters');
const showPlanetsBtn = document.querySelector('#showPlanets');
const pagination = document.querySelector('.pagination');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

//get characters list
const getCharachters = () => {
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

//get planets list
let page = 1;
const planets = (page) => {
  const config = {
    url: `${BASE_URL}planets/`,
    params: {page}
  }
  return axios(config).then(
    (res) => {
      console.log(res)
      return res.data.results;
    }
  )
}

//render characters list
const renderCharacters = (characters) => {
  mainContainer.innerHTML = '';
  return characters.map((element) => {
      const characterItem = document.createElement('div');
      characterItem.className = 'card';
      characterItem.style.width = '18rem'
      characterItem.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${element.birth_year}</h6>
          <p class="card-text">${element.gender}</p>
        </div>`;
      mainContainer.append(characterItem);
  });
}

showCharactersBtn.addEventListener('click', () => {
  pagination.style.display = 'none'
  getCharachters().then(renderCharacters)
});

//render planets list
const renderPlanets = (planets) => {
  mainContainer.innerHTML = '';
  return planets.forEach(element => {
    const planet = document.createElement('div');
    planet.className = 'card';
    planet.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
    </div> `;
    mainContainer.append(planet);
  });
}

showPlanetsBtn.addEventListener('click', () => {
  pagination.style.display = 'flex'
  planets().then(renderPlanets)
});

prev.addEventListener('click', () => {
  if (page <= 1){
    return;
  } else{
    planets(--page).then(renderPlanets);
  }
});
next.addEventListener('click', () => {
  if (page >= 6){
    return;
  } else{
    planets(++page).then(renderPlanets);
  }
  
});