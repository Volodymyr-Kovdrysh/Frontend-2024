import PropTypes from "prop-types";

const Button = ({
                    version='primary',
                    type='button',
                    isDisabled=false,
                    children
                }) => {
    return (
        <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool
}
export default Button;
