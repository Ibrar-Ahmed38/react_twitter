import React from 'react'
import NewsFeed from './Components/NewsFeed'
import Sidebar from './Sidebar'
import './App.css'

const App = () => {
  return (
    <div className="app">
      
      {/* sidebar */}
      <Sidebar />


      {/* feed */}

    <NewsFeed />
      


      {/* Widgets*/}
    </div>
  )
}

export default App
