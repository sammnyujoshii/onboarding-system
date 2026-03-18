"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CreateEmployee() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [department, setDepartment] = useState("")
  const [manager, setManager] = useState("")
  const router = useRouter()

  async function handleSubmit() {
    await fetch("/api/employee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, department, manager })
    })
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-10">
      <div className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-2">Add New Employee</h1>
        <p className="text-slate-400 mb-8">Fill in the details to start onboarding</p>

        <input
          className="w-full bg-white/10 border border-white/20 text-white placeholder-slate-400 p-3 rounded-xl mb-4 focus:outline-none focus:border-blue-500"
          placeholder="Full Name"
          onChange={e => setName(e.target.value)}
        />
        <input
          className="w-full bg-white/10 border border-white/20 text-white placeholder-slate-400 p-3 rounded-xl mb-4 focus:outline-none focus:border-blue-500"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="w-full bg-white/10 border border-white/20 text-white placeholder-slate-400 p-3 rounded-xl mb-4 focus:outline-none focus:border-blue-500"
          placeholder="Department"
          onChange={e => setDepartment(e.target.value)}
        />
        <input
          className="w-full bg-white/10 border border-white/20 text-white placeholder-slate-400 p-3 rounded-xl mb-6 focus:outline-none focus:border-blue-500"
          placeholder="Manager Name"
          onChange={e => setManager(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl font-semibold transition"
        >
          Create Employee
        </button>
      </div>
    </div>
  )
}