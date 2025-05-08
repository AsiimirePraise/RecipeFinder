import React from 'react'
import Sidebar from "./components/sidebar"
import RecipeCard from "./components/card"

function App() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />
      <div>
      <RecipeCard />
      </div>
       </div>
  )
}

export default App