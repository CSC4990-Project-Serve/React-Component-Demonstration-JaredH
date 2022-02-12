import PropTypes from "prop-types";

function Header(props) {
    return (
        <div>
            <h1 style={inlineHeadStyle}>{props.title}</h1>
        </div>
    )
}


// Inline styling object (Should import a css sheet instead)
const inlineHeadStyle = {
    color: 'blue',
    background: 'navajowhite',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
}


// Default values for props if nothing is given
Header.defaultProps = {
    title: "Default Header",
}

// Checks the type of prop sent to the component
// See error in console if this is rendered with a number
// Kind-of like a typescript way of doing things
Header.propTypes = {
    // title needs to be a string and is required
    title: PropTypes.string.isRequired,
}

export default Header;