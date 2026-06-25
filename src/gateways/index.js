const apiLink =
  'https://developer.nps.gov/api/v1/multimedia/galleries?start=2&q=national%20park&api_key=HdIJfDqu1pskl6oqkLEhWLTxFujYosuSMN1ghkbm';

export const fetchParks = () => {
  return fetch(apiLink)
    .then((response) => {
      return response.ok ? response.json() : Promise.reject('Request error');
    })
    .then((data) => data.data)
    .catch((error) => {
      console.error(error);
      alert('Failed to load national parks data. Please try again later.');
    });
};
