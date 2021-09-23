import * as React from 'react';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

const VideoPoster = ({video}) => (
  <Card sx={{ maxWidth: 345 }} key = {video.id}>
    <CardMedia
      component="img"
      height="200"
      image={video.poster}
      alt={video.id}
    />
  </Card>
)

export default VideoPoster
