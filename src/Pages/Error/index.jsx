import { NavLink } from "react-router-dom"
import './Error.css'

export default function Error(){
    return(
        <main className="error-main">
            <h2>Error 404</h2>
            <span>il semble que cette page n'existe pas</span>
            <NavLink to={'/'}>Retour à la page d'accueil</NavLink>
        </main>
    )
}