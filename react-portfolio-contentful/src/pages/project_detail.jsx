import useContentful from "./hooks/use_contentful";
import styles from './assets/styles/main.module.scss';
import Hero from "./components/layout/hero";
import Topic from "./components/common/topic";

import Header from '../components/layout/header';
import Footer from '../components/layout/footer';



const query = `query{
  projectPage(id:"U12v2mRNOc9EK6dewMY3L"){
    projectHeroCollection{
      items{
        projectHeroImage{
          url
          title
        }
        projectTitle
        projectSubTitle
        projectTags
      }
    }
    projectSectionCollection{
      items{
          topicTitle
          topicBody{
            json
          }
          topicImage01{
            url
            title
          }
          topicImage02{
            url
            title
          }
        }
      }
    }
  }
`;

function ProjectDetails() {

    let { data, errors } = useContentful(query);

    if (errors) return <span style={{ color: "red" }}>{errors.map((error) => error.message).join(",")}</span>;
    if (!data) return <span>Loading...</span>;

    console.log(data);

    const { projectHero, projectSection } = data;

    console.log(projectSection)

    return (
        <div className={styles.App}>
            <Header />
            <main className={styles.c_main}>
                <Hero type={projectHero} />
                <section className={styles.c_body}>
                    <Topic type={projectSection} />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default ProjectDetails