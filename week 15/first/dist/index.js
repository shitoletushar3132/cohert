"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const client = new client_1.PrismaClient();
app.get("/", (req, res) => {
    res.json({
        message: "Healthy server",
    });
});
app.get("/hello", (req, res) => {
    res.send("hello");
});
app.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Attempt to create a new user
        yield client.user.create({
            data: {
                email: req.body.email,
                name: req.body.name,
            },
        });
        // Respond with success if no errors
        res.json({
            message: "Done signing up!",
        });
    }
    catch (error) {
        // Handle the Prisma error for unique constraint violations (duplicate email)
        if (error.code === "P2002") {
            res.status(400).json({ error: "Email is already taken." });
        }
        else {
            // Log the full error for debugging purposes
            console.error(error);
            // Respond with a generic error message
            res.status(500).json({ error: "An error occurred while signing up." });
        }
    }
}));
app.listen(3000);
