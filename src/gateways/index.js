const apiLink =
  'https://developer.nps.gov/api/v1/multimedia/galleries?limit=10&start=2&q=national%20park&api_key=HdIJfDqu1pskl6oqkLEhWLTxFujYosuSMN1ghkbm';

export const fetchParks = () => {
  return fetch(apiLink)
    .then((response) => {
      return response.ok ? response.json() : Promise.reject('Ошибка запроса');
    })
    .then((data) => data.data);
};
