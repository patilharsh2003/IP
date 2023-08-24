function fetchDataFromApi(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(`Fetch error: ${error}`);
        });
    });
  }
  
  const apiKey = ''; // Replace with your actual API key
  const city = 'London'; // Replace with the desired city
  
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  fetchDataFromApi(apiUrl)
    .then(data => {
      console.log('Data Retrieved Successfully:', data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  