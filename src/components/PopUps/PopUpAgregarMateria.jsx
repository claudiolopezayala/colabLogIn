import React from "react";


const PopUpAgregarMateria = ({ closePopup, alumno, materias, setAlumnos }) => {
  const handleAgregar = (materia) => {
    setAlumnos((prev) =>
      prev.map((a) =>
        a === alumno
          ? { ...a, materias: [...(a.materias || []), materia] }
          : a
      )
    );
    closePopup();
  };

  return (
    <div className="popup">
      <h2>Agregar Materia para {alumno.nombre}</h2>
      {materias.map((materia, index) => (
        <div key={index} className="popup-item">
          {materia.nombre} - {materia.maestro}
          <button
            onClick={() => handleAgregar(materia)}
            className="popup-button"
          >
            Agregar
          </button>
        </div>
      ))}
      <button onClick={closePopup} className="popup-cancel">
        Cancelar
      </button>
    </div>
  );
};

export default PopUpAgregarMateria;
