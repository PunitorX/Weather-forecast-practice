class UI {

  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.maxTemp = document.getElementById('max-temp');
    this.minTemp = document.getElementById('min-temp');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.location.name + ', ' + weather.location.sys.country;
    this.string.textContent = weather.location.main.temp + ' F';
    this.desc.textContent = weather.location.weather[0].description; 
    this.humidity.textContent = 'Humidity: ' + weather.location.main.humidity + '%';
    this.feelsLike.textContent = "Feels Like: " + weather.location.main.feels_like + ' F';
    this.maxTemp.textContent = "Max Tempature: " + weather.location.main.temp_max;
    this.minTemp.textContent = "Min Temperature: " + weather.location.main.temp_min;    
  }
}