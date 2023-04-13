import "./Home.css";
import {Fragment} from 'react';
import Navegation from '../Navegation/Navegation.js';
import CaruselPrimero from "./Carusel.js";
import {CaruselSiguientes} from "./Carusel.js";

export default function Home() {

    return(
        <Fragment>
            <Navegation />
            {/* <header className="home-arriba container-fluid d-flex flex-column justify-content-center align-items-center">
                <div className="home-recuadro d-flex flex-column justify-content-center">
                </div>
            </header> */}

            <header class="container portada">
                <h3>
                Bienvenido al mejor bar de la cuadra.
                </h3>

                <p>Un espacio con wifi y enchufes para que puedas seguir conectado.</p>

                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">

                        <CaruselPrimero imagen="./imagenes/hamb.jpg" texto="imagen de una hamburguesa"/>
                        <CaruselSiguientes imagen="./imagenes/pancho.jpg" texto="imagen de un pancho"/>
                        <CaruselSiguientes imagen="./imagenes/coca.jpg" texto="imagen de un vaso con coca"/>

                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Anterior</span>
                        </button>

                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Siguiente</span>
                        </button>
                    </div>
                </div>
                <p>
                    Arriba en la barra del navegador podes mirar el menú y elegir los platos.
                </p>
              
            </header>

        </Fragment>
 
    )
}
