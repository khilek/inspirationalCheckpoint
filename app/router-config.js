import { AccountController } from "./controllers/AccountController.js";
import { ClockController } from "./controllers/ClockController.js";
import { HomeController } from "./controllers/HomeController.js";
import { SandboxImagesController } from "./controllers/SandboxImagesController.js";
import { SandboxQuotesController } from "./controllers/SandboxQuotesController.js";
import { SandboxToDoController } from "./controllers/SandboxToDoController.js";
import { SandboxWeatherController } from "./controllers/SandboxWeatherController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [SandboxImagesController, SandboxQuotesController, SandboxWeatherController, ClockController, SandboxToDoController],
    view: 'app/views/ApplicationView.html'
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




