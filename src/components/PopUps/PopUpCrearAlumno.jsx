import React, { useState } from "react";

const PopUpCrearAlumno = ({ closePopup, setAlumnos }) => {
  const [nombre, setNombre] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [edad, setEdad] = useState("");

  const handleCrear = () => {
    setAlumnos((prev) => [
      ...prev,
      { nombre, apellidoPaterno, apellidoMaterno, edad },
    ]);
    closePopup();
  };

  return (
    <div style={styles.popup}>
      <h2>Crear Alumno</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Apellido Paterno"
        value={apellidoPaterno}
        onChange={(e) => setApellidoPaterno(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Apellido Materno"
        value={apellidoMaterno}
        onChange={(e) => setApellidoMaterno(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Edad"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleCrear} style={styles.button}>
        Crear
      </button>
      <button onClick={closePopup} style={styles.cancelButton}>
        Cancelar
      </button>
    </div>
  );
};

const styles = {
  popup: {
    position: "flex",
    top: "50%",
    left: "10%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "gray",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  },
  input: {
    margin: "10px 0",
    padding: "10px",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#EA4C89",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
  },
  cancelButton: {
    padding: "10px 20px",
    backgroundColor: "gray",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default PopUpCrearAlumno;
