import { connectDB } from "@/lib/db"
import Asset from "@/models/Asset"
import { NextResponse } from "next/server"

export async function GET() {
  await connectDB()
  const assets = await Asset.find()
  return NextResponse.json(assets)
}

export async function POST(req: Request) {
  await connectDB()
  const body = await req.json()
  const asset = await Asset.create(body)
  return NextResponse.json(asset)
}