const express = require("express");


const router = express.Router();

const { verifyToken } = require("../middleware/verifyToken");

const { getAllTodos, getTodoById , createTodo , updateTodo , deleteTodo , toggleTodo} = require("../controllers/todoController");

router.get("/", verifyToken, getAllTodos);

router.get("/:id", verifyToken, getTodoById);

router.post("/", verifyToken, createTodo);

router.put("/:id", verifyToken, updateTodo);

router.delete("/:id", verifyToken, deleteTodo);

router.patch("/:id/toggle", verifyToken, toggleTodo);

module.exports = router;