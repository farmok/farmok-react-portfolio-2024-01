/* eslint-disable react/prop-types */
import styles from '../../assets/styles/main.module.scss';

export const Navigation = ({ template }) => {
    return (
        <nav className={styles.c_nav} data-page-template={template}>
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
    );
};