import { connectDB } from "@/lib/db"
import Employee from "@/models/Employee"
import { NextResponse } from "next/server"

export async function GET() {
  await connectDB()
  const employees = await Employee.find()
  return NextResponse.json(employees)
}

export async function POST(req: Request) {
  await connectDB()
  const body = await req.json()
  const employee = await Employee.create(body)
  return NextResponse.json(employee)
}

export async function PUT(req: Request) {
  await connectDB()
  const body = await req.json()
  const { id, status } = body
  const employee = await Employee.findByIdAndUpdate(id, { status }, { new: true })
  return NextResponse.json(employee)
}