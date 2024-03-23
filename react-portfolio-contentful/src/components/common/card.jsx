/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

import styles from '../../assets/styles/main.module.scss';

function Card({ template }) {

    return (
        <Link to={`/project_detail/${template.sys.id}`} className={styles.c_card} data-role={template.projectCard.projectTag}>
            <img className={styles.card_image} src={template.projectCard.projectThumbnail.url} alt="" />
            <div className={styles.card_label}>
                <h4>{template.projectCard.projectTitle}</h4>
                <p>{template.projectCard.projectSubtitle}</p>
            </div>
            <p className={styles.card_cta}>Explore</p>
        </Link>
    );
}

export default Card;