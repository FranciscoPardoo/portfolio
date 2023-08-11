import "./cards.css";

// eslint-disable-next-line react/prop-types
function Cards( { imagen, titulo, descripcion } ){

    return(
        <div className="card">
            <img src={imagen} alt="screen de proyectos" />
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <button>github</button>
        </div>
    )
}

export default Cards;