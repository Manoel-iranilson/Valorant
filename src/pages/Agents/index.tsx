import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export interface Agentes {
  uuid: string;
  displayName: string;
  displayIcon: string;
  background: string;
  description: string;
  fullPortrait: string;
  abilities: abilities[];
  role: role[];
}

interface abilities {
  slot: string;
  description: string;
  displayIcon: string;
  displayName: string;
}
interface role {
  displayIcon: string;
}

const Agents: React.FC = () => {
  const [agents, setAgents] = useState<Agentes[]>();
  const navigate = useNavigate();

  async function Apiget() {
    const response = await api.get(
      "/v1/agents/?language=pt-BR&isPlayableCharacter=true"
    );
    setAgents(response.data.data);
    console.log(response.data.data);
  }
  useEffect(() => {
    Apiget();
  }, []);

  function GoPage(uuid: string) {
    navigate(`/InforAgents/${uuid}`);
  }

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
        <div className=" row" style={{ marginTop: "5rem" }}>
          {agents?.map((agentes) => (
            <div className="col-lg-4 text-center mt-3">
              <img src={agentes.displayIcon} style={{ maxWidth: "10rem" }} />
              <h2 className="fw-normal">{agentes.displayName}</h2>
              <p>{agentes.description}</p>
              <p>
                <button
                  className="button"
                  style={{ width: "15rem" }}
                  onClick={() => GoPage(agentes.uuid)}
                >
                  <h3>VÊ MAIS</h3>
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agents;
