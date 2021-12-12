import * as React from "react";
import { useContext } from "react";
import ArrayContext from "../context/ArrayContext.js";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

function VideoPoster({ video }) {
  const [selected, setSelected] = React.useState(null);
  const { setArray } = useContext(ArrayContext);
  // push url source of video into array
  const handleClick = (video) => {
    if (!selected) {
      setSelected(true);
      return setArray((array) => [...array, video.source]);
    } else {
      setSelected(false);
      setArray((array) => {
        const newVidArr = array.filter((item) => item !== video.source);
        setArray(newVidArr);
      });
    }
  };

  return (
    <Card sx={{ maxWidth: 445, margin: 2 }} key={video.id}>
      <CardMedia
        style={{ ...(selected ? { opacity: "0.5" } : { opacity: "1" }) }}
        component="img"
        height="200"
        image={video.poster}
        alt={video.id}
        onClick={() => handleClick(video)}
      />
    </Card>
  );
}

export default VideoPoster;
