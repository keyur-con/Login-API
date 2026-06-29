const Todo = require("../models/Todo");

const getAllTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find({
      owner: req.user.userId,
    });

    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};


const getTodoById = async (req, res, next) => {
  try {
    const todo = await Todo.findOne({
      _id: req.params.id,
      owner: req.user.userId,
    });

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
};


// const createTodo = async (req, res) => {
//   const { title, description, completed, priority, dueDate } = req.body;

//   if (!title) {
//     return res.status(400).json({ message: "Title are Required" });
//   }

//   const newTodo = new Todo({
//     title,
//     description,
//     completed,
//     priority,
//     dueDate,
//     owner: req.user.userId,
//   });

//   await newTodo.save();

//   res.status(201).json(newTodo);
// };

const createTodo = async (req, res, next) => {
  try {
    const { title, description, completed, priority, dueDate } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    const newTodo = new Todo({
      title,
      description,
      completed,
      priority,
      dueDate,
      owner: req.user.userId,
    });

    await newTodo.save();

    res.status(201).json(newTodo);

  } catch (error) {
    next(error);
  }
};

// const updateTodo = async (req, res) => {
//   const { title, description, completed, priority, dueDate } = req.body;

//   if (!title) {
//     return res.status(400).json({ message: "Title are Required" });
//   }

//   const updatedTodo = await Todo.findOneAndUpdate(
//     {
//       _id: req.params.id,
//       owner: req.user.userId,
//     },
//     {
//       title,
//       description,
//       completed,
//       priority,
//       dueDate,
//     },
//     {
//       new: true,
//     },
//   );

//   if (!updatedTodo) {
//     return res.status(404).json({ message: "No Todo present" });
//   }
//   res.status(200).json(updatedTodo);
// };

const updateTodo = async (req, res, next) => {
  try {
    const { title, description, completed, priority, dueDate } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    const updatedTodo = await Todo.findOneAndUpdate(
      {
        _id: req.params.id,
        owner: req.user.userId,
      },
      {
        title,
        description,
        completed,
        priority,
        dueDate,
      },
      {
        new: true,
      }
    );

    if (!updatedTodo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.status(200).json(updatedTodo);
  } catch (error) {
    next(error);
  }
};


// const deleteTodo = async (req, res) => {
//   await Todo.findOneAndDelete({
//     _id: req.params.id,
//     owner: req.user.userId,
//   });

//   if (!todo) {
//     return res.status(404).json({ message: "Todo not found" });
//   }
//   res.status(200).json({ message: "Todo deleted successfully" });
// };

const deleteTodo = async (req, res, next) => {
  try {
    const deletedTodo = await Todo.findOneAndDelete({
      _id: req.params.id,
      owner: req.user.userId,
    });

    if (!deletedTodo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.status(200).json({
      message: "Todo deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};


// const toggleTodo = async (req, res) => {
//   const todo = await Todo.findOne({
//     _id: req.params.id,
//     owner: req.user.userId,
//   });
//   todo.completed = !todo.completed;
//   await todo.save();
//   res.json(todo);
// };

const toggleTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findOne({
      _id: req.params.id,
      owner: req.user.userId,
    });

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    todo.completed = !todo.completed;

    await todo.save();

    res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
};


module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  toggleTodo,
};
