/* eslint-disable react/prop-types */
import Card from '../common/card';

import styles from '../../assets/styles/main.module.scss';

function Carousel({ title, pageID, cards }) {

  const projectCollection = cards;
  const projects = projectCollection.items
  const sortedProjects = projects.sort((a, b) => (a.projectCard.orderNumber - b.projectCard.orderNumber));

  if (pageID == undefined) { pageID = 'null' }

  return (
    <section className={styles.c_carousel}>
      <h4 className={styles.carousel_title}>{title}</h4>
      <ul className={styles.card_list}>
        {sortedProjects.map((project) => {

          if (project.sys.id !== pageID.id) {
            return (
              <li key={project.sys.id} className={styles.card_list__item}>
                <Card template={project} />
              </li>)
          }
        }
        )}
      </ul>
    </section>
  );
}

export default Carousel;