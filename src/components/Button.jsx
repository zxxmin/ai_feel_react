import "./Button.css"

const Button = ({ text, icon, onClick }) => {
    return (
        <button
            type='button'
            className={`btn ${icon ? `ico-${icon}` : ''}`}
            onClick={onClick}
        >{text}</button>
    )
}

export default Button;