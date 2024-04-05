import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"





export class ClockController {
  constructor() {
    this.drawClock()

  }


  drawClock() {
    const clock = AppState.activeClock
    let currentClock = new Date().toLocaleTimeString()
    setHTML('clock', currentClock)
    // console.log(clock)
    setInterval(this.drawClock, 1000);
  }



}