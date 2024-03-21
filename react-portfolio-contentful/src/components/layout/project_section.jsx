/* eslint-disable react/prop-types */
import styles from '../../assets/styles/main.module.scss';

// import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

function ProjectSection({ data }) {

    const projectList = data.sort((a, b) => (a.orderNumber - b.orderNumber));
    console.log(projectList);

    return (
        <section className={styles.c_body}>
            <h3 className={styles.section_title}>Project Spotlight</h3>
            <ul className={styles.project_list}>
                {projectList.map((project) => (
                    <li key={project.orderNumber} className={styles.project_list__item}>
                        <Link to={`/project_detail/${project.sys.id}`} className={styles.c_card} data-role={project.projectCard.projectTag}>
                            <img className={styles.card_image} src={project.projectCard.projectThumbnail.url} alt="" />
                            <div className={styles.card_label}>
                                <h4>{project.projectCard.projectTitle}</h4>
                                <p>{project.projectCard.projectSubtitle}</p>
                            </div>
                            <p className={styles.card_cta}>Explore</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ProjectSection;