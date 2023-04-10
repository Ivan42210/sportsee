import { Link } from 'react-router-dom'
import './App.css'







function App() {

 
  
 
 
  return (
    <div className="App">
      <ul>
        <li>
          <Link to={'/dashboard/12'}>Tableau de bord du profil 12</Link>
        </li>
        <li>
          <Link to={'/dashboard/18'}>Tableau de bord du profil 18</Link>
        </li>
      </ul>
    </div>
  )
}

export default App
