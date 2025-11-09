import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { type: mongoose.Schema.Types.ObjectId, ref: "Column" }, // Reference to a Column
});

export default mongoose.model("Task", taskSchema);
