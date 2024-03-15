/* eslint-disable react/prop-types */
import styles from '../../assets/styles/main.module.scss';

export const Topic = ({ direction, title, body, image, image_alt }) => {
    return (
        <article className={styles.c_topic} data-float={direction}>
            <div className={styles.topic_content}>
                <h3 className={styles.topic_title}>{title}</h3>
                <p className={styles.topic_body}>{body}</p>
            </div>
            <div className={styles.image_100}>
                <img src={image} alt={image_alt} />
            </div>
        </article >
    );
};