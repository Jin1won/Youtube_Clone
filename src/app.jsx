import React, { useEffect, useState }  from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  // const [selectedVideo, setSelectedVideo] = useState([]);
//콜백 함수를 등록해 놓으면 component가 mount&update 될 때 마다 호출된다
  const search = query => {
    youtube
    .search(query)
    .then(videos => setVideos(videos));
  }

  useEffect(()=>{
    youtube
    .mostPopular()
    .then(videos => setVideos(videos));
//빈 배열을 인자로 넣으면 mount가 됐을 때만 useEffect를 호출한다
//만약 state들을 넣으면 그 state들이 update 될 때 마다 콜백함수가 불린다.

  }, [])

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <VideoList 
        videos={videos}
      />
    </div>
  );
}
export default App;