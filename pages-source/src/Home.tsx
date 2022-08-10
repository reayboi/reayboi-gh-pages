import { Typography } from "@mui/material";
import React from "react";
import "./App.css";

function Home() {
  return (
    <div className="Home">
      <Typography variant="h2">
        Hi, I'm <strong>Brandon Reay</strong>
      </Typography>
      <Typography variant="h5">
        and I like to create things with <strong>code</strong>.
      </Typography>
    </div>
  );
}

export default Home;
