import Navigation from '../common/navigation';

import styles from '../../assets/styles/main.module.scss';

function Header() {
    return (
        <header className={styles.c_header}>
            <h2 className={styles.header_logo}>
                <a href='/'>Farid<br />Mokraoui</a>
            </h2>
            <Navigation template='header' />
        </header>
    );
}

export default Header;