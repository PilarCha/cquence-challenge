import ReactPlayer from 'react-player';
import { useContext, useState } from 'react';
import ArrayContext from '../context/ArrayContext.js'

function VideoPlayer() {
  const {array} = useContext(ArrayContext);
  const [vidIdx, setVidIdx] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);

  const playNext = () => {
    const nextIdx = vidIdx + 1;
    if(nextIdx >= array.length) {
      setVidIdx(0);
      setAutoPlay(false);
      return;
    }
    return setVidIdx(nextIdx)
  }

  const setToAutoPlay = () => {
    setAutoPlay(true);
  }

  return (        
    <ReactPlayer
      data-testid="react-player-element"
      url = {array[vidIdx]}
      onStart= {setToAutoPlay}
      onEnded= {playNext}
      playing={autoPlay}
      controls
    />
  )
}

export default VideoPlayer;
