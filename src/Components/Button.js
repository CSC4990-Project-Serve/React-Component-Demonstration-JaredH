// Another way of doing functions/react components
const Button = ({color, text, onClick}) => {

    // destructured the props object into color and text
    return (
        <button onClick={onClick}
                className={'btn'}
                style={{background: color}}>{text}</button>
    );
}

Button.defaultProps = {
    color: '#000',
    text: 'N/A',
}

export default Button;