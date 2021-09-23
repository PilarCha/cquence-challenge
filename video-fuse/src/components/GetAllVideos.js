import * as React from 'react';
import VideoPoster from './VideoPoster.js'

function GetAllVideos () {
  const [data, setData] = React.useState(null);

  // do this after render
  React.useEffect(() => {
    fetch("http://localhost:3000/videos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div >
      {data ? (
        <div>
            {data.map(video => (
              <VideoPoster video = {video}/>
            ))}
        </div>
      ) : (
        <p> Loadiiiing </p>
      )}
    </div>
  )
}

export default GetAllVideos;
