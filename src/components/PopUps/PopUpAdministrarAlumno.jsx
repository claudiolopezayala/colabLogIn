import React from "react";

const PopUpAdministrarAlumno = ({ closePopup, alumno, setAlumnos, openPopup }) => {
  const handleEliminarMateria = (materia) => {
    setAlumnos((prev) =>
      prev.map((a) =>
        a === alumno
          ? {
              ...a,
              materias: a.materias.filter((m) => m !== materia),
            }
          : a
      )
    );
  };

  const handleEliminarAlumno = () => {
    setAlumnos((prev) => prev.filter((a) => a !== alumno));
    closePopup();
  };

  return (
    <div className="popup">
      <h2>Administrar {alumno.nombre}</h2>
      <h3>Materias Asignadas</h3>
      {alumno.materias?.map((materia, index) => (
        <div key={index} className="popup-item">
          {materia.nombre}
          <button
            onClick={() => handleEliminarMateria(materia)}
            className="popup-cancel"
          >
            Eliminar
          </button>
          <button
            onClick={() => openPopup("calificaciones", alumno, materia)}
            className="popup-button"
          >
            Calificar
          </button>
        </div>
      ))}
      <button onClick={handleEliminarAlumno} className="popup-cancel">
        Eliminar Alumno
      </button>
      <button onClick={closePopup} className="popup-button">
        Cerrar
      </button>
    </div>
  );
};

export default PopUpAdministrarAlumno;
