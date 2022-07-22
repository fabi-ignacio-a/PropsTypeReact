import "./styles.css";
import PropTypes from "prop-types";

let Greetings = ({ name, years, profesion }) => {
  return (
    <p>
      Hola mi nombres es {name}, tengo {years} años de experiencia como{" "}
      {profesion}
    </p>
  );
};

let profesions = ["programador", "diseñador", "QA"];

export default function App() {
  return (
    <div className="App">
      <h1>Mi aplicación</h1>
      <Greetings
        name="Juliana"
        //years={2}
        profesion="QA"
      />
    </div>
  );
}

/*Las props pueden ser bool, object o func
Para este caso se asume que solo pueden existir tres profesiones
1. Programadores
2. Diseñadores
3. QA
*/

//No es obligatorio usar los propTypes
Greetings.propTypes = {
  name: PropTypes.string.isRequired,
  years: PropTypes.number,
  profesion: PropTypes.oneOf(profesions).isRequired
};

//Se pueden definir props por defecto
Greetings.defaultProps = {
  years: 0
};
