import { useEffect, useState } from "react";
import { getUsuariosQuery, loginQuery } from "./libs/querys";
import { Button } from "@nextui-org/react";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [credenciales, setCredenciales] = useState({});

  useEffect(() => {
    (async () => {
      setUsuarios(await getUsuariosQuery());
    })();
  }, []);

  const login = async (e) => {
    e.preventDefault();
    await loginQuery(credenciales);
  };

  const onChangeHandler = (e) => {
    setCredenciales({ ...credenciales, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => onChangeHandler(e)}
        />
        <Button color="primary">login</Button>
      </form>

      {usuarios && (
        <>
          {usuarios.map((u) => (
            <div key={u.id}>
              <p>{u.nombre}</p>
              <p>{u.email}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
