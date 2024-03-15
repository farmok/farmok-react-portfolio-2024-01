/* eslint-disable react/prop-types */
import styles from '../../assets/styles/main.module.scss';

export const Card = ({ template, URL, category, image, image_alt, title, subtitle }) => {
    return (
        <a href={URL} className={styles.c_card} data-role={category} data-template={template}>
            <img className={styles.card_image} src={image} alt={image_alt} />
            <div className={styles.card_content}>
                <h4 className={styles.card_title}>{title}</h4>
                <p className={styles.card_subtitle}>{subtitle}</p>
            </div>
        </a>
    );
};