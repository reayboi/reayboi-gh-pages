import { Button } from '@mui/material';
import React from 'react';
import { Animate } from 'react-simple-animate';

interface NavbarProps {
    play : boolean;
}

const Navbar = (props : NavbarProps) => {
    return (
        <Animate
        play={props.play} // Toggle when animation should start
        start={{ opacity: 0, filter: 'blur(10px)'  }}
        end={{ opacity: 1, filter: 'blur(0)' }}
      >
        <Button variant="contained">View Projects</Button>
      </Animate>
    );
}

export default Navbar;