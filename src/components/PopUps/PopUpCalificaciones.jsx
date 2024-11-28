import React, { useState } from "react";

const PopUpCalificaciones = ({ closePopup, alumno, materia }) => {
  const [calificaciones, setCalificaciones] = useState({
    parcial1: "",
    parcial2: "",
    parcial3: "",
  });

  const handleGuardar = () => {
    console.log("Calificaciones guardadas:", calificaciones);
    closePopup();
  };

  return (
    <div className="popup">
      <h2>Calificar {materia.nombre}</h2>
      <h3>Alumno: {alumno.nombre}</h3>
      <input
        type="number"
        placeholder="Parcial 1"
        value={calificaciones.parcial1}
        onChange={(e) =>
          setCalificaciones({ ...calificaciones, parcial1: e.target.value })
        }
        className="input"
      />
      <input
        type="number"
        placeholder="Parcial 2"
        value={calificaciones.parcial2}
        onChange={(e) =>
          setCalificaciones({ ...calificaciones, parcial2: e.target.value })
        }
        className="input"
      />
      <input
        type="number"
        placeholder="Parcial 3"
        value={calificaciones.parcial3}
        onChange={(e) =>
          setCalificaciones({ ...calificaciones, parcial3: e.target.value })
        }
        className="input"
      />
      <button onClick={handleGuardar} className="popup-button">
        Guardar
      </button>
      <button onClick={closePopup} className="popup-cancel">
        Cancelar
      </button>
    </div>
  );
};

export default PopUpCalificaciones;
