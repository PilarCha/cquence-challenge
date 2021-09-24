import * as React from 'react';
import { useContext } from 'react';
import ArrayContext from '../context/ArrayContext.js'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function VideoPoster({video}) {

  const [disable, setDisable] = React.useState(null);
  const { setArray } = useContext(ArrayContext);

  const handleClick = (video) => {
    if(!disable) {
      setDisable(true);
      setArray(array => [...array, video.source])
    }
  }

  return (
    <Card sx={{ maxWidth: 445, margin: 2 }} key = {video.id}>
      <CardMedia
        style={{ ...disable ? {opacity:'0.5'} : {cursor:"pointer"}}}
        component="img"
        height="200"
        image={video.poster}
        alt={video.id}
        onClick={() => handleClick(video)}
      />
    </Card>
  )
}

export default VideoPoster
