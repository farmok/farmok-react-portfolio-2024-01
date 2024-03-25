import useContentful from '../hooks/use_contentful';

import Header from '../components/layout/header';
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
    const projectList = projects.sort((a, b) => (a.orderNumber - b.orderNumber));

    return (
        <div className={styles.c_container} id='farid-portfolio'>
            <Header />
            <main className={styles.c_main} data-page-template='project'>
                <section className={styles.c_hero}>
                    <div className={styles.c_title}>
                        <h1 className={styles.project_title}>Collection of Projects</h1>
                    </div>
                </section>
                <section className={styles.c_body}>
                    <ul className={styles.project_list}>
                        {projectList.map((project) => (
                            <li key={project.projectCard.orderNumber} className={styles.project_list__item}>
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