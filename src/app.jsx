import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = video => {
    setSelectedVideo(video);
  };
  //콜백 함수를 등록해 놓으면 component가 mount&update 될 때 마다 호출된다
  //useCallback을 사용함으로써 search_header에서 메모를 썼음에도 selecTedVideo가 계속 render되어 새로운 props가 전달되는 현상을 막을 수 있다
  //하지만 한 번 만들면 메모리에 저장되기 때문에 꼭 필요한 경우에만 사용해야 한다!
  const search = useCallback(query => {
    setSelectedVideo(null);
// 이 위치에 로딩 스피너 구현 할 수도 있다!!
    youtube
      .search(query) //
      .then(videos => setVideos(videos));
  },[youtube]);
  //빈 배열을 인자로 넣으면 mount가 됐을 때만 useEffect를 호출한다
  //만약 state들을 넣으면 그 state들이 update 될 때 마다 콜백함수가 불린다.
  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos));
  }, [youtube]);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;