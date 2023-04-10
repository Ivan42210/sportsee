import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Dashboard from './Pages/Dashboard'
import './index.css'
import './Styles/Colors.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route exact path='/' element={<App />}/>
      <Route path='/dashboard/:id' element={<Dashboard />}/>
    </Routes>
    </Router>
  </React.StrictMode>,
)
