/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styles from '../../assets/styles/main.module.scss';

function Hero({ type }) {
    const tags = type.projectTags

    console.log(tags)

    return (
        <section className={styles.c_hero}>
            <img src={type.projectHeroImage.url} alt={type.projectHeroImage.title} />
            <hgroup className={styles.c_title}>
                <h1 className={styles.project_title}>{type.projectTitle}</h1>
                <h2 className={styles.project_subtitle}>{type.projectSubTitle}</h2>
                <div className={styles.project_tag__list}>
                    {tags.map((tag, index) => (
                        <p key={index} className={styles.project_tag__item}>{tag}</p>
                    ))}
                </div>
            </hgroup>
        </section>
    );
}

export default Hero;