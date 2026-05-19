export default function PanelPaciente() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>

      {/* SIDEBAR */}
      <div style={{ background: "#fff", width: "220px" }}>

        {/* Logo */}
        <div style={{ padding: "10px", borderBottom: "1px solid #e5e5e5", textAlign: "center" }}>
          <img src='/imagenes/logo.png' alt='Logo Agenda Salud' style={{ width: '180px' }} />
        </div>

        {/* Menu */}
        <div style={{ padding: "8px" }}>

          <span style={{ fontSize: "12px", color: "#949494", padding: "8px" }}>PRINCIPAL</span>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 12px", borderRadius: "8px", fontSize: "15px", cursor: "pointer", color: "#555", marginBottom: "5px" }}>
            <i className="pi pi-home" />
            <span>Inicio</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 12px", borderRadius: "8px", fontSize: "15px", cursor: "pointer", color: "#555", marginBottom: "5px" }}>
            <i className="pi pi-calendar-plus" />
            <span>Agendar Cita</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 12px", borderRadius: "8px", fontSize: "15px", cursor: "pointer", color: "#555", marginBottom: "5px" }}>
            <i className="pi pi-calendar" />
            <span>Mis Citas</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 12px", borderRadius: "8px", fontSize: "15px", cursor: "pointer", color: "#555", marginBottom: "5px" }}>
            <i className="pi pi-user" />
            <span>Medicos</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 12px", borderRadius: "8px", fontSize: "15px", cursor: "pointer", color: "#555", marginBottom: "5px" }}>
            <i className="pi pi-file" />
            <span>Historial</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 12px", borderRadius: "8px", fontSize: "15px", cursor: "pointer", color: "#555", marginTop: "150px" }}>
            <i className="pi pi-sign-out" />
            <span>Cerrar Sesión</span>
          </div>

        </div>
      </div>


{/*===================================================  DASHBOARD  ===========================================================================*/}
      {/* CONTENIDO PRINCIPAL */}
      <div style={{ background: "#f5f5f3", flex: 1 }}>

        {/* Saludo */}
        <h1 style={{ padding: "30px 0px 0px 30px", fontSize: "25px", fontWeight: 600, color: "#050505" }}>Bienvenido, Juan 👋</h1>
        <p style= {{paddingLeft:"30px", fontSize: "15px" }}>28 de mayo del 2026</p>

        {/* Tarjetas */}
        <div style={{ display: "flex", gap: "12px", marginTop: "1.5rem", marginLeft: "20px", marginRight: "20px" }}>

          {/* Proxima cita */}
          <div style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "12px", padding: "0px 250px 10px 15px", flex: 1 }}>
            <p style={{ fontSize: "14px", fontWeight: 600, color: "#8b8484", marginBottom: "1rem" }}>Próximas citas</p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>

              <div style={{ background: "#E1F5EE", borderRadius: "8px", padding: "0px 0px 0px 0px", textAlign: "center", minWidth: "50px" }}>

                <p style={{ fontSize: "15px", fontWeight: 700, color: "#0F6E56", margin: "5px" }}>20</p>
                <p style={{ fontSize: "10px", color: "#0F6E56", margin: "5px" }}>MAY</p>

              </div>
              <div>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "#111"}}>Dr. Carlos Ramírez</p>
                <p style={{ fontSize: "12px", color: "#888" }}>Medicina general</p>
                <p style={{ fontSize: "12px", color: "#888" }}>9:00 am</p>
              </div>
            </div>
          </div>

      
          {/* Citas del mes */}
          <div style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "12px", padding: "15px", flex: 1 }}>
            <p style={{ fontSize: "12px", color: "#888" }}>Citas este mes</p>
            <p style={{ fontSize: "22px", fontWeight: 600, color: "#111" }}>3</p>
          </div>
          
        </div>


          {/* Mis medicos */}
          <div style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "12px", padding: "15px", flex: 1 }}>
            <p style={{ fontSize: "14px", fontWeight: 600, color: "#111", marginBottom: "1rem" }}>Mis médicos</p>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#E1F5EE", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 600, color: "#0F6E56" }}>CR</div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "#111" }}>Dr. Carlos Restrepo</p>
                <p style={{ fontSize: "12px", color: "#888" }}>Medicina General</p>
              </div>

              <button style={{ fontSize: "11px", color: "#0F6E56", border: "1px solid #0F6E56", background: "none", borderRadius: "6px", padding: "4px 10px", cursor: "pointer" }}>Agendar</button>
            </div>

        </div>
      </div>

    </div>
  );
}