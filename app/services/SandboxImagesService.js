import { AppState } from "../AppState.js"
import { Images } from "../models/Images.js"
import { api } from "./AxiosService.js"




class SandboxImagesService {




  async getImages() {

    const response = await api.get('api/images')
    console.log('🖼️', response.data)
    const img = new Images(response.data)
    AppState.activeImage = img

  }


























}






export const sandboxImagesService = new SandboxImagesService()