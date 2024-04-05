import { AppState } from "../AppState.js"
import { Quotes } from "../models/Quotes.js"
import { api } from "./AxiosService.js"






class SandboxQuotesService {






  async getQuotes() {

    const response = await api.get('api/quotes')
    console.log('QUOTE', response.data)
    const quote = new Quotes(response.data)
    AppState.activeQuote = quote

  }





}




















export const sandboxQuotesService = new SandboxQuotesService()