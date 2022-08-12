/* eslint-disable require-jsdoc */
import { Grid } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import Typewriter from 'typewriter-effect';
import Navbar from "./Components/Navbar";

function Home() {

  const [completed, setCompleted] = useState(false);
  
  return (
    <div className="Home">
      <Grid container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}>
      <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString("Hi, <br />")
      .pauseFor(300)
      .typeString("I'm <strong>Brandon Reay</strong> and I like to create things with <strong>code</strong>.")
      .pauseFor(2500)
      .deleteAll()
      .typeString("Welcome to <strong>reayboi.dev</strong>")
      .callFunction(() => {
        setCompleted(true);
      })
      .start();
  }}
/>
{completed ? <Navbar play={completed}/> : null}
      </Grid>
    </div>
  );
}

export default Home;
