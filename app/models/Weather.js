

export class Weather {
  constructor(data) {
    this.name = data.name
    this.main = data.main.temp
    this.weather = data.weather
    this.kelvin = data.main.temp
    this.celsius = data.main.temp - 273.15
    this.fahrenheit = (data.main.temp - 273.15) * 9 / 5 + 32
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