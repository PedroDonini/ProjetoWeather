import {createContext, useReducer} from "react" ;

const WeatherContext = createContext() ;

const initialState = {
    loading: true ,
    error: null ,
    weather: null,
};

function weatherReducer(state,action){
    switch(action.type){
        case "FETCH_START":
            return {...state, loading:true, error:null} ;
        case "FETCH_SUCCESS":
            return {...state, loading:false, weather: action.payload} ;
        case "FETCH_ERROR":
            return {...state, loading:false, error: action.payload} ;
        default:
            return state;    
    }
}

function WeatherProvider({children}) {
    const [state, dispatch] = useReducer(weatherReducer, initialState) ;

    const fetchWeather = async (city) => {
        dispatch({ type: "FETCH_START"}) ;
        try{
            const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
            );
            if (!res.ok) throw new Error("Cidade não encontrada.") ;
            const data = await res.json();
            dispatch({ type: "FETCH_SUCCESS", payload: data}) ;
        } catch (err) {
            dispatch({ type: "FETCH_ERROR", payload: err.message}) ;
        }
    };

    return (
        <WeatherContext.Provider value={{state, fetchWeather }}>
            {children}
        </WeatherContext.Provider>
    );
}

export {WeatherContext, WeatherProvider} ;