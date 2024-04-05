import { AppState } from "../AppState.js";
import { sandboxImagesService } from "../services/SandboxImagesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";





export class SandboxImagesController {
  constructor() {

    this.getImages()
    AppState.on('activeImage', this.drawImages)
  }



  async getImages() {

    try {
      await sandboxImagesService.getImages()
    } catch (error) {
      Pop.toast("Couldn't get Images", 'error')
      console.error(error)
    }

  }

  drawImages() {
    const activeImage = AppState.activeImage
    setHTML('active-images', activeImage.query)
    document.body.style.backgroundImage = `url(${activeImage.url})`
  }




























}