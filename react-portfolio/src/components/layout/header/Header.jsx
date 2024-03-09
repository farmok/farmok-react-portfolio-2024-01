import styles from '../../../assets/styles/main.module.scss';

export const Header = () => {
    return (
        <header className={styles.c_header}>
            <h2 className={styles.header_logo}>
                <a href='/'>Farid<br />Mokraoui</a>
            </h2>
            <nav className={styles.header_nav}>
                <ul className={styles.nav__group}>
                    <li className={styles.nav__link}>
                        <a href='/design'>Design</a>
                    </li>
                    <li className={styles.nav__link}>
                        <a href='/leadership'>Leadership</a>
                    </li>
                    <li className={styles.nav__link}>
                        <a href='/about'>Resume</a>
                    </li>
                </ul>
            </nav >
        </header>
    );
};