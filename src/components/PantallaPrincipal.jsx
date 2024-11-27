import {React, useState} from 'react';
import {PopUpCrearAlumno} from './PopUps/PopUpCrearAlumno';
import {PopUpCrearMateria} from './PopUps/PopUpCrearMateria'; 
import {PopUpAgregarMateria} from './PopUps/PopUpAgregarMateria';
import {PopUpAdministrarAlumno} from './PopUps/PopUpAdministrarAlumno';
import {PopUpEditarMateria} from './PopUps/PopUpEditarMateria';

const PantallaPrincipal = () => {
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
        <div>
            <h1>Bienvenidos</h1>

            <button onClick={() => openPopup('crearAlumno')}>Crear Alumno</button>
            <button onClick={() => openPopup('crearMateria')}>Crear Materia</button>

            <h2>Alumnos</h2>
      {alumnos.map((alumno, index) => (
        <div key={index}>
          {alumno.nombre} {alumno.apellidoPaterno} {alumno.apellidoMaterno}
          <button onClick={() => openPopup('agregarMateria', alumno)}>Agregar Materia</button>
          <button onClick={() => openPopup('administrarAlumno', alumno)}>Administrar Alumno</button>
        </div>
      ))}

      <h2>Materias</h2>
      {materias.map((materia, index) => (
        <div key={index}>
          {materia.nombre} - {materia.maestro}
          <button onClick={() => openPopup('editarMateria', null, materia)}>Editar</button>
        </div>
      ))}

      {popup === 'crearAlumno' && (
        <PopUpCrearAlumno closePopup={() => setPopup(null)} setAlumnos={setAlumnos} />
      )}
      {popup === 'crearMateria' && (
        <PopUpCrearMateria closePopup={() => setPopup(null)} setMaterias={setMaterias} />
      )}
      {popup === 'agregarMateria' && (
        <PopUpAgregarMateria
          closePopup={() => setPopup(null)}
          alumno={selectedAlumno}
          materias={materias}
          setAlumnos={setAlumnos}
        />
      )}
      {popup === 'administrarAlumno' && (
        <PopUpAdministrarAlumno
          closePopup={() => setPopup(null)}
          alumno={selectedAlumno}
          setAlumnos={setAlumnos}
        />
      )}
      {popup === 'editarMateria' && (
        <PopUpEditarMateria
          closePopup={() => setPopup(null)}
          materia={selectedMateria}
          setMaterias={setMaterias}
        />
      )}
    </div>
  );
}

export default PantallaPrincipal;