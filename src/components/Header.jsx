import PropTypes from "prop-types";

const Header = ({
                    text="Опитувальник UI",
                    textColor="#ff6095",
                    bgColor="rgba(0,0,0,0.4)"}) => {
    const MyStyles = {
        backgroundColor: bgColor,
        color: textColor,
    };
    return (
        <header style={MyStyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    );
};


Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}


export default Header;
