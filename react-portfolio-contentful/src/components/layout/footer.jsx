import styles from '../../assets/styles/main.module.scss';
import Navigation from '../common/navigation';
import Social_Links from '../common/social';

function Footer() {
    return (
        <footer className={styles.c_footer}>
            <Navigation template='footer' />
            <Social_Links />
        </footer >
    );
}

export default Footer;