import * as React from 'react';
import {ArrayContextProvider} from './context/ArrayContext.js'
import GetAllVideos from './components/GetAllVideos.js'
import VideoPlayer from './components/VideoPlayer.js'
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <Container maxWidth={false}>
        <ArrayContextProvider>
          <h1>Video Fuse</h1>
          <GetAllVideos/>
          <VideoPlayer/>
        </ArrayContextProvider>
      </Container>
    </>
  );
}

export default App;
