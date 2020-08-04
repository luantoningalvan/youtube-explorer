import React, { useCallback } from "react";
import { VideoPlayerContainer } from "./styles";

export default ({ video, ...rest }) => {
  console.log(video)
  return (
    <VideoPlayerContainer {...rest}>
        <iframe 
          width="560" 
          height="315" 
          src={`https://www.youtube.com/embed/${video}`}
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen 
        />
    </VideoPlayerContainer>
  );
};
