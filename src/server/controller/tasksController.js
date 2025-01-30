import { prisma } from "../utils/prismaDB.js";

export async function getAllTask(_, res) {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
}

export async function getTaskById(req, res) {
  const { id } = req.params;
  const task = await prisma.task.findUnique({
    where: {
      id: Number(id),
    },
  });

  // IDに対してタスクが見つからない場合
  if (!task) {
    return res.status(404).json({ message: "Task not found." });
  }
  return res.json(task);
}

export async function createTask(req, res) {
  const { title, description } = req.body;

  // バリデーションチェック
  // titleのチェック
  if (!title || typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ message: "Title is required." });
  }
  // descriptionのチェック
  if (
    !description ||
    typeof description !== "string" ||
    description.trim() === ""
  ) {
    return res.status(400).json({ message: "Description is required." });
  }

  const newTask = await prisma.task.create({
    data: {
      title,
      description,
    },
  });

  res.status(201).json(newTask);
}

export async function updateTask(req, res) {
  const { id } = req.params;
  const { title, description, isDone } = req.body;

  // バリデーションチェック
  // idのチェック
  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ message: "ID is required." });
  }

  // titleのチェック
  if (!title || typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ message: "Title is required." });
  }

  // descriptionのチェック
  if (
    !description ||
    typeof description !== "string" ||
    description.trim() === ""
  ) {
    return res.status(400).json({ message: "Description is required." });
  }

  // isDoneのチェック
  if (isDone === undefined || typeof isDone !== "boolean") {
    return res.status(400).json({ message: "isDone is required." });
  }

  try {
    const updatedTask = await prisma.task.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        description,
        isDone,
      },
    });

    res.json(updatedTask);
  } catch (error) {
    // IDに対してタスクが見つからない場合
    res.status(404).json({ message: "Task not found." });
  }
}

export async function deleteTask(req, res) {
  const { id } = req.params;

  // バリデーションチェック
  // idのチェック
  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ message: "ID is required." });
  }

  try {
    await prisma.task.delete({
      where: {
        id: Number(id),
      },
    });

    res.status(204).json({ message: "Task deleted successfully." });
  } catch (error) {
    // IDに対してタスクが見つからない場合
    res.status(404).json({ message: "Task not found." });
  }
}
