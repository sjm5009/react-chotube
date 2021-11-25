import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_list";

function App() {
  /* State 설정 */
  const [videos, setVideos] = useState([]);

  /* useEffect : mount update 시에 실행 */
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=AIzaSyD1yl3_ArbqtDlO52Zt_GmOpO1tTp56Hfw",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  });

  return <VideoList videos={videos}></VideoList>;
}

export default App;
