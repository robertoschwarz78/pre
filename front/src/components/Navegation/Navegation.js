import {Link} from "react-router-dom";
import './Navegation.css';

export default function Navegation() {
    return(
       <header>
            <nav className="navbar navbar-expand-sm w-100 bg-light">
                <div className="container-fluid">
                    <div class="navbar-brand">
                        <img src="./imagenes/logo.jpg" alt="Bootstrap" width="28" height="28"></img>
                        <span id="logo"> NAV</span> Bar
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav nav-pills">
                            <li className="nav-item"> 
                                <Link className="nav-link" to="/">Home</Link>  
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/menu">Menú</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contacto</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">Admin</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
       </header>
    )
}
