import express from "express";
import Column from "../models/Column.js";

const router = express.Router();

// ➕ Create new column
router.post("/", async (req, res) => {
  try {
    const column = await Column.create(req.body);
    res.status(201).json(column);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📋 Get all columns
router.get("/", async (req, res) => {
  try {
    const columns = await Column.find();
    res.json(columns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;