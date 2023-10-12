import PropTypes from 'prop-types'
import Badge from 'react-bootstrap/Badge';

function Alert({ color, message }) {
return (
    <>
    <Badge
    bg={ color }
    className="p-4 mt-2"
    >{ message }</Badge>
    </>
)
}

Alert.propTypes = {
    message: PropTypes.string,
    color: PropTypes.string,
};

export default Alert;