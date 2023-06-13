import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Dashboard from './Pages/Dashboard'
import Profil from './Pages/Profil'
import './index.css'
import './Styles/Colors.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Error from './Pages/Error'

/**
 * Renders the application with React.
 * @module index
 */





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
    <Header/>
    <Routes>
      <Route exact path='/' element={<App />}/>
      <Route path='/dashboard/:id' element={<Dashboard />}/>
      <Route path='/profil' element={<Profil/>}/>
      <Route path='*' element={<Error />}/>
    </Routes>
    </Router>
  </React.StrictMode>,
)
