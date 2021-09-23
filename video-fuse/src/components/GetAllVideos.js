import * as React from 'react';
import VideoPoster from './VideoPoster.js';
import Grid from '@mui/material/Grid';

function GetAllVideos () {
  const [data, setData] = React.useState(null);

  // do this after render
  React.useEffect(() => {
    fetch("http://localhost:3000/videos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Grid sx={{flexGrow: 1}} container spacing={8}>
        {data ? (
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
              {data.map(video => (
                <VideoPoster key={video.id} video = {video}/>
              ))}
            </Grid>
          </Grid>
        ) : (
          <p> Loadiiiing </p>
        )}
    </Grid>
  )
}

export default GetAllVideos;
