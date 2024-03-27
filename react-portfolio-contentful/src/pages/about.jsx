import useContentful from '../hooks/use_contentful';

import Header from '../components/layout/header';
import { PageTitle } from '../components/layout/hero';
import { JobContent } from '../components/common/article';
import { Download } from '../components/common/download';
import Carousel from '../components/common/carousel'
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
        description
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

function About() {

  let { data, errors } = useContentful(query);

  if (errors) return <span style={{ color: "red" }}>{errors.map((error) => error.message).join(",")}</span>;
  if (!data) return <span>Loading...</span>;

  const { landingPage, projectPageCollection } = data
  const hero = landingPage.pageHero
  const download = landingPage.pageHero.documentDownload
  const jobs = landingPage.pageSectionCollection.items

  return (
    <div className={styles.c_wrapper} id='farid-portfolio'>
      <Header />
      <main className={styles.c_main} data-page-template="About Page" >
        <PageTitle content={hero} theme='About' />
        <section className={styles.c_section}>
          {jobs.map((section) => (
            <JobContent key={section.jobTitle} content={section} />
          ))}
        </section>
        < Download content={download} />
        < Carousel title={'Project Spotlight'} cards={projectPageCollection} />
      </main>
      <Footer />
    </div>
  );
}

export default About;


