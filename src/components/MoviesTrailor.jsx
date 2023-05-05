import { useCallback, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
const MoviesTrailor = ({ movieTitle }) => {
  const [video, setVideo] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const handleVideo = useCallback(() => {
    setVideo(movieTitle);
    movieTrailer(video).then((res) => {
      setVideoURL(res);
    });
  }, [movieTitle, video]);
  useEffect(() => {
    handleVideo();
  }, [handleVideo]);
  return (
    <div>
      <div className="xxs:w-[300px] xs:w-[400px] sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[1000px] xxs:h-[300px] xs:h-[400px] sm:h-[600px] md:h-[700px] lg:h-[500px] xl:h-[600px]">
        <ReactPlayer
          url={videoURL}
          controls={true}
          width={"100%"}
          height={"100%"}
        />
      </div>
    </div>
  );
};

export default MoviesTrailor;
