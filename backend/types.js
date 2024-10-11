const z = require("zod");

const createTodo = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

const updateTodo = z.object({
  id: z.string(),
});

module.exports = {
  createTodo: createTodo,
  updateTodo: updateTodo,
};
