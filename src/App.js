import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextsmsIcon from '@mui/icons-material/Textsms';

import Card from "./components/card";

import './App.css';
import maths from "./data/maths";
import english from "./data/english";
import spanish from "./data/spanish";

function App() {
  const [isChat, setChat] = useState(false);

  const Header = () => (
    <div style={{
      zIndex: 1,
      position: 'fixed', width: '100%',
      shadowRadius: 10,
      shadowOpacity: 0.8,
      shadowColor: '#2D2F34',
      backgroundColor: '#2D2F34',
      shadowOffset: {
        height: 1,
        width: 1
      },
    }}>
      <Typography variant="h6" style={{ color: '#FFD600', padding: 10 }}>School Platform</Typography>
    </div>
  )

  return (
    <div style={{ backgroundColor: '#37424a', paddingBottom: 50 }}>
      <Header />
      {
        isChat ? (
          <div
            style={{
              zIndex: 1,
              color: '#FFD600',
              position: 'fixed',
              marginLeft: '58%',
              borderRadius: 20,
              backgroundColor: '#2D2F34',
              marginTop: window.innerHeight * 0.25,
            }}
          >
            <CloseIcon onClick={() => setChat(false)} style={{ fontSize: 30, marginLeft: 10, marginTop: 10, cursor: 'pointer' }} />
            <div style={{ paddingLeft: 30, paddingBottom: 30, paddingRight: 30, paddingTop: 5 }}>
              <iframe title="bot" src={'https://d4r1lf9symihg.cloudfront.net'} width={650} height={500} frameBorder="0" style={{ borderRadius: 15 }} />
            </div>
          </div>
        ) : null
      }
      <div
        onClick={() => setChat(!isChat)}
        style={{
          zIndex: 1,
          color: '#FFD600',
          position: 'fixed',
          marginLeft: '92%',
          cursor: 'pointer',
          marginTop: window.innerHeight * 0.85,
        }}>
        <div
          style={{
            padding: 20,
            borderRadius: 50,
            backgroundColor: '#2D2F34',
          }}
        >
          <TextsmsIcon style={{ fontSize: 50 }} />
        </div>
      </div>
      <div style={{ zIndex: 2 }}>
        <Typography variant="h5" style={{ color: '#FFD600', paddingTop: 70, paddingLeft: 50 }}>Maths</Typography>
        <Box sx={{ flexGrow: 1, width: '90%', marginLeft: '5%', marginTop: 3 }}>
          <Grid container spacing={2}>
            {maths.map((lesson) => (
              <Grid item xs={3}>
                <Card
                  id={lesson.id}
                  idColor={lesson.idColor}
                  title={lesson.title}
                  content={lesson.content}
                  date={lesson.date}
                  image={lesson.image}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Typography variant="h5" style={{ color: '#FFD600', paddingTop: 40, paddingLeft: 50 }}>English</Typography>
        <Box sx={{ flexGrow: 1, width: '90%', marginLeft: '5%', marginTop: 3 }}>
          <Grid container spacing={2}>
            {english.map((exercise) => (
              <Grid item xs={3}>
                <Card
                  id={exercise.id}
                  idColor={exercise.idColor}
                  title={exercise.title}
                  content={exercise.content}
                  date={exercise.date}
                  image={exercise.image}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Typography variant="h5" style={{ color: '#FFD600', paddingTop: 40, paddingLeft: 50 }}>Spanish</Typography>
        <Box sx={{ flexGrow: 1, width: '90%', marginLeft: '5%', marginTop: 3 }}>
          <Grid container spacing={2}>
            {spanish.map((exercise) => (
              <Grid item xs={3}>
                <Card
                  id={exercise.id}
                  idColor={exercise.idColor}
                  title={exercise.title}
                  content={exercise.content}
                  date={exercise.date}
                  image={exercise.image}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default App;
