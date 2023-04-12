import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import '../Styles/Header.css'

export default function Header(){
    return(
        <nav className="navbar">
            <header className="navbar_header">
                <img src={logo} alt="Sportsee"/>

            </header>
            <section className="navbar_menu">
                <Link className='text-light navbar-link' to={'/'}>Accueil</Link>
                <Link className='text-light navbar-link' to={'/profil'}>Profil</Link>
            </section>
        </nav>
    )
}