import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-10">
      <div className="max-w-2xl w-full text-center">

        <h1 className="text-5xl font-bold text-white mb-4">
          Employee Onboarding System
        </h1>
        <p className="text-slate-400 text-lg mb-12">
          Automate your entire employee onboarding pipeline from hire to complete.
        </p>

        <div className="grid grid-cols-2 gap-6">
          <Link href="/create">
            <div className="bg-blue-600 hover:bg-blue-700 transition rounded-2xl p-8 cursor-pointer">
              <div className="text-4xl mb-4">👤</div>
              <h2 className="text-white text-xl font-bold">Add Employee</h2>
              <p className="text-blue-200 mt-2 text-sm">Create a new employee and start the onboarding process</p>
            </div>
          </Link>

          <Link href="/dashboard">
            <div className="bg-emerald-600 hover:bg-emerald-700 transition rounded-2xl p-8 cursor-pointer">
              <div className="text-4xl mb-4">📊</div>
              <h2 className="text-white text-xl font-bold">Dashboard</h2>
              <p className="text-emerald-200 mt-2 text-sm">Track and manage all employee onboarding statuses</p>
            </div>
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-3xl mb-2">✅</div>
            <p className="text-white font-semibold">Manager Approval</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-3xl mb-2">💻</div>
            <p className="text-white font-semibold">Laptop Assignment</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-3xl mb-2">🎓</div>
            <p className="text-white font-semibold">Training & Completion</p>
          </div>
        </div>

      </div>
    </div>
  )
}