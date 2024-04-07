import { AppState } from "../AppState.js"
import { ToDos } from "../models/ToDo.js"
import { saveState } from "../utils/Store.js"
import { api } from "./AxiosService.js"



class SandboxToDoService {

  async saveToDoList(newToDo) {
    const response = await api.post(`api/todos/`, newToDo)
    console.log('💾', response.data)
    const toDos = new ToDos(response.data)
    AppState.myToDos.push(toDos)
  }


  async getMyToDos() {
    const response = await api.get('api/todos')
    console.log('ToDo', response.data);
    const myToDos = response.data.map(todos => new ToDos(todos))
    AppState.myToDos = myToDos
    console.log('🗃️');
    console.log(AppState.myToDos);
  }

  async deleteToDos(toDoId) {
    const response = await api.delete(`api/todos/${toDoId}`)
    console.log('Deleting', response.data)
    const indexToRemove = AppState.myToDos.findIndex(todo => todo.id == toDoId)
    AppState.myToDos.splice(indexToRemove, 1)
  }

  /**
   * Description
   * @param {ToDos} toUpdate
   * @returns {Promise<void>}
   */
  async updateMyToDos(toUpdate) {
    const response = await api.put(`api/todos/${toUpdate.id}`, toUpdate)
    console.log('Updating', response.data)
    const indexToUpdate = AppState.myToDos.findIndex(todo => todo.id == toUpdate.id)
    AppState.myToDos.splice(indexToUpdate, 1)

    AppState.myToDos.push(new ToDos(response.data))
  }


  createTodo(toDoFormData) {
    const newToDo = new ToDos(toDoFormData)
    console.log("New ToDo Created", newToDo)
    // AppState.myToDos.push(newToDo)
    console.log('ToDos in Appstate', AppState.activeToDos)
    this.saveToDoList(newToDo)
  }



  saveToDos() {
    saveState('myToDos', AppState.myToDos)
  }















}




export const sandboxToDoService = new SandboxToDoService()