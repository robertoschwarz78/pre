import {useEffect, useState} from 'react';
import { Fragment } from 'react';

import "./Menu.css";
import Navegation from '../Navegation/Navegation';
import Filters from "../Filters/Filters";
import SectionCards from "../SectionCards/SectionCards";

export default function Characters() {
    let [datos,setDatos]=useState([]);
    let [infoCompleta,setInfoCompleta]=useState([]);
 
    const mostrarValor =(event)=>{

        // se fija si esta o no checked
        // aca el tema es que cada vez se va achicando mas el set de datos. si uno marca mujer y luego hombre, queda vacio.
        // en el caso de desactivar la funcion de "origin unknown" salta al "else" y ahi usa todos los datos nuevamente.


        if(event.target.checked){
            let datoFiltro=event.target.value;
            if(datoFiltro === "Alive" || datoFiltro === "Dead"){
            let resultado = datos.filter((ch)=> ch.status === datoFiltro) //nuevo array con solo los elementos que cumplen la condicion
                setDatos(resultado)
            }
            if(datoFiltro === "Female" || datoFiltro === "Male"){
                let resultado = datos.filter((ch)=> ch.gender === datoFiltro)
                setDatos(resultado)
            }
            if(datoFiltro === "unknown"){
                let resultado = datos.filter((ch)=> ch.origin.name === datoFiltro)
                setDatos(resultado)
            } 
                
        } else {
            setDatos(infoCompleta)
        }
    }
    const traerInfo = async()=>{
        let info = await fetch("https://rickandmortyapi.com/api/character") // aca va la api propia
                        .then(respuesta => respuesta.json())
                        .catch(error => console.log("HAY UN ERROR!!" +error))
        return info
    }


    //saco la funcion por fuera para que lo pueda utilizar en mi funcion del evento
    const mostarInfo = async ()=>{
        let dato= await traerInfo()
        let infoPersonajes= dato.results
        // console.log(infoPersonajes)
        setDatos(infoPersonajes)
        setInfoCompleta(infoPersonajes)
    }
    //Se ejecuta cuando se renderiza la pagina
    useEffect(()=>{
        mostarInfo() 
     },[])
    
     return(
        <Fragment>
            <Navegation />
            <section className='sector-filtros'>
                <h2>Filtros</h2>
                <div className='filtros d-flex justify-content-between flex-wrap'>
                    <Filters nombreFiltro="Comida" datoFiltro="Alive" muestraValor={mostrarValor}/> 
                    <Filters nombreFiltro="Bebida" datoFiltro="Dead" muestraValor={mostrarValor}/> 
                    <Filters nombreFiltro="Postres" datoFiltro="Female" muestraValor={mostrarValor}/> 
                </div>
            </section>
                          
            <SectionCards datos={datos} />
        </Fragment>
    )
   
}
