/* eslint-disable react/prop-types */
import styles from '../../assets/styles/main.module.scss';

function Download({ content }) {

    return (
        <section className={styles.c_download}>
            <a className={styles.button + ' ' + styles.solid} href={content.url} target='blank'> {content.description} </a>
        </section>
    )
}

export { Download }