/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

import styles from '../../assets/styles/main.module.scss';

function Hero({ template }) {
    const tags = template.projectTags

    return (
        <section className={styles.c_hero}>
            <img src={template.projectHeroImage.url} alt={template.projectHeroImage.title} />
            <hgroup className={styles.c_title}>
                <h1 className={styles.project_title}>{template.projectTitle}</h1>
                <h2 className={styles.project_subtitle}>{template.projectSubTitle}</h2>
                <div className={styles.project_tag__list}>
                    {tags.map((tag) => (
                        <p key={tag} className={styles.project_tag__item}>{tag}</p>
                    ))}
                </div>
            </hgroup>
        </section>
    );
}

export default Hero;