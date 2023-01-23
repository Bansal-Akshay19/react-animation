import { useEffect, useState } from "react";
import classes from "./VideoPlayer.module.css";
import video1 from "./video/video1.mp4";
import video2 from "./video/video2.mp4";
import video3 from "./video/video3.mp4";
const VideoPlayer = (props) => {
  const [src, setSrc] = useState(video1);
  useEffect(() => {
    if (props.view0) {
      setSrc(video1);
    }
    if (props.view1) {
      setSrc(video2);
    }
    if (props.view2) {
      setSrc(video3);
    }
  }, [props.view0, props.view1, props.view2, src]);
  return (
    <>
      <div className={classes.container}>
        <video key={src} autoPlay muted loop className={classes.vid}>
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default VideoPlayer;
