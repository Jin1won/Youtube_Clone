import React, { memo } from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(props => {
    const displayType = props.display === 'list' ? styles.list : styles.grid;
    // app.jsx에서 함수 선언이 아닌 함수를 선언해서 변수에 할당해주었기 때문에 바로 onClick={props.onVideoClick(props.video)}같은 방식으로 선언이 안된다!
    //이런 식으로 쓰면 onClick = {onVideoClick} 이런식으로 호출 가능!
    // const onVideoClick = () => {
    //     props.onVideoClick(props.video);
    // }
    return(
        <li 
            className={`${styles.container} ${displayType}`}
            onClick={() => props.onVideoClick(props.video)}
        >
            <div className={styles.video}>
                <img 
                    className={styles.thumbnail}
                    src={props.video.snippet.thumbnails.medium.url} 
                    alt="video thumbnail"
                />
            
            
            <div className={styles.metadata}>
                <p className={styles.title}>{props.video.snippet.title}</p>
                <p className={styles.channel}>{props.video.snippet.channelTitle}</p>
            </div>
            </div>
        </li>
    )
});

export default VideoItem;