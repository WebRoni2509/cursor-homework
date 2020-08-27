
const BASE_URL = `https://swapi.dev/api/`;

const request = (url) => {
    return fetch(url).then(response => response.json())
}

const getCharachters = (url) => {
  return request(url)
    .then((result) => {
    return result.characters.map(request)
  }).then((result) => {
    return Promise.all(result)
  }).then((result) => {
    return result.map((element) => {
      return {
        name: element.name,
        birth: element.birth_year,
        gender: element.gender
      }
    })
  })
}