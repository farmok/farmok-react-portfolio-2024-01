/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styles from '../../assets/styles/main.module.scss';

function Hero({ type }) {
    return (
        <section className={styles.c_hero}>
            <img src={type.projectHeroImage.url} alt={type.projectHeroImage.title} />
            <div className={styles.c_title}>
                <h1 className={styles.project_title}>{type.projectTitle}</h1>
                <h2 className={styles.project_subtitle}>{type.projectSubTitle}</h2>
                <p className={styles.project_tags}>{type.projectTags}</p>
            </div>
        </section>
    );
}

export default Hero;