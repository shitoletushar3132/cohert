interface Game {
  id: string;
  whitePlayerName: string;
  blackPlayerName: string;
  moves: string[];
}

export class GameManger {
  games: Game[] = [];
  private static instance: GameManger;
  private constructor() {
    this.games = [];
  }

  static getInstance() {
    if (GameManger.instance) {
      return GameManger.instance;
    }
    GameManger.instance = new GameManger();
    return GameManger.instance;
  }

  addMove(gameId: string, move: string) {
    console.log(`Adding move ${move} to game ${gameId}`);
    const game = this.games.find((game) => game.id === gameId);
    game?.moves.push(move);
  }

  addGame(gameId: string) {
    const game: Game = {
      id: gameId,
      whitePlayerName: "Alice",
      blackPlayerName: "Bob",
      moves: [],
    };
    this.games.push(game);
  }

  logs() {
    return this.games;
  }
}

export const gameManger = GameManger.getInstance();
