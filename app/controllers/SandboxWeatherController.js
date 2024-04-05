import { AppState } from "../AppState.js"
import { sandboxWeatherService } from "../services/SandboxWeatherService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"







export class SandboxWeatherController {
  constructor() {

    this.getWeather()
    AppState.on('activeWeather', this.drawWeather)

  }


  async getWeather() {
    try {
      await sandboxWeatherService.getWeather()
    } catch (error) {
      Pop.toast("Couldn't get Weather", 'error')
      console.error(error)
    }
  }


  drawWeather() {
    const activeWeather = AppState.activeWeather
    setHTML('active-weather', activeWeather.fahrenheit.toFixed(2))
  }





}























