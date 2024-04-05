import useContentful from '../hooks/use_contentful';

import Header from '../components/layout/header';
import { PageHero } from '../components/layout/hero';
import Carousel from '../components/common/carousel'
import Footer from '../components/layout/footer';

import styles from '../assets/styles/main.module.scss';

const query = `query{
  landingPage(id: "5hkVcf0Mo383BUmgvW22Gy"){
    pageHero {
      heroTemplate
      title{
        json
      }
      subTitle
      introduction{
        json
      }
    }

    pageSectionCollection(limit:10){
      items{
        __typename
        ... on LandingPageSection{
          sectionTitle
          sectionHero{
            heroTemplate
            title{
                json
              }
            subTitle
          }
          sectionTopicCollection(limit:5){
            items{
              contentTitle
              contentBody{
                json
              }
              contentImage01{
                url
                description
                title
              }
              contentImage02{
                url
                description
                title
              }
            }
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
}`;

function Home() {

  let { data, errors } = useContentful(query);

  if (errors) return <span style={{ color: "red" }}>{errors.map((error) => error.message).join(",")}</span>;
  if (!data) return <span>Loading...</span>;

  const { landingPage, projectPageCollection } = data
  const hero = landingPage.pageHero

  return (
    <div className={styles.c_wrapper} id='farid-portfolio'>
      <Header />
      <main className={styles.c_main} data-page-template='Landing Page'>
        <PageHero content={hero} theme='Home' />
        <Carousel title={'Project Spotlight'} cards={projectPageCollection} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;