import { fireEvent, render, screen } from '@testing-library/react';
import VideoPoster from './components/VideoPoster';
// import VideoPlayer from './components/VideoPlayer'
import { ArrayContext, ArrayContextProvider } from './context/ArrayContext';

const videoEx = {
  "id": "25ff984c-e79d-460c-a75f-489e58425656",
  "source": "https://video-fuse-footage.s3.us-east-1.amazonaws.com/astronaut-in-suit-closing-container-underwater.mp4",
  "poster": "https://video-fuse-footage.s3.us-east-1.amazonaws.com/astronaut-in-suit-closing-container-underwater.jpg"
}

describe("Video Poster", () => {
  
  it('renders correct video Poster', async () => {   
    render(<VideoPoster key={1} video={videoEx}/>);
    const linkElement = screen.getByRole('img');
    expect(linkElement).toBeInTheDocument();
  });

  it('clicking on poster changes style', async () => {    
    render(
      <ArrayContextProvider>
        <VideoPoster 
          key={1} 
          video={videoEx}
          setArray = {[]}
          />
      </ArrayContextProvider>
    );
    const linkElement = screen.getByRole('img');
    fireEvent.click(linkElement)
    expect(linkElement).toHaveStyle('opacity:0.5');
  });
}) 

// describe("ArrayContext", () => {
// })

