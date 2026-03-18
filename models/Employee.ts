import mongoose from "mongoose"

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  department: String,
  manager: String,
  laptop: String,
  status: {
    type: String,
    default: "Pending Manager"
  },
  joinedAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.models.Employee || mongoose.model("Employee", EmployeeSchema)