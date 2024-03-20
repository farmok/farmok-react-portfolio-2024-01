import useContentful from '../hooks/use_contentful';

import styles from '../assets/styles/main.module.scss';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import Hero from '../components/layout/page_hero';
import Topic from '../components/common/topic';

function Leadership() {

    const query = `query{
  landingPage(id:"28wSSYlYqCBVQCG2v56O02"){
    landingPageHero{
      heroHeadline{
        json
      }
      heroSubHeadline
      introduction{
        json
      }
    }
    landingPageSectionCollection(limit:10){
      items{
        sectionTitle
        sectionHero{
          heroHeadline
          heroSubHeadline
        }
        sectionTopicCollection(limit:10){
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
  }
}
`;

    // console.log(query)

    let { data, errors } = useContentful(query);

    if (errors) return <span style={{ color: "red" }}>{errors.map((error) => error.message).join(",")}</span>;
    if (!data) return <span>Loading...</span>;

    const { landingPage } = data;

    const pageHero = landingPage.landingPageHero
    const pageSection = landingPage.landingPageSectionCollection.items


    // console.log(pageSection)
    // console.log(pageHero)

    return (
        <div className={styles.c_container} id='farid-portfolio'>
            <Header />
            <main className={styles.c_main} data-page-template="landing page" data-page-theme="leadership" >
                <Hero type={pageHero} />
                {pageSection.map((section) => (
                    <section key={section.sectionTitle} className={styles.c_section} data-section-name={section.sectionTitle}>
                        <div className={styles.c_hero}>
                            <div className={styles.c_container}>
                                <h2 className={styles.hero_headline}>{section.sectionHero.heroHeadline}</h2>
                                <p className={styles.hero_subhead}>{section.sectionHero.heroSubHeadline}</p>
                            </div>
                        </div>
                        <div className={styles.c_body}>
                            {section.sectionTopicCollection.items.map((topics) => (
                                <Topic key={topics.topicTitle} type={topics} />
                            ))}
                        </div>
                    </section>
                ))}
            </main>
            <Footer />
        </div>
    );
}

export default Leadership;