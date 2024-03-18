import useContentful from '../hooks/use_contentful';

import styles from '../assets/styles/main.module.scss';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import Hero from '../components/layout/hero';
import Topic from '../components/common/topic';

const query = `query{
  projectPage(id:"U12v2mRNOc9EK6dewMY3L"){
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
          }
          topicImage02{
            url
            title
          }
        }
      }
    projectCard{
      cardId
      projectThumbnail{
        url
        title
      }
      projectTitle
      projectSubtitle
      projectTag
      projectUrl
    }
  }
  }
`;

function Home() {

  let { data, errors } = useContentful(query);

  if (errors) return <span style={{ color: "red" }}>{errors.map((error) => error.message).join(",")}</span>;
  if (!data) return <span>Loading...</span>;

  const { projectPage } = data;

  console.log(projectPage)

  const projectHero = projectPage.projectHero
  const projectSection = projectPage.projectSectionCollection.items

  return (
    <div className={styles.app} id='farid-portfolio'>
      <Header />
      <main className={styles.c_main} data-page-template="project">
        <Hero type={projectHero} />
        <section className={styles.c_body}>
          {projectSection.map((section, index) => (
            <Topic key={index} type={section} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;