"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

interface Employee {
  _id: string
  name: string
  email: string
  department: string
  manager: string
  status: string
}

const statusColor: Record<string, string> = {
  "Pending Manager": "bg-yellow-100 text-yellow-800",
  "Pending IT": "bg-blue-100 text-blue-800",
  "Training": "bg-purple-100 text-purple-800",
  "Completed": "bg-green-100 text-green-800",
}

export default function Dashboard() {
  const [employees, setEmployees] = useState<Employee[]>([])

  useEffect(() => {
    fetch("/api/employee")
      .then(res => res.json())
      .then(data => setEmployees(data))
  }, [])

  async function updateStatus(id: string, status: string) {
    await fetch("/api/employee", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status })
    })
    setEmployees(prev =>
      prev.map(emp => emp._id === id ? { ...emp, status } : emp)
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold text-white">Onboarding Dashboard</h1>
            <p className="text-slate-400 mt-1">Manage your employee onboarding pipeline</p>
          </div>
          <Link href="/create">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition">
              + Add Employee
            </button>
          </Link>
        </div>

        <div className="grid gap-6">
          {employees.length === 0 && (
            <p className="text-slate-400 text-center py-20">No employees yet. Click Add Employee to get started.</p>
          )}
          {employees.map(emp => (
            <div key={emp._id} className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-white">{emp.name}</h2>
                <p className="text-slate-400">{emp.email}</p>
                <p className="text-slate-400">Department: <span className="text-white">{emp.department}</span></p>
                <p className="text-slate-400">Manager: <span className="text-white">{emp.manager}</span></p>
                <span className={`mt-3 inline-block px-4 py-1 rounded-full text-sm font-semibold ${statusColor[emp.status] || "bg-gray-100 text-gray-800"}`}>
                  {emp.status}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => updateStatus(emp._id, "Pending IT")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition font-medium"
                >
                  Manager Approve
                </button>
                <button
                  onClick={() => updateStatus(emp._id, "Training")}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-xl transition font-medium"
                >
                  IT Assign Laptop
                </button>
                <button
                  onClick={() => updateStatus(emp._id, "Completed")}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-xl transition font-medium"
                >
                  Complete Onboarding
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}