/* eslint-disable require-jsdoc */
import React, { useState } from 'react';
import { Stack } from '@mui/material';
import './App.css';
import Typewriter from 'typewriter-effect';
import Links from './Components/Links';

function Home() {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="Home">
      <Stack
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Typewriter
          onInit={typewriter => {
            typewriter
              .typeString('Welcome to <strong>reayboi.dev</strong>')
              .pauseFor(150)
              .deleteAll()
              .typeString(
                "My name's <strong>Brandon Reay</strong> and I'm a software dev"
              )
              .pauseFor(300)
              .deleteAll()
              .typeString('Checkout my work!')
              .callFunction(() => {
                setCompleted(true);
              })
              .start();
          }}
        />
        {completed ? <Links play={completed} /> : null}
      </Stack>
    </div>
  );
}

export default Home;
