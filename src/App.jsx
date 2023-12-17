import MainPage from './Pages/MainPage/MainPage';
import Playbar from './components/Playbar/Playbar';

import styles from './global.module.scss';

const App = () => {
    return (
        <div className={styles.wrapper}>
            <MainPage />
            <Playbar/>
        </div>
    );
};

export default App;
