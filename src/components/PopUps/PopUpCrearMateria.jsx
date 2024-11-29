import React, { useState } from 'react';
function PopUpCrearMateria({ closePopup, setMaterias }) {
  const [formData, setFormData] = useState({ nombre: '', maestro: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setMaterias((prev) => [...prev, formData]);
    closePopup();
  };

  return (
    <div className="popup">
      <h2>Crear Materia</h2>
      <input name="nombre" placeholder="Nombre de la materia" onChange={handleChange} />
      <input name="maestro" placeholder="Maestro" onChange={handleChange} />
      <button onClick={handleSubmit}>Crear</button>
      <button onClick={closePopup}>Cerrar</button>
    </div>
  );
}

export default PopUpCrearMateria;
