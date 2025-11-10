import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

// ➕ Create new task
router.post("/", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📋 Get all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find().populate("status");
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔄 Update task status (move card)
router.put("/:id", async (req, res) => {
  try {
    const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ❌ Delete task
router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;