import "./Button.css"

const Button = ({ iconOnly, text, icon, onClick }) => {
    return iconOnly ? (
        <button
            type="button"
            className={`icon-only ico-${icon}`}
            onClick={onClick}
        >
            {text}
        </button>
    ) : (
        <button
            type='button'
            className={`btn ${icon ? `ico-${icon}` : ''}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button;