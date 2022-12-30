import React from "react";
import { useParams } from "react-router-dom";
import FactProject from "../../component/project_card/FactProject";

// styles
import "./Project.css";

const Project1 = () => {
  const { name } = useParams();
  return (
    <div>
      <FactProject name={name} />
    </div>
  );
};

export default Project1;
