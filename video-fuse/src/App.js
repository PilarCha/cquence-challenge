import * as React from 'react';
import GetAllVideos from './components/GetAllVideos.js'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <CssBaseline/>
      <Container maxWidth={false}>
        <h1>Video Fuse</h1>
        <GetAllVideos/>
      </Container>
    </>
  );
}

export default App;
