class Forecast {
  constructor(city, state, country) {
    this.apiKey = '##########################';
    this.city = city;
    this.state = state;
    this.country = country;
  }

  // fetch weather from API
  async getWeather() {
    const locationResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state},${this.country}&appid=${this.apiKey}&units=imperial`);

    const location = await locationResponse.json();

    return {
      location: location
    }
  }

  // change weather location
  changeLocation(city, state, country) {
    this.city = city;
    this.state = state;
    this.country = country;
  }
}
