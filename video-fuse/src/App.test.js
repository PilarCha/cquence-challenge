import { render, screen } from '@testing-library/react';
import VideoPoster from './components/VideoPoster';

it('renders correct video Poster', async () => {
  const videoEx = {
    "id": "25ff984c-e79d-460c-a75f-489e58425656",
    "source": "https://video-fuse-footage.s3.us-east-1.amazonaws.com/astronaut-in-suit-closing-container-underwater.mp4",
    "poster": "https://video-fuse-footage.s3.us-east-1.amazonaws.com/astronaut-in-suit-closing-container-underwater.jpg"
  }
  render(<VideoPoster key={1} video={videoEx}/>);
  const linkElement = screen.getByRole('img');
  expect(linkElement).toBeInTheDocument();
});

