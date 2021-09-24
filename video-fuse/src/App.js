import * as React from 'react';
import {ArrayContextProvider} from './context/ArrayContext.js'
import GetAllVideos from './components/GetAllVideos.js'
import VideoPlayer from './components/VideoPlayer.js'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function App() {
  return (
    // Fun thing.<> React uses this as a React.fragment. Keeps React from loading uneccessary divs.
    // All components within the ArrayContextProvider can use the Array Context.
    <>
      <CssBaseline/>
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
