import React, { useState } from "react";
import '../styles/LandingPage.css';
import PopUpCrearAlumno from "../components/PopUps/PopUpCrearAlumno";
import PopUpCalificaciones from "../components/PopUps/PopUpCalificaciones";
import PopUpCrearMateria from "../components/PopUps/PopUpCrearMateria";
import PopUpAgregarMateria from "../components/PopUps/PopUpAgregarMateria";
import PopUpAdministrarAlumno from "../components/PopUps/PopUpAdministrarAlumno";
import PopUpEditarMateria from "../components/PopUps/PopUpEditarMateria";

const LandingPage = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [materias, setMaterias] = useState([]);
  const [popup, setPopup] = useState(null);
  const [selectedAlumno, setSelectedAlumno] = useState(null);
  const [selectedMateria, setSelectedMateria] = useState(null);

  const openPopup = (type, alumno = null, materia = null) => {
    setPopup(type);
    setSelectedAlumno(alumno);
    setSelectedMateria(materia);
  };

  return (
    <div className="landing-container">
      <h1 className="landing-title">Bienvenido</h1>
      <div className="button-container">
        <button className="button" onClick={() => openPopup("crearAlumno")}>
          Crear Alumno
        </button>
        <button className="button" onClick={() => openPopup("crearMateria")}>
          Crear Materia
        </button>
      </div>

      <h2 className="section-title">Alumnos</h2>
      {alumnos.map((alumno, index) => (
        <div key={index} className="item">
          {alumno.nombre} {alumno.apellidoPaterno} {alumno.apellidoMaterno}
          <button
            className="action-button"
            onClick={() => openPopup("agregarMateria", alumno)}
          >
            Agregar Materia
          </button>
          <button
            className="action-button"
            onClick={() => openPopup("administrarAlumno", alumno)}
          >
            Administrar Alumno
          </button>
        </div>
      ))}

      <h2 className="section-title">Materias</h2>
      {materias.map((materia, index) => (
        <div key={index} className="item">
          {materia.nombre} - {materia.maestro}
          <button
            className="action-button"
            onClick={() => openPopup("editarMateria", null, materia)}
          >
            Editar
          </button>
        </div>
      ))}

      {popup === "crearAlumno" && (
        <PopUpCrearAlumno closePopup={() => setPopup(null)} setAlumnos={setAlumnos} />
      )}
      {popup === "crearMateria" && (
        <PopUpCrearMateria closePopup={() => setPopup(null)} setMaterias={setMaterias} />
      )}
      {popup === "agregarMateria" && (
        <PopUpAgregarMateria
          closePopup={() => setPopup(null)}
          alumno={selectedAlumno}
          materias={materias}
          setAlumnos={setAlumnos}
        />
      )}
      {popup === "administrarAlumno" && (
        <PopUpAdministrarAlumno
          closePopup={() => setPopup(null)}
          alumno={selectedAlumno}
          setAlumnos={setAlumnos}
        />
      )}
      {popup === "editarMateria" && (
        <PopUpEditarMateria
          closePopup={() => setPopup(null)}
          materia={selectedMateria}
          setMaterias={setMaterias}
        />
      )}
    </div>
  );
};

export default LandingPage;
