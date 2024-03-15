/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import styles from '../../assets/styles/main.module.scss';

function Hero({ type }) {
    return (
        <section className={styles.c_hero}>
            <img src={type.projectHeroImage.url} alt="" />
            <div className={styles.c_title}>
                <h1 className={styles.project_title}>{type.projectTitle}</h1>
                <h2 className={styles.project_subtitle}>{type.projectSubTitle}</h2>
                <p className={styles.project_tags}>{type.projectTags}</p>
            </div>
        </section>
    );
}

Hero.propTypes = {
    type: PropTypes.shape({
        projectHeroImage: PropTypes.shape({
            url: PropTypes.string.isRequired,
        }),
        projectTitle: PropTypes.string.isRequired,
        projectSubTitle: PropTypes.string.isRequired,
        projectTags: PropTypes.array.isRequired,
    }).isRequired,
};

export default Hero;