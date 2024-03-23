/* eslint-disable react/prop-types */
// import { Link } from 'react-router-dom';
import useContentful from '../../hooks/use_contentful';

import Card from '../common/card';

import styles from '../../assets/styles/main.module.scss';

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

function ProjectCarousel({ title, pageID }) {

  let { data, errors } = useContentful(query);

  if (errors) return <span style={{ color: "red" }}>{errors.map((error) => error.message).join(",")}</span>;
  if (!data) return <span>Loading...</span>;


  const projectCollection = data;
  const projects = projectCollection.projectPageCollection.items
  const projectList = projects.sort((a, b) => (a.orderNumber - b.orderNumber));

  return (
    <section className={styles.c_body} data-type='project list'>
      <h3 className={styles.section_title}>{title}</h3>
      <ul className={styles.project_list}>
        {/* {projectList.map((project) => {

          console.log(pageID.id)
          console.log(project.sys.id)

          {
            project.sys.id !== pageID.id &&
              <li key={project.orderNumber} className={styles.project_list__item}>
                <Card template={project} />
              </li>
          }
        }
        )} */}
        {projectList.map((project) => (
          <li key={project.orderNumber} className={styles.project_list__item}>
            <Card template={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectCarousel;