import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext" ;

export default function WeatherDisplay(){
    const {state} = useContext(WeatherContext) ;

    if (state.loading) return <p>Carregando...</p>
    if (state.error) return <p style={{color:"red"}}>{state.error}</p>
    if (!state.weather) return <p>Digite a cidade para ver o clima</p>

    const {city, list} = state.weather ;

    return (
        <div>
            <h2>Clima na cidade: {city.name}</h2>
            <p>Temperatura atual: {list[0].main.temp} graus Celsius</p>
            <p>Descrição: {list[0].weather[0].description}</p>
        </div>
    );
}