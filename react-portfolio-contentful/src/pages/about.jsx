import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import useContentful from '../hooks/use_contentful';

import Header from '../components/layout/header';
import ProjectCarousel from '../components/layout/project_carousel'
import Footer from '../components/layout/footer';

import styles from '../assets/styles/main.module.scss';

const query = `query{
  landingPage(id: "7a3l5v2aKisbcUAqdZoLqn") {
    pageTitle
    pageHero {
      __typename
      ... on LandingPageHero {
        heroHeadline{
          json
        }
        heroSubHeadline
        introduction{
          json
        }
      }
      ... on LandingPageTitle {
        pageTitle
        landingPageTags
        document{
          url
        }
        introduction{
          json
        }
      }
    }

    pageSectionCollection(limit:10){
      items{
        __typename
        ... on LandingPageSection{
          sectionHero{
            heroHeadline
            heroSubHeadline
          }
          sectionTopicCollection(limit:5){
            items{
              topicTitle
              topicBody{
                json
              }
              topicImage01{
                url
                description
                title
              }
              topicImage02{
                url
                description
                title
              }
            }
          }
        }
        ... on JobHistorySection{
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
    const pageHero = landingPage.pageHero
    const tags = pageHero.landingPageTags
    const pageSection = landingPage.pageSectionCollection.items

    const RICHTEXT_OPTIONS = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, childern) => {
                return <p>{childern}</p>
            },
            [BLOCKS.UL_LIST]: (node, childern) => {
                return <ul>{childern}</ul>
            },
            [BLOCKS.OL_LIST]: (node, childern) => {
                return <ol>{childern}</ol>
            },
            [BLOCKS.LIST_ITEM]: (node, childern) => {
                return <li>{childern}</li>
            },
            [INLINES.HYPERLINK]: (node, children) => {
                return <a href={node.data.uri}>{children}</a>
            }
        }
    }

    return (
        <div className={styles.c_container} id='farid-portfolio'>
            <Header />
            <main className={styles.c_main} data-page-template="landing page" data-page-theme="about" >
                <section className={styles.c_hero}>
                    <div className={styles.c_title}>
                        <h1 className={styles.project_title}>{pageHero.pageTitle}</h1>
                        <div className={styles.project_tag__list}>
                            {tags.map((tag) => (
                                <p key={tag} className={styles.project_tag__item}>{tag}</p>
                            ))}
                        </div>
                        <a href={pageHero.document.url} target='blank'> Download Resume </a>
                    </div>
                </section>
                <section className={styles.c_section}>
                    {pageSection.map((section) => (
                        <article key={section.jobTitle} className={styles.c_topic}>
                            <div className={styles.topic_content}>
                                <h3 className={styles.topic_title}>{section.jobTitle}</h3>
                                <h4 className={styles.topic_title}>{section.employer}</h4>
                                <h3 className={styles.topic_title}>{section.dates}</h3>
                                <div className={styles.topic_body}>
                                    {documentToReactComponents(section.summary.json, RICHTEXT_OPTIONS)}
                                </div>
                            </div>
                        </article >
                    ))}
                </section>
                <ProjectCarousel title={'Project Spotlight'} />
            </main>
            <Footer />
        </div>
    );
}

export default About;


