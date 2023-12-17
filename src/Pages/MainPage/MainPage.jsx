import { useState } from 'react';

import { Input } from '@mui/material';

import Track from '../../components/Track/Track';
import trackList from '../../assets/TrackList';

import styles from './MainPage.module.scss';

const runSearch = (query) => {
    if (!query) {
        return trackList;
    }

    const lowerCaseQuery = query.toLowerCase();

    return trackList.filter(
        (track) =>
            track.title.toLowerCase().includes(lowerCaseQuery) ||
            track.artists.toLowerCase().includes(lowerCaseQuery),
    );
};

const MainPage = () => {
    const [tracks, setTracks] = useState(trackList);

    const handleChange = (event) => {
        const foundTracks = runSearch(event.target.value);
        setTracks(foundTracks);
    };

    return (
        <div className={styles.search}>
            <Input className={styles.input} placeholder="Поиск треков" onChange={handleChange} />
            <div className={styles.list}>
                {tracks.map((track) => (
                    <Track key={track.id} {...track} />
                ))}
            </div>
        </div>
    );
};

export default MainPage;
