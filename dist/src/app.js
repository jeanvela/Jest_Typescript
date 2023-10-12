"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/ping', (req, res) => {
    res.send('pong');
});
app.get('/tasks', (req, res) => {
    res.json([]);
});
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description)
        return res.sendStatus(400);
    res.json({
        title,
        description,
        id: Math.random()
    });
});
exports.default = app;
