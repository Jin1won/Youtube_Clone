import React, { useEffect, useState }  from 'react';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
//콜백 함수를 등록해 놓으면 component가 mount&update 될 때 마다 호출된다
  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDOIam3NANQQ1K_II8heHYmM4qMZi72HoI", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));

      
//빈 배열을 인자로 넣으면 mount가 됐을 때만 useEffect를 호출한다
//만약 state들을 넣으면 그 state들이 update 될 때 마다 콜백함수가 불린다.
  }, [])
  return <VideoList id={videos.id} videos={videos}/>
}
export default App;