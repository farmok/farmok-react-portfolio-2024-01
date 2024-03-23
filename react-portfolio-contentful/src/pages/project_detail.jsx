import { useParams } from 'react-router-dom';
import useContentful from '../hooks/use_contentful';

import Header from '../components/layout/header';
import Hero from '../components/layout/project_hero';
import Article from '../components/common/article';
import ProjectCarousel from '../components/layout/project_carousel';
import Footer from '../components/layout/footer';

import styles from '../assets/styles/main.module.scss';

function ProjectDetails() {

  const id = useParams()

  const query = `query{
    projectPage(id: "${id.id}"){
      projectHero{
          projectHeroImage{
            url
            title
          }
          projectTitle
          projectSubTitle
          projectTags
      }
      projectSectionCollection(limit: 10){
        items{
            topicTitle
            topicBody{
              json
            }
            topicImage01{
              url
              title
              description
            }
            topicImage02{
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
        <Hero template={projectHero} />
        <section className={styles.c_body}>
          {projectSection.map((section, index) => (
            <Article key={index} content={section} />
          ))}
        </section>
        <ProjectCarousel title={'Additional Projects'} pageID={id} />
      </main>
      <Footer />
    </div>
  );
}

export default ProjectDetails;