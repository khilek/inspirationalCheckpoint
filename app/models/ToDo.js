

export class ToDos {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed ? true : false
    this.description = data.description
    this.creatorId = data.creatorId

  }

  // get ToDoListTemplate() {
  //   return `
  // <div class="col-4" id="todos">${this}
  //       <div class="card text-center">
  //         <form onsubmit="app.SandboxToDoController.createToDo()">
  //           <form class="mb-3 d-flex justify-content-around">
  //             <label for="name">Create New ToDo</label>
  //             <input type="text" name="name" id="name" required minlength="3" maxlength="15">
  //             <button type="submit">Create</button>

  //           </form>
  //         </form>
  //       </div>
  // `
  // }


  get ToDoListTemplate() {
    return `
    
     <div class="col-4 selectable ${this.completed ? 'line-through' : ''}"><input type="checkbox" onchange="app.SandboxToDoController.toggleLineThrough('${this.id}')" > ${this.description}
    <button onclick="app.SandboxToDoController.deleteToDos('${this.id}')">Delete</button>
  </div>
  `
  }


}

// {
//   "completed": {
//     "type": "Boolean",
//     "required": true,
//     "default": false
//   },
//   "description": {
//     "type": "String",
//     "required": true,
//     "maxLength": 500
//   },
//   "creatorId": {
//     "type": "ObjectId",
//     "required": true,
//     "ref": "Account"
//   }
// }