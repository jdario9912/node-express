import FormAgregarContacto from "./components/form-agregar-contacto";
import Contactos from "./components/contactos";

function App() {
  return (
    <div className="container p-2">
      <div className="mx-auto">
        <FormAgregarContacto />
        <Contactos />
      </div>
    </div>
  );
}

export default App;
