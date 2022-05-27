import { TripsController } from "./Controllers/TripsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  tripsController = new TripsController();
}



window["app"] = new App();
