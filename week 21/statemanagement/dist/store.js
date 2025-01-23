"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameManger = exports.GameManger = void 0;
class GameManger {
    constructor() {
        this.games = [];
        this.games = [];
    }
    static getInstance() {
        if (GameManger.instance) {
            return GameManger.instance;
        }
        GameManger.instance = new GameManger();
        return GameManger.instance;
    }
    addMove(gameId, move) {
        console.log(`Adding move ${move} to game ${gameId}`);
        const game = this.games.find((game) => game.id === gameId);
        game === null || game === void 0 ? void 0 : game.moves.push(move);
    }
    addGame(gameId) {
        const game = {
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
exports.GameManger = GameManger;
exports.gameManger = GameManger.getInstance();
