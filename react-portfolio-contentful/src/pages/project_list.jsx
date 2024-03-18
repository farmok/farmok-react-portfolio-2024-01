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

    const projectList = data;

    console.log(projectList)

    const projects = projectList.projectPageCollection.items

    console.log(projects)

    return (
        <div className={styles.app} id='farid-portfolio'>
            <Header />
            <main className={styles.c_main} data-page-template='project'>
                <section className={styles.c_hero}>
                    <div className={styles.c_title}>
                        <h1 className={styles.project_title}>Collection of My Work</h1>
                    </div>
                </section>
                <section className={styles.c_portfolio}>
                    <ul className={styles.portfolio_block__group}>
                        {projects.map((project, index) => (
                            <li key={index} className={styles.portfolio_block__item}>
                                <Link to={`/project_detail/${project.sys.id}`} className={styles.card} data-role='design direction'>
                                    <img className={styles.card_image} src={project.projectCard.projectThumbnail.url} alt="" />
                                    <div className={styles.card_label}>
                                        <div className={styles.card_label}>
                                            <h4>{project.projectCard.projectTitle}</h4>
                                            <p>{project.projectCard.projectSubtitle}</p>
                                        </div>
                                    </div>
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