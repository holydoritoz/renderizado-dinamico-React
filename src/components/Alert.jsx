import PropTypes from 'prop-types'
import Badge from 'react-bootstrap/Badge';

function Alert({ color, message }) {
return (
    <>
    <Badge bg={ color }>{ message }</Badge>
    </>
)
}

Alert.propTypes = {
    message: PropTypes.string,
    color: PropTypes.string,
};

export default Alert;