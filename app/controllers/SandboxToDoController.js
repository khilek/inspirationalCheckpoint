import { AppState } from "../AppState.js"
import { sandboxToDoService } from "../services/SandboxToDoService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"



export class SandboxToDoController {
  constructor() {
    console.log('Writing')


    // AppState.on('myToDos', this.createToDo)
    AppState.on('account', this.getMyToDos)
    AppState.on('myToDos', this.drawToDos)
  }



  async saveToDoList() {
    try {
      await sandboxToDoService.saveToDoList()
      Pop.toast("ToDo Saved", 'success')
    } catch (error) {
      Pop.toast('Could not save ToDo', "error")
      console.error(error)
    }
  }


  async deleteToDos(toDoId) {
    try {
      const result = await Pop.confirm('Are  you sure you want to destroy forever???', 'You cannot get back', 'DO IT!')

      if (result == false) return

      await sandboxToDoService.deleteToDos(toDoId)
    } catch (error) {
      Pop.toast(" Couldn't destroy", 'error')
      console.error(error)
    }
  }




  drawToDos() {
    const toDos = AppState.myToDos
    let toDosContent = ''
    toDos.forEach(toDos => toDosContent += toDos.ToDoListTemplate)
    setHTML('todos', toDosContent)
  }


  async getMyToDos() {
    try {
      await sandboxToDoService.getMyToDos()

    } catch (error) {
      Pop.toast("Could not get your ToDos", 'error')
      console.error(error)
    }
  }



  createToDo() {
    try {
      event.preventDefault()
      console.log('Creating ToDo')
      const form = event.target
      const toDoFormData = getFormData(form)
      console.log('Data', toDoFormData)
      sandboxToDoService.createTodo(toDoFormData)
      /**@ts-ignore */
      form.reset()
    } catch (error) {
      // Pop.toast("Couldn't create ToDo", 'error')
      // console.error("Couldn't get ToDo", error)

      console.log("Couldn't Create ToDo", error)
      window.alert(error.message)
    }
  }





}


