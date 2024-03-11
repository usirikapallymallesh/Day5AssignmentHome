import React from "react";
import Lorm from "../components/Lorm";

const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "brown" }}>TIRED OF BORING LOREM IPSUM?</h1>
      <Lorm />
    </div>
  );
};

export default Home;
