import WeatherApp from './components/WeatherApp'
import { WeatherProvider } from './contexts/WeatherContext'

export default function App() {
  return (
    <WeatherProvider>
      <WeatherApp />
    </WeatherProvider>
  )
}
