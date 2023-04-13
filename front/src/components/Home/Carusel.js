
export default function CaruselPrimero ({imagen,texto}){
    return(
            // <Link to={infoPath}>
            //     <button className="boton-home">{dato}</button>
            // </Link>
            <div class="carousel-item active" data-bs-interval="2000">
                <img src={imagen} class="d-block w-100" alt={texto} />
            </div>
    )
} 

export function CaruselSiguientes ({imagen,texto}){
    return(
            <div class="carousel-item" data-bs-interval="2000">
                <img src={imagen} class="d-block w-100" alt={texto} />
            </div>
    )
} 


//import {Link} from "react-router-dom";

// <Link to={infoPath}>
//     <button className="boton-home">{dato}</button>
// </Link>

