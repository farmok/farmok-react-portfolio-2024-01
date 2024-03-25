/* eslint-disable react/prop-types */
import useContentful from '../../hooks/use_contentful';

import Card from '../common/card';

import styles from '../../assets/styles/main.module.scss';

const query = `query{
  projectPageCollection{
    items{
      sys{
        id
      }
      projectCard{
        orderNumber
        cardThumbnail{
          url
          title
        }
        cardTag
        cardTitle
        cardSubtitle
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

export default ProjectCarousel;