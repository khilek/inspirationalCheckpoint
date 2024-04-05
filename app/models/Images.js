


export class Images {
  constructor(data) {
    this.url = data.url
    this.imgUrl = this.imgUrl
    this.query = data.query
    this.author = data.author
    this.largeImgUrl = this.largeImgUrl

  }

  get ActiveImgTemplate() {
    return `




`
  }


}


// {
//   "url": {
//     "type": "String",
//     "maxLength": 5000
//   },
//   "imgUrl": {
//     "type": "String",
//     "maxLength": 5000
//   },
//   "query": {
//     "type": "String",
//     "maxLength": 5000
//   },
//   "author": {
//     "type": "String",
//     "maxLength": 5000
//   },
//   "largeImgUrl": {
//     "type": "String",
//     "maxLength": 5000
//   }
// }