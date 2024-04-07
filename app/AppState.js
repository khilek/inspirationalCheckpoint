import { Images } from "./models/Images.js"
import { Quotes } from "./models/Quotes.js"
import { ToDos } from "./models/ToDo.js"
import { Weather } from "./models/Weather.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null


  /**@type {Images} */
  activeImage = null


  /**@type {Quotes} */
  activeQuote = null

  /**@type {Weather} */
  activeWeather = null

  /**@type {Clock} */
  activeClock = null

  /**@type {ToDos} */
  activeToDos = null


  /**@type {ToDos[]} */
  myToDos =

    [
      // new ToDos({
      //   completed: '',
      //   description: 'yes',
      //   creatorId: ''
      // })


    ]



}

export const AppState = createObservableProxy(new ObservableAppState())