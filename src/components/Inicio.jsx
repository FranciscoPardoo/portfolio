import "./inicio.css"


function Inicio(){
    return(
        <section className="inicio">
            <div>
                <h1 className="inicio-title">
                    <p>Hola, 👋</p>
                    <p>Me llamo Francisco.</p>
                    <p>Soy desarrollador</p>
                    <p>Front-End.</p>
                </h1>
            </div>
                <img className="inicio-img" src="src/assets/avatar.png" alt="avatar de inicio" />
        </section>
    )
}

export default Inicio;