import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <video
        id="videoBanner"
        className="videoBanner img-fluid"
        loop
        autoPlay
        muted
      >
        <source
          src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt714eaee50b90fc27/62cc7dcc6a8fb133b0ff7e55/VALORANT_ANNO22_SHATTERED_16x9_27s.mp4"
          type="video/mp4"
        />
      </video>
      <div style={{ backgroundColor: "#1C1C1C" }}>
        <header className="container fs-4 d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none text-white"
          >
            VALORANT
          </a>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <button
                className=" btn btn-link nav-link px-2 link-danger text-white"
                onClick={() => navigate("/agents")}
              >
                Agentes
              </button>
            </li>
            <li>
              <button
                className=" btn btn-link nav-link px-2 link-danger text-white"
                onClick={() => navigate("/Weapons")}
              >
                Armas
              </button>
            </li>
            <li>
              <button
                className=" btn btn-link nav-link px-2 link-danger text-white"
                onClick={() => navigate("/History")}
              >
                Historia
              </button>
            </li>
          </ul>
        </header>
      </div>
      <div className="center text-center">
        <p className="text-white" style={{ fontSize: 45 }}>
          Venha ser um Radiante
        </p>
        <button className="button">
          <h3> Baixar</h3>
        </button>
        <button className="button" onClick={() => navigate("/agents")}>
          <h3>Agentes</h3>
        </button>
      </div>
    </div>
  );
};

export default Home;
