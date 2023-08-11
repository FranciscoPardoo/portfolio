import SkillsCards from "./SkillsCards";
import "./habilidades.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faBootstrap, faSass, faJs, faReact, faFigma, faGithub, faGitAlt } from '@fortawesome/free-brands-svg-icons';

function Habilidades(){
    
    return(
        <section className="skill" id="habilidades">
            <h2>Habilidades</h2>
            <div className="skill-card">
                <SkillsCards habilidad="HTML" icono={<FontAwesomeIcon icon={faHtml5} fade size="5x" style={{color: "#ff8800",}} />} />
                <SkillsCards habilidad="CSS" icono={<FontAwesomeIcon icon={faCss3Alt} fade size="5x" style={{color: "#0084ff",}} />}/>
                <SkillsCards habilidad="Bootstrap" icono={<FontAwesomeIcon icon={faBootstrap} fade size="5x" style={{color: "#8c00ff",}} />} />
                <SkillsCards habilidad="SASS" icono={<FontAwesomeIcon icon={faSass} fade size="5x" style={{color: "#d78ecd",}} />}/> 
                <SkillsCards habilidad="JavaScript" icono={<FontAwesomeIcon icon={faJs} fade size="5x" style={{color: "#ffe014",}} />} />
                <SkillsCards habilidad="ReactJS" icono={<FontAwesomeIcon icon={faReact} fade size="5x" style={{color: "#00b3ff",}} />} />
                <SkillsCards habilidad="Figma" icono={<FontAwesomeIcon icon={faFigma} fade size="5x" style={{color: "#616161",}} />} />
                <SkillsCards habilidad="GIT" icono={<FontAwesomeIcon icon={faGitAlt} fade size="5x" style={{color: "#ff5900",}} />}/>
                <SkillsCards habilidad="GitHub" icono={<FontAwesomeIcon icon={faGithub} fade size="5x" style={{color: "#000000",}} />} />
            </div>
        </section>
    )
}

export default Habilidades;