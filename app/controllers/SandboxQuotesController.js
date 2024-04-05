import { AppState } from "../AppState.js"
import { sandboxQuotesService } from "../services/SandboxQuotesService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"





export class SandboxQuotesController {
  constructor() {

    this.getQuotes()
    AppState.on('activeQuote', this.drawQuotes)

  }


  async getQuotes() {
    try {
      await sandboxQuotesService.getQuotes()
    } catch (error) {
      Pop.toast("Couldn't get Quotes", 'error')
      console.error(error)
    }
  }


  drawQuotes() {
    const activeQuote = AppState.activeQuote
    setHTML('active-quotes', activeQuote.content)

  }









}