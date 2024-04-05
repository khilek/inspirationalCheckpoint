import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { api } from "./AxiosService.js"








class SandboxWeatherService {




  async getWeather() {
    const response = await api.get('api/weather')
    console.log('WEATHER', response.data)
    const weather = new Weather(response.data)
    AppState.activeWeather = weather

  }


}













export const sandboxWeatherService = new SandboxWeatherService()