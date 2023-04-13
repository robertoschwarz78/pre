//import "./Admin.css";
import { Fragment } from 'react';
import Navegation from '../Navegation/Navegation.js'

export default function Contact(){
    return(
        <Fragment>
        <Navegation/>
        <main className="main-contact"> 
            <div className="main-contact-div d-flex flex-column justify-content-center align-items-center m-auto mt-5 w-75 h-75">
                <h2>Ingreso administradores</h2>
                <h3>Ingresar usuario y contraseña</h3>
                <form className="row g-3 p-4" action='' id="contactForm">
                    <div className="col-md-6">
                        <label htmlFor="nombre" className="form-label">Usuario</label>
                        <input type="text" className="form-control" id="nombre" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="correo" className="form-label">Contraseña</label>
                        <input type="email" className="form-control" id="correo" />
                    </div>  
                    <div className="col-12">
                        <button type="submit" className="btn boton-form colorW">Enviar</button>
                    </div>
                </form>
           </div>
        </main>
        </Fragment>
        
    )
} 

    /* Formulario no controlado*/
