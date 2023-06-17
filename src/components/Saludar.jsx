import { Text } from "react-native";
import PropTypes from "prop-types";


export default function Saludar(props) {
    const { firsname, lastname } = props;
    return <Text>Hola ${ firsname } ${ lastname }</Text>
}

Saludar.propTypes = {
    firsname: PropTypes.string,
    lastname: PropTypes.string
}

Saludar.defaultProps = {
    firsname: 'World',
    lastname: 'Mundo'
}
