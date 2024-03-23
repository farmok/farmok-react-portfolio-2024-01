import useContentful from '../hooks/use_contentful';

import Header from '../components/layout/header';
import Hero from '../components/layout/page_hero';
import Article from '../components/common/article';
import Footer from '../components/layout/footer';

import styles from '../assets/styles/main.module.scss';

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


    let { data, errors } = useContentful(query);

    if (errors) return <span style={{ color: "red" }}>{errors.map((error) => error.message).join(",")}</span>;
    if (!data) return <span>Loading...</span>;

    const { landingPage } = data;
    const pageHero = landingPage.landingPageHero
    const pageSection = landingPage.landingPageSectionCollection.items

    return (
        <div className={styles.c_container} id='farid-portfolio'>
            <Header />
            <main className={styles.c_main} data-page-template="landing page" data-page-theme="leadership" >
                <Hero template={pageHero} />
                {pageSection.map((section) => (
                    <section key={section.sectionTitle} className={styles.c_section} data-section-name={section.sectionTitle}>
                        <Hero template={section} />
                        <div className={styles.c_body}>
                            {section.sectionTopicCollection.items.map((topic) => (
                                <Article key={topic.topicTitle} content={topic} />
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