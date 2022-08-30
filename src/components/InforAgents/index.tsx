import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Agentes } from "../../pages/Agents";

import api from "../../services/api";

const InforAgents: React.FC = () => {
  const { id } = useParams();
  const [agent, setAgent] = useState<Agentes>();
  const [descriptionAbility, setDescriptionAbility] = useState("");

  async function Apiget() {
    const response = await api.get(
      `/v1/agents/${id}/?language=pt-BR&isPlayableCharacter=true`
    );
    setAgent(response.data.data);
    console.log(response.data.data);
  }
  useEffect(() => {
    Apiget();
  }, []);

  return (
    <div>
      <video
        id="videoBanner"
        style={{ width: "100%" }}
        className="videoBanner img-fluid"
        loop={true}
        autoPlay
        muted
      >
        <source
          src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29d7c4f6bc077e9e/5eb26f54402b8b4d13a56656/agent-background-generic.mp4"
          type="video/mp4"
        />
      </video>
      <div className="row g-0  rounded  flex-md-row shadow-sm h-md-250 position-relative">
        <div
          className="col-lg-6 col-d-none p-4 d-flex flex-column sm mt-5"
          style={{ marginTop: "10rem" }}
        >
          <h3 className="text-white">{agent?.displayName}</h3>
          <p className="card-text  text-white">{agent?.description}</p>
          <div className="row text-white mt-2">
            {agent?.abilities.map((e) => (
              <div className="col mt-3">
                <button
                  className="btn btn-outline-danger"
                  style={{ width: "13rem", height: "" }}
                  onClick={() => setDescriptionAbility(e.description)}
                >
                  <div>{e.displayName}</div>
                  <img className="img-fluid" src={e.displayIcon} />
                </button>
              </div>
            ))}
          </div>
          <div>
            <p className="text-white mt-5"> {descriptionAbility}</p>
          </div>
        </div>
        <div className="col-lg-6 col-d-8">
          <img className="img-fluid sm w-100 " src={agent?.fullPortrait} />
        </div>
      </div>
    </div>
  );
};

export default InforAgents;
