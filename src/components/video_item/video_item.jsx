import React, { memo } from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(props => {
    const displayType = props.display === 'list' ? styles.list : styles.grid;
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