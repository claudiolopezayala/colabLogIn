import React, { useState } from "react";


const PopUpEditarMateria = ({ closePopup, materia, setMaterias }) => {
  const [nombre, setNombre] = useState(materia.nombre);
  const [maestro, setMaestro] = useState(materia.maestro);

  const handleGuardar = () => {
    setMaterias((prev) =>
      prev.map((m) =>
        m === materia ? { ...m, nombre, maestro } : m
      )
    );
    closePopup();
  };

  const handleEliminar = () => {
    setMaterias((prev) => prev.filter((m) => m !== materia));
    closePopup();
  };

  return (
    <div className="popup">
      <h2>Editar Materia</h2>
      <input
        type="text"
        placeholder="Nombre de la materia"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="input"
      />
      <input
        type="text"
        placeholder="Maestro"
        value={maestro}
        onChange={(e) => setMaestro(e.target.value)}
        className="input"
      />
      <button onClick={handleGuardar} className="popup-button">
        Guardar
      </button>
      <button onClick={handleEliminar} className="popup-cancel">
        Eliminar Materia
      </button>
      <button onClick={closePopup} className="popup-button">
        Cancelar
      </button>
    </div>
  );
};

export default PopUpEditarMateria;
