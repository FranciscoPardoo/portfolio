import "./button.css"

// eslint-disable-next-line react/prop-types
function Button({icon, text}) {
    return (
            <button>{icon}{text}</button>
)
}

export default Button;