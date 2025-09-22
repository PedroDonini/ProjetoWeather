import WeatherSearch from "./WeatherSearch";
import WeatherDisplay from "./WeatherDisplay";

export default function WeatherApp(){
    return (
        <div>
            <h1>Weather App</h1>
            <WeatherSearch />
            <WeatherDisplay />
        </div>
    );
}