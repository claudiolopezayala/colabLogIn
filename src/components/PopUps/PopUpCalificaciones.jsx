import React, { useState, useEffect } from "react";

const PopUpCalificaciones = ({ closePopup, alumno, materia, handleGuardarCalificaciones }) => {
  // Inicializamos las calificaciones del alumno y materia
  const [calificaciones, setCalificaciones] = useState({
    parcial1: "",
    parcial2: "",
    parcial3: "",
  });

  // Cargamos las calificaciones guardadas cuando el popup se abre
  useEffect(() => {
    if (materia.calificaciones) {
      setCalificaciones(materia.calificaciones);
    }
  }, [materia]);

  const handleGuardar = () => {
    console.log(`Calificaciones de ${alumno.nombre} en ${materia.nombre}:`, calificaciones);
    handleGuardarCalificaciones(alumno, materia, calificaciones);
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
          setCalificaciones({
            ...calificaciones,
            parcial1: e.target.value,
          })
        }
        className="input"
        min="0"
        max="10"
      />
      <input
        type="number"
        placeholder="Parcial 2"
        value={calificaciones.parcial2}
        onChange={(e) =>
          setCalificaciones({
            ...calificaciones,
            parcial2: e.target.value,
          })
        }
        className="input"
        min="0"
        max="10"
      />
      <input
        type="number"
        placeholder="Parcial 3"
        value={calificaciones.parcial3}
        onChange={(e) =>
          setCalificaciones({
            ...calificaciones,
            parcial3: e.target.value,
          })
        }
        className="input"
        min="0"
        max="10"
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
