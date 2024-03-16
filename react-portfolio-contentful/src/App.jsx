import useContentful from "./hooks/use_contentful";
import './App.css'
import styles from './assets/styles/main.module.scss';
import Hero from "./components/layout/hero";
import Topic from "./components/common/topic";



const query = `query {
  projectHero(id: "5UZxUMOiGOyrL1dMCa9Ek8") {
    projectHeroImage {
      url
    }
    projectTitle
    projectSubTitle
    projectTags
  }
  
  projectSection(id: "6QsYpiG1XK30Who5JrKGMD"){
    topicTitle
    topicBody{
      json
    }
    topicImage01 {
      url
      title
    }
    topicImage02 {
      url
      title
    }
  }
}`;

function App() {

  let { data, errors } = useContentful(query);

  if (errors) return <span style={{ color: "red" }}>{errors.map((error) => error.message).join(",")}</span>;
  if (!data) return <span>Loading...</span>;

  console.log(data);

  const { projectHero, projectSection } = data;

  console.log(projectSection)

  return (
    <div className={styles.App}>
      <Hero type={projectHero} />
      <section className={styles.c_body}>
        <Topic type={projectSection} />
      </section>
    </div>
  )
}

export default App