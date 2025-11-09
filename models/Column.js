import mongoose from "mongoose";

const columnSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

export default mongoose.model("Column", columnSchema);
