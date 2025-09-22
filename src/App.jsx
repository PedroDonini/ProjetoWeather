import WeatherApp from './components/WeatherApp'
import { WeatherProvider } from './contexts/WeatherContext'
import "./index.css"

export default function App() {
  return (
    <WeatherProvider>
      <WeatherApp />
    </WeatherProvider>
  )
}
