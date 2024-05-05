/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

import styles from '../../assets/styles/main.module.scss';

function Card({ template }) {

    return (
        <>
            <Link to={`/project_detail/${template.sys.id}`} className={styles.c_card} data-role={template.projectCard.cardTag} >
                <img className={styles.card_image} src={template.projectCard.cardThumbnail.url} alt={template.projectCard.cardTitle + " " + template.projectCard.cardSubtitle} />
                <div className={styles.card_labels}>
                    <h4>{template.projectCard.cardTitle}</h4>
                    <p>{template.projectCard.cardSubtitle}</p>
                </div>
                <p className={styles.card_cta}>Explore</p>
            </Link>
        </>
    );
}

export default Card;