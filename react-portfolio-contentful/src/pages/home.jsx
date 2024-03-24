import useContentful from '../hooks/use_contentful';

import Header from '../components/layout/header';
import Hero from '../components/layout/page_hero';
import Article from '../components/common/article';
import ProjectCarousel from '../components/layout/project_carousel'
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
          sectionHero{
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

function Home() {

  let { data, errors } = useContentful(query);

  if (errors) return <span style={{ color: "red" }}>{errors.map((error) => error.message).join(",")}</span>;
  if (!data) return <span>Loading...</span>;

  const { landingPage } = data
  const pageHero = landingPage.pageHero
  const pageSection = landingPage.pageSectionCollection.items

  console.log(pageHero)

  return (
    <div className={styles.c_container} id='farid-portfolio'>
      <Header />
      <main className={styles.c_main} data-page-template="landing page" data-page-theme="home" >
        <Hero template={pageHero} />
        {pageSection.map((section) => (
          <section key={section.sectionTitle} className={styles.c_section} data-section-name={section.sectionTitle}>
            <div className={styles.c_body}>
              {section.sectionTopicCollection.items.map((topic) => (
                <Article key={topic.topicTitle} content={topic} />
              ))}
            </div>
          </section>
        ))}
        <ProjectCarousel title={'Project Spotlight'} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;