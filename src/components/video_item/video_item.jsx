import { memo } from "react";
import styles from "./video_item.module.css";

// * React Hook
// 방법3
const VideoItem = memo(
  ({ video, video: { snippet }, onVideoClick, display }) => {
    const displayType =
      display === "list" ? styles.container_list : styles.container_grid;
    return (
      <li className={`${displayType}`} onClick={() => onVideoClick(video)}>
        <div className={styles.video}>
          <img
            className={styles.thumbnail}
            src={snippet.thumbnails.medium.url}
            alt="video thumbnails"
          />
          <div className={styles.metadata}>
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channel}>{snippet.channelTitle}</p>
          </div>
        </div>
      </li>
    );
  }
);

/* 
// 방법2
const VideoItem = ({ video }) => (
    <li className={styles.container}>
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={video.snippet.thumbnails.medium.url}
          alt="video"
        />
        <div className={styles.metadata}>
          <h2 className={styles.title}>{video.snippet.title}</h2>
          <p className={styles.channel}>{video.snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  ); */

// 방법 1
/* const VideoItem = (props) => {

  return (
    <li className={styles.container} onclick={send}>
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={props.video.snippet.thumbnails.medium.url}
          alt="video"
        />
        <div className={styles.content}>
          <h2 className={styles.title}>{props.video.snippet.title}</h2>
          <p className={styles.description}>
            {props.video.snippet.description}
          </p>
        </div>
      </div>
    </li>
  );
}; */

export default VideoItem;
