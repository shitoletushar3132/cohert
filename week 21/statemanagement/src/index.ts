import { startLogger } from "./logger";
import { gameManger } from "./store";

startLogger();

setInterval(() => {
  gameManger.addGame(Math.random().toString());
}, 5000);
