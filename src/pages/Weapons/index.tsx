import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export interface Armas {
  uuid: string;
  displayName: string;
  displayIcon: string;
}

const Weapons: React.FC = () => {
  const navigate = useNavigate();
  const [weapons, setWeapons] = useState<Armas[]>();

  async function Apiget() {
    const response = await api.get(
      "/v1/weapons/?language=pt-BR&isPlayableCharacter=true"
    );
    setWeapons(response.data.data);
    console.log(response.data.data);
  }
  useEffect(() => {
    Apiget();
  }, []);

  function GoPage(uuid: string) {
    navigate(`/InforAgents/${uuid}`);
  }

  return (
    <div className="bg-light">
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

      <div className="row" style={{ marginTop: "5rem" }}>
        {weapons?.map((weapons) => (
          <div className="col-lg-4 shadow p-2 mt-5 text-center mt-3">
            <img
              className="img-fluid text-center"
              src={weapons.displayIcon}
              style={{ width: "8rem" }}
            />
            <h2 className="fw-normal ">{weapons.displayName}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weapons;
