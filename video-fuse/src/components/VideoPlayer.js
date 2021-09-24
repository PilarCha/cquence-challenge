import ReactPlayer from 'react-player';
import { useContext } from 'react';
import ArrayContext from '../context/ArrayContext.js'

function VideoPlayer() {

  const {array} = useContext(ArrayContext);

  return (
    <ReactPlayer      
      url = {array}
      controls
    />
  )
}

export default VideoPlayer;
