import PropTypes from 'prop-types';
import { Text } from './ErrorMsg.styled';

const ErrorMsg = ({ error }) => {
  return <Text>{error}</Text>;
};

ErrorMsg.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorMsg;
