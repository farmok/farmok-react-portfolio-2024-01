import useContentful from '../hooks/use_contentful';

import styles from '../assets/styles/main.module.scss';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

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
                        {projectList.map((project, index) => (
                            <li key={index} className={styles.project_list__item}>
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
            </main>
            <Footer />
        </div>
    );
}

export default ProjectList