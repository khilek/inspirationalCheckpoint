

export class Quotes {
  constructor(data) {
    this.quote = data.quote
    this.author = data.author
    this.tags = data.tags
    this.description = data.description
    this.content = data.content
  }







}








// {
//   "quote": {
//     "body": {
//       "maxLength": 500
//     },
//     "author": {
//       "maxLength": 500
//     },
//     "tags": [
//       {
//         "maxLength": 500
//       }
//     ]
//   },
//   "description": {
//     "type": "String",
//     "required": true
//   }
// }