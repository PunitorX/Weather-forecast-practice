// Init weather object
const weather = new Forecast('Paducah', 'KY', 'US');
// Init UI object
const ui = new UI();

// DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location
document.getElementById('w-change-btn').addEventListener('click', changeCity);

function changeCity() {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const country = document.getElementById('country').value;

  weather.changeLocation(city, state, country);

  // Get new weather location
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
}

function getWeather(){
  weather.getWeather()
  .then(results => {
    console.log(results);
    ui.paint(results);
  })
  .catch(err => console.log(err));
}