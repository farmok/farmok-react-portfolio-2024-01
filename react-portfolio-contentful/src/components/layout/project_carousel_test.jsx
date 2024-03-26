/* eslint-disable react/prop-types */
import Card from '../common/card';

import styles from '../../assets/styles/main.module.scss';

function ProjectCarouselTest({ title, pageID, cards }) {

    const projectCollection = cards;
    const projects = projectCollection.items
    const sortedProjects = projects.sort((a, b) => (a.projectCard.orderNumber - b.projectCard.orderNumber));

    if (pageID == undefined) { pageID = 'null' }

    return (
        <section className={styles.c_body} data-type='project list'>
            <h3 className={styles.section_title}>{title}</h3>
            <ul className={styles.project_list}>
                {sortedProjects.map((project) => {

                    if (project.sys.id !== pageID.id) {
                        return (
                            <li key={project.sys.id} className={styles.project_list__item}>
                                <Card template={project} />
                            </li>)
                    }
                }
                )}
            </ul>
        </section>
    );
}

export default ProjectCarouselTest;