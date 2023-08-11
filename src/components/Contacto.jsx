import "./contacto.css"
import Button from "./Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareBehance, faGithub, faLinkedin, } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contacto(){
    return(
        <section className="contacto" id="contacto">
            <h2>Contacto</h2>
            <div className="contacto-buttons">
                <Button text="Linkedin" icon={<FontAwesomeIcon icon={faLinkedin} size="2x" style={{color: "#005eff", }} />}/>
                <Button text="Github" icon={<FontAwesomeIcon icon={faGithub} size="2x" style={{color: "#000000", }} />}/>
                <Button text="Behance" icon={<FontAwesomeIcon icon={faSquareBehance} size="2x" style={{color: "#003eff", }} />}/>
                <Button text="Mail" icon={<FontAwesomeIcon icon={faEnvelope} size="2x" style={{color: "#d1d1d1", }} />}/>
            </div>
        </section>
    )
}

export default Contacto;