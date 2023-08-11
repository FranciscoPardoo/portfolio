
import "./proyectos.css";
import Cards from "./Cards";


function Proyectos(){
    return(
        <section className="proyectos" id="proyectos">
            <h2>Proyectos</h2>
            <div className="proyectos-cards">
                <Cards 
                imagen="/cap-bad.png" 
                titulo="Bad Bunny" 
                descripcion="Proyecto final para desarrollo web de Coderhouse. HTML + CSS + Bootstrap + SASS"/>
                <Cards 
                imagen="/cap-freres.png" 
                titulo="Freres" 
                descripcion="Proyecto final para JavaScript de Coderhouse. HTML + CSS + Bootstrap + JavaScript"/>
                <Cards 
                imagen="/cap-mapple.png"  
                titulo="Mapple" 
                descripcion="Proyecto final para React.JS de Coderhouse. HTML + CSS + Bootstrap + React.JS"/>
            </div>
        </section>
    )
}

export default Proyectos;