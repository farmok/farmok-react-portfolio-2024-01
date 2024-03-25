import { useParams } from 'react-router-dom';
import useContentful from '../hooks/use_contentful';

import Header from '../components/layout/header';
import { ProjectHero } from '../components/layout/page_hero';
import Article from '../components/common/article';
import ProjectCarousel from '../components/layout/project_carousel';
import Footer from '../components/layout/footer';

import styles from '../assets/styles/main.module.scss';

function ProjectDetails() {

  const id = useParams()

  const query = `query{
    projectPage(id: "${id.id}"){
      projectHero{
          heroImage{
            url
            title
          }
          title{
            json
          }
          subTitle
          pageTags
      }
      projectSectionCollection(limit: 10){
        items{
            contentTitle
            contentBody{
              json
            }
            contentImage01{
              url
              title
              description
            }
            contentImage02{
              url
              title
              description
            }
          }
        }
      }
    }
  `;

  let { data, errors } = useContentful(query);

  if (errors) return <span style={{ color: "red" }}>{errors.map((error) => error.message).join(",")}</span>;
  if (!data) return <span>Loading...</span>;

  const { projectPage } = data;
  const projectHero = projectPage.projectHero
  const projectSection = projectPage.projectSectionCollection.items

  return (
    <div className={styles.c_container} id='farid-portfolio'>
      <Header />
      <main className={styles.c_main} data-page-template='project'>
        <ProjectHero template={projectHero} />
        <section className={styles.c_body}>
          {projectSection.map((section) => (
            <Article key={section.contentTitle} content={section} />
          ))}
        </section>
        <ProjectCarousel title={'Additional Projects'} pageID={id} />
      </main>
      <Footer />
    </div>
  );
}

export default ProjectDetails;