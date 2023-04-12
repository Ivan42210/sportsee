import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Dashboard from './Pages/Dashboard'
import Profil from './Pages/Profil'
import './index.css'
import './Styles/Colors.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
    <Header/>
    <Routes>
      <Route exact path='/' element={<App />}/>
      <Route path='/dashboard/:id' element={<Dashboard />}/>
      <Route path='/profil' element={<Profil/>}/>
    </Routes>
    </Router>
  </React.StrictMode>,
)
