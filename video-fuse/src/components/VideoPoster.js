import * as React from 'react';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

function VideoPoster({video}) {

  function handleClick(video) {
    alert(video.id)
  }

  return (
    <Card sx={{ maxWidth: 445 }} key = {video.id}>
      <CardMedia
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
