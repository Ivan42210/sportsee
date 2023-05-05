import { Link } from "react-router-dom"

/**
 * Component representing the user profile page.
 * @function
 * @returns {JSX.Element}
 */


export default function Profil(){
    return(
        <section>
             <ul>
        <li>
          <Link className="text-light" to={'/dashboard/12'}>Tableau de bord du profil 12</Link>
        </li>
        <li>
          <Link className="text-light" to={'/dashboard/18'}>Tableau de bord du profil 18</Link>
        </li>
      </ul>
        </section>
    )
}