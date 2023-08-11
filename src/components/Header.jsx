import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoon} from "@fortawesome/free-solid-svg-icons"

function Header() {
    return (
        <header>            
            <nav className='navegacion'>
                <ul className='navegacion-ul'>
                    <li className='navegacion-li'><a href="#"></a>Inicio</li>
                    <li className='navegacion-li'><a href='#proyectos'></a>Proyectos</li>
                    <li className='navegacion-li'><a href="#habilidades"></a>Habilidades</li>
                    <li className='navegacion-li'><a href="#contacto"></a>Contacto</li>
                </ul>
            </nav>
            <button className='navegacion-button'><FontAwesomeIcon icon={faMoon} size="xl" style={{color: "#ffffff",}} /></button>
        </header>
)
}

export default Header