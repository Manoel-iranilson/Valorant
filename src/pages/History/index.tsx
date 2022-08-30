import React from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
// import { Container } from './styles';

const History: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
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
      <div className="container bg-light">
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>Historia - Completa</h1>
            <button
              className="btn btn-danger text-white fw-bold"
              style={{
                width: "10rem",
                height: "3rem",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => navigate("/HistoryDetail")}
            >
              Vê Detalhada
            </button>
          </div>
          <p className="fs-5 ">
            Todos os Valorant Cinematics que foram lançados desde o lançamento
            até os dias atuais, desde o DUELISTS cinematográfico até o (a partir
            de quando este é carregado) cinematográfico mais recente.
          </p>
          <div>
            <ReactPlayer
              className="react-player"
              width="100%"
              controls
              url="https://www.youtube.com/watch?v=6TqBXK1fnv0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
