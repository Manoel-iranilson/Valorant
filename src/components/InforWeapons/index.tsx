import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Armas } from "../../pages/Weapons";
import api from "../../services/api";

const InforWeapons: React.FC = () => {
  const { id } = useParams();
  const [weapons, setWeapons] = useState<Armas>();

  async function Apiget() {
    const response = await api.get(
      `/v1/weapons/${id}/?language=pt-BR&isPlayableCharacter=true`
    );
    setWeapons(response.data.data);
    console.log(response.data.data);
  }
  useEffect(() => {
    Apiget();
  }, []);

  return <div />;
};

export default InforWeapons;
