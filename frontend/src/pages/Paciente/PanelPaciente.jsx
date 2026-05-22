import BotonCerrarSesion from '../../components/BotonCerrarSesion';
import './PanelPaciente.css';



export default function PanelPaciente() {
  return (
    <div className="panel-paciente">
      <header className="pp-topbar">
        <div className="pp-brand">
          <div className="pp-logo-box">
            <img src="/imagenes/logo.png" alt="Logo Agenda Salud" />
          </div>

          <div className="pp-brand-text">
            <div className="pp-brand-name">Bienvenido</div>
            <div className="pp-brand-sub">Panel del paciente</div>
          </div>
        </div>

        <div className="pp-user-chip">
          <div className="pp-avatar">MA</div>
          <div className="pp-user-name">María Ángel</div>
        </div>
      </header>

      <main className="pp-content">
        <section className="pp-greeting">
          <div>
            <h1>Buenos días, María</h1>
            <p>¿Qué deseas hacer hoy?</p>
          </div>
        </section>

        <section className="pp-nav-grid">
          <button type="button" className="pp-nav-card">
            <div className="pp-nav-icon pp-ic-verde">
              <i className="pi pi-calendar-plus" />
            </div>

            <p className="pp-nav-title">Agendar cita</p>
            <p className="pp-nav-desc">
              Reserva una nueva cita con el especialista que desees
            </p>
          </button>

          <button type="button" className="pp-nav-card">
            <div className="pp-nav-icon pp-ic-azul">
              <i className="pi pi-user" />
            </div>

            <p className="pp-nav-title">Nuestros Doctores</p>
            <p className="pp-nav-desc">
              Consulta los especialistas disponibles y sus horarios
            </p>
          </button>

          <button type="button" className="pp-nav-card">
            <div className="pp-nav-icon pp-ic-amber">
              <i className="pi pi-list" />
            </div>

            <p className="pp-nav-title">Historial de citas</p>
            <p className="pp-nav-desc">
              Revisa tus citas pasadas y los registros médicos
            </p>
          </button>

          <button type="button" className="pp-nav-card">
            <div className="pp-nav-icon pp-ic-morado">
              <i className="pi pi-id-card" />
            </div>

            <p className="pp-nav-title">Mi perfil</p>
            <p className="pp-nav-desc">
              Actualiza tus datos personales
            </p>
          </button>
        </section>
        
      </main>
      <BotonCerrarSesion/>
    </div>
  );
}