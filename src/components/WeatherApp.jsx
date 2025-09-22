import WeatherSearch from "./WeatherSearch";
import WeatherDisplay from "./WeatherDisplay";
import WeatherChart from "./WeatherChart";

export default function WeatherApp(){
    return (
        <div>
            <h1>Weather App</h1>
            <WeatherSearch />
            <WeatherDisplay />
            <WeatherChart />
        </div>
    );
}