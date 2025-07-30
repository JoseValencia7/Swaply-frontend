import React, { useState } from 'react';
import './UserForm.css';

function UserForm() {
  // Estados para almacenar los valores ingresados en el formulario
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [confirmarClave, setConfirmarClave] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [ciudad, setCiudad] = useState('');
  
  // Estado para mostrar mensajes de éxito o error
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState(''); // "exito" o "error"

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas: todos los campos deben estar llenos
    if (!nombre || !correo || !clave || !confirmarClave || !fechaNacimiento || !ciudad) {
      setMensaje(' Por favor completa todos los campos');
      setTipoMensaje('error');
      return;
    }

    // Verificar que las contraseñas coincidan
    if (clave !== confirmarClave) {
      setMensaje(' Las contraseñas no coinciden');
      setTipoMensaje('error');
      return;
    }

    // Si todo está correcto, mostrar mensaje de éxito
    setMensaje(' Registro exitoso');
    setTipoMensaje('exito');

    // Limpiar los campos del formulario
    setNombre('');
    setCorreo('');
    setClave('');
    setConfirmarClave('');
    setFechaNacimiento('');
    setCiudad('');
  };

  return (
    <div className="container">
      {/* Logotipo de la app */}
      <img src="/logo.png" alt="Logo" className="logo" />

      {/* Título principal */}
      <h1>Registrarse</h1>
      <p>¿Ya estás registrado? <a href="#">Iniciar sesión</a></p>

      {/* Formulario de registro */}
      <form onSubmit={handleSubmit}>
        {/* Campo: Nombre completo */}
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        {/* Campo: Correo electrónico */}
        <label htmlFor="correo">Correo electrónico</label>
        <input
          type="email"
          id="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        {/* Campo: Contraseña */}
        <label htmlFor="clave">Contraseña</label>
        <input
          type="password"
          id="clave"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
        />

        {/* Campo: Confirmar contraseña */}
        <label htmlFor="confirmarClave">Confirmar contraseña</label>
        <input
          type="password"
          id="confirmarClave"
          value={confirmarClave}
          onChange={(e) => setConfirmarClave(e.target.value)}
        />

        {/* Campo: Fecha de nacimiento */}
        <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
        <input
          type="date"
          id="fechaNacimiento"
          value={fechaNacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
        />

        {/* Campo: Ciudad con sugerencias */}
        <label htmlFor="ciudad">Ciudad</label>
        <input
          list="ciudades"
          id="ciudad"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
        />
        <datalist id="ciudades">
          <option value="Bogotá" />
          <option value="Medellín" />
          <option value="Cali" />
          <option value="Barranquilla" />
          <option value="Cartagena" />
          <option value="Bucaramanga" />
          <option value="Manizales" />
        </datalist>

        {/* Botón para enviar el formulario */}
        <button type="submit">Registrar</button>
      </form>

      {/* Mostrar mensaje de éxito o error */}
      {mensaje && (
        <p className={`mensaje ${tipoMensaje}`}>
          {mensaje}
        </p>
      )}
    </div>
  );
}

export default UserForm;

