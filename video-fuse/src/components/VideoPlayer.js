import ReactPlayer from 'react-player';
import { useContext, useState } from 'react';
import ArrayContext from '../context/ArrayContext.js'

function VideoPlayer() {
  // the array populated from VideoPoster.js
  const {array} = useContext(ArrayContext);
  // we use this to keep count on the currentIdx
  const [vidIdx, setVidIdx] = useState(0);

  const playNext = () => {
    const nextIdx = vidIdx + 1;
    if(nextIdx >= array.length) {
      return setVidIdx(0);
    }
    return setVidIdx(nextIdx)
  }

  return (        
    <ReactPlayer
      url = {array[vidIdx]}
      onEnded={playNext}
      playing={array.length > 1 ? true : false}
      controls
    />
  )
}

export default VideoPlayer;
