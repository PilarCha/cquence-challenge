import * as React from 'react';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

function VideoPoster({video}) {

  // styles
  const disabled = {
    opacity:'0.5'
  }

  const active = {
    cursor:'pointer'
  }

  const [disable, setDisable] = React.useState(null);

  const handleClick = (video) => {
    if(!disable) {
      setDisable(true);
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
