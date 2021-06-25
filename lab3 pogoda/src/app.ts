export class App {
    opwApiKey = '4b05e74add8b87d18b4f6cf595625ca3';

    async getCityInfo(cityName: string) {
        const weather = await this.getWeather(cityName);
        this.saveData(weather);
        return weather;
    }

    private magazyn: any[] = [];

    async getWeather(city: string): Promise<any> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();

        return weatherData;
    }

    saveData(data: any) {
        this.magazyn.push(data.name);
        localStorage.setItem('weather', JSON.stringify(this.magazyn));
        //console.log(this.magazyn);
    }
}
