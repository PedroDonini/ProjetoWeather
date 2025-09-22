import { useState } from "react" ;

export default function WeatherSearch(){
    const [city, setCity] = useState("") ;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(city.trim()){
            // TODO: Lógica para consumir os dados da API -> Contexto para retornar informações de clima da cidade buscada
        }
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