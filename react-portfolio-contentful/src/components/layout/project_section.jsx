/* eslint-disable react/prop-types */
import styles from '../../assets/styles/main.module.scss';
import useContentful from '../../hooks/use_contentful';

import { Link } from 'react-router-dom';

const query = `query{
  projectPageCollection{
    items{
      sys{
        id
      }
      orderNumber
      projectCard{
        projectThumbnail{
          url
          title
        }
        projectTag
        projectTitle
        projectSubtitle
      }
    }
  }
}
`;

function ProjectSection() {


    let { data, errors } = useContentful(query);

    if (errors) return <span style={{ color: "red" }}>{errors.map((error) => error.message).join(",")}</span>;
    if (!data) return <span>Loading...</span>;

    const projectCollection = data;

    const projects = projectCollection.projectPageCollection.items
    const projectList = projects.sort((a, b) => (a.orderNumber - b.orderNumber));

    return (
        <section className={styles.c_body} data-type='project list'>
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