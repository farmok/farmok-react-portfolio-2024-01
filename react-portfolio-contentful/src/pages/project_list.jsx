import useContentful from '../hooks/use_contentful';

import Header from '../components/layout/header';
import { PageTitle } from '../components/layout/hero';
import Card from '../components/common/card';
import Footer from '../components/layout/footer';

import styles from '../assets/styles/main.module.scss';

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
}`

function ProjectList() {
    let { data, errors } = useContentful(query);

    if (errors) return <span style={{ color: "red" }}>{errors.map((error) => error.message).join(",")}</span>;
    if (!data) return <span>Loading...</span>;

    const projectCollection = data;
    const projects = projectCollection.projectPageCollection.items
    const sortedProjects = projects.sort((a, b) => (a.projectCard.orderNumber - b.projectCard.orderNumber));

    return (
        <div className={styles.c_container} id='farid-portfolio'>
            <Header />
            <main className={styles.c_main} data-page-template='Project List Page'>
                <PageTitle title={'Collection of Projects'} />
                <section className={styles.c_body}>
                    <ul className={styles.project_list}>
                        {sortedProjects.map((project) => (
                            <li key={project.sys.id} className={styles.project_list__item}>
                                <Card template={project} />
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default ProjectList