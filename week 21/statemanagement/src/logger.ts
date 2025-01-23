import { gameManger } from "./store";

export function startLogger() {
  setInterval(() => {
    console.log(gameManger.logs());
  }, 5000);
}
