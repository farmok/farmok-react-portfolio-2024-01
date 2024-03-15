import styles from '../../assets/styles/main.module.scss';
import { Navigation } from '../common/navigation';
import { Social_Links } from '../common/social';

export const Footer = () => {
    return (
        <footer className={styles.c_footer}>
            <Navigation template='footer' />
            <Social_Links />
        </footer >
    );
};