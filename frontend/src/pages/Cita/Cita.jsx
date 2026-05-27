import './Cita.css';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Cita() {
  const navigate = useNavigate();

  // Mantenemos el usuario provisional para poder probar el flujo sin bloquearnos con el login
  if (!localStorage.getItem("id_paciente")) {
    localStorage.setItem("id_paciente", "1"); 
  }

  const [datos, setDatos] = useState({
    fecha: "",
    hora: "",
    motivo: "",
    id_medico: ""
  });

  // Lista de médicos provisional (luego se conectará con el backend)
  const [medicos, setMedicos] = useState([
    { id_medico: 1, nombre: "Dr. Juan Pérez (General)" },
    { id_medico: 2, nombre: "Dra. María López (Pediatría)" },
    { id_medico: 3, nombre: "Dr. Carlos Mendoza (Cardiología)" }
  ]);

  const [cargando, setCargando] = useState(false);
  const API_URL = "http://localhost:3000/api/cita"; 

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  // CREATE: Única acción de esta pantalla (Agendar)
  const handleAgendar = async (e) => {
    e.preventDefault();

    if (!datos.fecha || !datos.hora || !datos.motivo.trim() || !datos.id_medico) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const idPaciente = localStorage.getItem("id_paciente");
    setCargando(true);

    try {
      const datosAEnviar = {
        ...datos,
        id_paciente: idPaciente
      };

      // Petición POST al Backend para insertar en MySQL
      await axios.post(API_URL, datosAEnviar);
      alert("¡Cita agendada correctamente!");
      
      // Limpiamos el formulario tras el éxito
      setDatos({ fecha: "", hora: "", motivo: "", id_medico: "" });
      
      // Cuando en router se cree la página del panel, se puede redirigir al usuario allá para que vea su cita:
      // navigate("/panel-usuario"); 

    } catch (error) {
      console.error("Error al agendar la cita:", error);
      alert("Hubo un error al guardar la cita en la base de datos.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="fondo-pagina-cita">
      <div className="tarjeta-cita">
        <img src="/imagenes/logo.png" alt="Logo" className="logo-cita" />
        <h2 className="titulo-cita">Agendar Cita</h2>

        <form onSubmit={handleAgendar}>
          {/* INPUT FECHA */}
          <input type="date" name="fecha" className="input-cita" value={datos.fecha} onChange={handleChange} required />
          
          {/* INPUT HORA */}
          <input type="time" name="hora" className="input-cita" value={datos.hora} onChange={handleChange} required />

          {/* SELECT MÉDICO */}
          <select name="id_medico" className="input-cita" value={datos.id_medico} onChange={handleChange} required>
            <option value="">Seleccione un Médico</option>
            {medicos.map((medico) => (
              <option key={medico.id_medico} value={medico.id_medico}>{medico.nombre}</option>
            ))}
          </select>

          {/* INPUT MOTIVO */}
          <input type="text" name="motivo" className="input-cita" value={datos.motivo} onChange={handleChange} placeholder="Motivo de la cita" required />

          <button type="submit" className="boton-cita" disabled={cargando}>
            {cargando ? "Agendando..." : "Agendar Cita"}
          </button>
          
          <button type="button" className="boton-cita secundario" onClick={() => navigate(-1)}>
            Volver
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cita;
