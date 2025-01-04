import { useState } from "react";

const WeatherApi = () => {
    const [weather, setWeather] = useState({});

    const fetchData = async (cityName) => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c2ca2241522becb3a020db0ad9922955`);
            const data = await res.json();
            return data;

        } catch (err) {
            console.error(err);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const cityName = e.target.city.value;
        const data = await fetchData(cityName);

        e.target.reset();
        setWeather(data);
    }

    console.log(weather);

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input type="text" name="city" placeholder="Enter city name" required />
                <button>Get Weather</button>
            </form>

            {
                weather.cod === 200 ? (
                    <div>
                        <h2>{weather.name}, {weather.sys.country}</h2>
                        <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
                        <p>Humidity: {weather.main.humidity}%</p>
                        <p>Description: {weather.weather[0].description}</p>
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                    </div>
                ) : <p>City not found</p>
            }

        </main>
    )
}

export default WeatherApi;