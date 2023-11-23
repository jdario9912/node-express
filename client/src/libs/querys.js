const baseUrl = "http://localhost:3200";

export const getUsuariosQuery = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/usuarios`);
    const usuarios = await res.json();
    return usuarios.usuarios;
  } catch (error) {
    console.log(error);
  }
};

export const loginQuery = async (credenciales) => {
  try {
    const res = await fetch(`${baseUrl}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credenciales),
    });

    if (res.status >= 200 && res.status <= 299) {
      const login = await res.json();
      return login;
    }

    throw new Error("algo salio mal")
  } catch (error) {
    return error
  }
};
