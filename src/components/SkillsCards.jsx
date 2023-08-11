import "./skillsCards.css";

// eslint-disable-next-line react/prop-types
function SkillsCards( { icono, habilidad } ){

    return(
        <div className="skills">
            <div>{icono}</div>
            <h4>{habilidad}</h4>
        </div>
    )
}

export default SkillsCards;