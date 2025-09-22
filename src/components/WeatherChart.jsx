import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import { Line } from "react-chartjs-2" ;
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
} from "chart.js" ;

ChartJS.register(LineElement,CategoryScale,LinearScale,PointElement) ;

export default function WeatherChart(){
    const {state} = useContext(WeatherContext) ;

    if (!state.weather) return null ;

    const labels = state.weather.list.slice(0,8).map((item) => item.dt_txt) ;
    const temps = state.weather.list.slice(0,8).map((item) => item.main.temp) ;

    const data = {
        labels,
        datasets: [
            {
                label: "Temperatura(Celsius)",
                data: temps,
                borderColor: "blue",
                backgroundColor: "lightblue",
            },
        ],
    };

    return (
        <div>
            <h3>Previsão das próximas horas</h3>
            <Line data={data} />
        </div>
    );
}