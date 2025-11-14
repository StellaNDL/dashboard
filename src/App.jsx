
import React, { useState } from 'react'
import "./App.css"
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Main from './components/Main'

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false)

  return (
    <div className="flex">

      {/* Sidebar on the left */}
      <Sidebar sidebarToggle={sidebarToggle} />

      {/* Right side area: Navbar + Main content */}
      <div className={`flex flex-col w-full ${sidebarToggle ? "" : "ml-64"}`}>

        {/* Navbar */}
        <Dashboard
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />

        {/* Main content */}
        <Main sidebarToggle={sidebarToggle} />

      </div>
    </div>
  )
}

export default App


 