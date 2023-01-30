import React from 'react';
import { Button, Link, Stack } from '@mui/material';
import { Animate } from 'react-simple-animate';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface LinksProps {
  play: boolean;
}

const Links = (props: LinksProps) => {
  return (
    <>
      <br />
      <Animate
        play={props.play} // Toggle when animation should start
        start={{ opacity: 0, filter: 'blur(10px)' }}
        end={{ opacity: 1, filter: 'blur(0)' }}
      >
        <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 4 }}>
          <Link href="https://github.com/reayboi">
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'teal',
                borderRadius: 15,
                border: '3px solid #fefefe',
                color: '#fefefe',
              }}
            >
              View Projects
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/brandon-reay/"
            sx={{ color: '#fefefe', pt: '5px' }}
          >
            <LinkedInIcon sx={{ fontSize: 40 }} />
          </Link>
        </Stack>
      </Animate>
    </>
  );
};

export default Links;
