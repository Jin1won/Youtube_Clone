import React, { memo } from 'react';
import styles from './video_detail.module.css';

const VideoDetail = memo(props => (
    <section className={styles.detail}>
        <iframe
            className={styles.video}
            type="text/html"
            title = "youtube video player"
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/${props.video.id}`}
            frameBorder="0"
            allowFullScreen
        ></iframe>
        <h2>{props.video.snippet.title}</h2>
        <h3>{props.video.snippet.channelTitle}</h3>
        <pre className={styles.description}>{props.video.snippet.description}</pre>
    </section>
));

export default VideoDetail;