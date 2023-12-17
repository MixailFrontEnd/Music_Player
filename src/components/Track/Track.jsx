import { useContext } from 'react';
import { AudioContext } from '../../context/audioContext';
import cn from 'classnames';

import { IconButton } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';

import secondsToMMSS from '../../utils/secondsToMMSS';

import styles from './Track.module.scss';

const Track = (track) => {
    const { preview, title, artists, duration } = track;
    const { handleToggleAudio, currentTrack, isPlaying } = useContext(AudioContext);

    const isCurrentTrack = currentTrack.id === track.id;

    const formattedDuration = secondsToMMSS(duration);

    return (
        <div className={cn(styles.track, isCurrentTrack && styles.playing)}>
            <IconButton onClick={() => handleToggleAudio(track)}>
                {isCurrentTrack && isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
            <img className={styles.preview} src={preview} alt="Prewiev" />
            <div className={styles.credits}>
                <b>{title}</b>
                <p>{artists}</p>
            </div>
            <p>{formattedDuration}</p>
        </div>
    );
};

export default Track;
