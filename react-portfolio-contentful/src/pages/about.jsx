import useContentful from '../hooks/use_contentful';

import Header from '../components/layout/header';
import { PageTitle } from '../components/layout/hero';
import { JobContent } from '../components/common/article';
import ProjectCarousel from '../components/layout/project_carousel'
import Footer from '../components/layout/footer';

import styles from '../assets/styles/main.module.scss';

const query = `query{
  landingPage(id: "7a3l5v2aKisbcUAqdZoLqn") {
    pageTitle
    pageHero {
      heroTemplate
      title{
        json
      }
      subTitle
      pageTags
      documentDownload{
        url
      }
      introduction{
        json
      }
    }

    pageSectionCollection(limit:10){
      items{
        __typename
        ... on JobContentBlock{
          jobTitle
          employer
          dates
          summary{
            json
          }
        }
      }
    }
  }
}
`;

function About() {

  let { data, errors } = useContentful(query);

  if (errors) return <span style={{ color: "red" }}>{errors.map((error) => error.message).join(",")}</span>;
  if (!data) return <span>Loading...</span>;

  const { landingPage } = data
  const hero = landingPage.pageHero
  const jobs = landingPage.pageSectionCollection.items

  return (
    <div className={styles.c_container} id='farid-portfolio'>
      <Header />
      <main className={styles.c_main} data-page-template="landing page" data-page-theme="about" >
        <PageTitle content={hero} />
        <section className={styles.c_section}>
          {jobs.map((section) => (
            <JobContent key={section.jobTitle} content={section} />
          ))}
        </section>
        <ProjectCarousel title={'Project Spotlight'} />
      </main>
      <Footer />
    </div>
  );
}

export default About;


