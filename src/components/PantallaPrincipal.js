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
        selectedAlumno(alumno);
        selectedMateria(materia);
    };

    return (
        <div>
            <h1>Bienvenidos</h1>

            <button onClick={() => openPopup('crearAlumno')}>Crear Alumno</button>
            <button onClick={() => openPopup('crearMateria')}>Crear Materia</button>

            <h2>Alumnos</h2>
            {alumnos.map((alumno))}
        </div>
    )
}