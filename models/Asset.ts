import mongoose from "mongoose"

const AssetSchema = new mongoose.Schema({
  assetType: String,
  serialNumber: String,
  assignedTo: String,
  status: {
    type: String,
    default: "Available"
  }
})

export default mongoose.models.Asset || mongoose.model("Asset", AssetSchema)