import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import { Line } from "react-chartjs-2" ;
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
} from "chart.js" ;

ChartJS.register(LineElement,CategoryScale,LinearScale,PointElement,Title,Tooltip,Legend) ;

export default function WeatherChart(){
    const {state} = useContext(WeatherContext) ;

    if (!state.weather) return null ;

    const labels = state.weather.list.slice(0,5).map((item) => item.dt_txt) ;
    const temps = state.weather.list.slice(0,5).map((item) => item.main.temp) ;

    const data = {
        labels,
        datasets: [
            {
                label: "Temperatura(°C)",
                data: temps,
                fill: true,
                backgroundColor: "rgba(52, 152, 219, 0.2)",
                borderColor: "#2980b9",
                borderWidth: 3,
                tension: 0.3,
                pointRadius: 5,
                pointBackgroundColor: "#2980b9",
                pointHoverRadius: 7,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
                labels: {
                font: { size: 14 },
                },
            },
            title: {
                display: true,
                text: "Previsão de Temperatura (próximas horas)",
                font: { size: 18 },
                padding: { top: 10, bottom: 20 },
            },
            tooltip: {
                enabled: true,
                mode: "index",
                intersect: false,
            },
            },
            scales: {
            x: {
                ticks: { font: { size: 12 }, maxRotation: 45, minRotation: 30 },
                grid: { color: "#eee" },
            },
            y: {
                ticks: { font: { size: 12 } },
                grid: { color: "#eee" },
            },
        },
    };

    return (
        <div className="weather-chart-container">
            <Line data={data} options={options} />
        </div>
    );
}