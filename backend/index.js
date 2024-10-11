const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  //   console.log(createPayload);
  //   console.log(parsedPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You Have Sent The Wrong Input",
    });
    return;
  }
  const user = await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "TODO Created",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You Have Sent The Wrong Input",
    });
    return;
  }
  const complete = todo.update(
    {
      _id: req.body.id,
    },
    { completed: true }
  );
});

app.listen(port);
