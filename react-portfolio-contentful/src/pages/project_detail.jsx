import { useParams } from 'react-router-dom';
import useContentful from '../hooks/use_contentful';

import Header from '../components/layout/header';
import { ProjectHero } from '../components/layout/hero';
import { ProjectContent } from '../components/common/article';
import Carousel from '../components/common/carousel';
import Footer from '../components/layout/footer';

import styles from '../assets/styles/main.module.scss';

function ProjectDetails() {

  const id = useParams()

  const query = `query{
    projectPage(id: "${id.id}"){
      projectHero{
        heroTemplate
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

  let { data, errors } = useContentful(query);

  if (errors) return <span style={{ color: "red" }}>{errors.map((error) => error.message).join(",")}</span>;
  if (!data) return <span>Loading...</span>;

  const { projectPage, projectPageCollection } = data;
  const hero = projectPage.projectHero
  const sections = projectPage.projectSectionCollection.items

  return (
    <div className={styles.c_container} id='farid-portfolio'>
      <Header />
      <main className={styles.c_main} data-page-template='Project Page'>
        <ProjectHero content={hero} />
        <section className={styles.c_body}>
          {sections.map((section) => (
            <ProjectContent key={section.contentTitle} content={section} />
          ))}
        </section>
        <Carousel title={'Additional Projects'} pageID={id} cards={projectPageCollection} />
      </main>
      <Footer />
    </div>
  );
}

export default ProjectDetails;