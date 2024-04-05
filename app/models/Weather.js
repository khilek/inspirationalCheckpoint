

export class Weather {
  constructor(data) {
    this.name = data.name
    this.main = data.main.temp
    this.weather = data.weather
  }

}






// {
//   "name": {
//     "type": "String"
//   },
//   "main": {
//     "temp": {
//       "type": "Number"
//     }
//   },
//   "weather": [
//     {
//       "description": {
//         "type": "String"
//       }
//     }
//   ]
// }