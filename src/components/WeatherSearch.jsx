import { useState, useContext } from "react" ;
import { WeatherContext } from "../contexts/WeatherContext" ;

export default function WeatherSearch(){
    const [city, setCity] = useState("") ;
    const {fetchWeather} = useContext(WeatherContext) ;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(city.trim()) fetchWeather(city) ;
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Digite o nome da cidade"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit">Buscar</button>
        </form>
    )
}