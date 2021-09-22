import * as React from 'react';
// import { DataGrid } from '@material-ui-grid'

function GetAllVideos () {
  const [data, setData] = React.useState(null);

  // do this after render
  React.useEffect(() => {
    fetch("/video")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [])  
}

export default GetAllVideos;
