import * as React from 'react';
import { Card } from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

function GetAllVideos () {
  const [data, setData] = React.useState(null);

  // do this after render
  React.useEffect(() => {
    fetch("http://localhost:3000/videos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div style={{ height: 300, width: '100%' }}>
      {data ? (
        <div>We got data</div>
      ) : (
        <p> Loadiiiing </p>
      )}
    </div>
  )
}

export default GetAllVideos;
