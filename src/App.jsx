import React from 'react'
import "./App.css"
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { useState } from 'react'
import Main from './components/Main'

function App () {
  const [sidebarToggle, setSidebarToggle] = useState(false)
   return (
    <div className='flex'> 
      <Sidebar sidebarToggle={sidebarToggle}/>
      <Dashboard 
      sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}/>
        <Main sidebarToggle={sidebarToggle}/>
   </div>
   )
 }


export default App;

 