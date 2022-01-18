import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video }) => {
  return (
    <section className={styles.detail}>
      <div className={styles.iframeDiv}>
        <iframe
          className={styles.video}
          type="text/html"
          id="ytplayer"
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>
          {video.snippet.title.split("&quot;").join('"')}
        </h2>
        <a
          className={styles.channelTitle}
          href={`https://www.youtube.com/channel/${video.snippet.channelId}`}
        >
          {video.snippet.channelTitle}
        </a>
        <pre className={styles.description}>{video.snippet.description}</pre>
      </div>
    </section>
  );
};

export default VideoDetail;
