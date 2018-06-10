"use strict";
const express = require('express');
const app = express();
const PORT = 4200;
const todo_ctrl = require("./todo_ctrl");
app.get('/todo', todo_ctrl.get_todo);
app.post('/todo/:content', todo_ctrl.post_todo);
app.put('/todo/:id/:content', todo_ctrl.put_todo);
app.delete('/todo/:id', todo_ctrl.delete_todo);
app.listen(PORT, () => {
    `Listening on ${PORT}`;
});
