import React, { useEffect, useState } from "react";
import firebase from "../firebase";

function useAutenticacion() {
  const [usuarioAutenticado, guardarUsuarioAutenticado] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged((usuario) => {
      if (usuario) {
        guardarUsuarioAutenticado(usuario);
      } else {
        guardarUsuarioAutenticado(null);
      }
    });
    return () => unsubscribe();
  });

  return usuarioAutenticado;
}

export default useAutenticacion;
