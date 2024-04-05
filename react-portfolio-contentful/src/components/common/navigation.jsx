/* eslint-disable react/prop-types */
import styles from '../../assets/styles/main.module.scss';

function Navigation({ data }) {

    return (
        <nav className={styles.c_nav}>
            <ul className={styles.nav__group}>
                {data.items.map((navigationLinks) => {
                    if (navigationLinks.navigationImage) {
                        return (
                            <li key={navigationLinks.navigationLabel} className={styles.nav__link}>
                                <a href={navigationLinks.navigationUrl} className={styles.images_10} target="_blank">
                                    <div className={styles.nav__icon} style={{ maskImage: `url(${navigationLinks.navigationImage.url})`, WebkitMaskImage: `url(${navigationLinks.navigationImage.url})` }} />
                                </a>
                            </li >
                        )

                    } else {
                        return (
                            <li key={navigationLinks.navigationLabel} className={styles.nav__link}>
                                <a href={navigationLinks.navigationUrl}>{navigationLinks.navigationLabel}</a>
                            </li>
                        )
                    }
                })}
            </ul>
        </nav >
    );
}

export default Navigation;