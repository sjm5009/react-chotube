import { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";
/* import VideoJsonData from "./jsonData/videos.json";
import SearchJsonData from "./jsonData/search.json"; */

function App() {
  /* State 설정 */
  const [videos, setVideos] = useState([]);

  const search = (searchWord) => {
    console.log(searchWord);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchWord}&type=video&key=AIzaSyD5aT0PkNPExATYA5dLI9BJ-ARu5aQpKds`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => {
        setVideos(items);
        console.log(items);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    /* const resJsonData = VideoJsonData;
    console.log(resJsonData);
    setVideos(resJsonData.items); */
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyD5aT0PkNPExATYA5dLI9BJ-ARu5aQpKds",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos}></VideoList>
    </div>
  );
}

export default App;
