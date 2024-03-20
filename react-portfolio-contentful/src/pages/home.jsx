import useContentful from '../hooks/use_contentful';

import styles from '../assets/styles/main.module.scss';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import Hero from '../components/layout/page_hero';

const query = `query{
  landingPage(id: "5hkVcf0Mo383BUmgvW22Gy") {
    landingPageHero {
      heroHeadline {
        json
      }
      heroSubHeadline
      introduction {
        json
      }
    }
  }
}
`;

function Home() {

  let { data, errors } = useContentful(query);

  if (errors) return <span style={{ color: "red" }}>{errors.map((error) => error.message).join(",")}</span>;
  if (!data) return <span>Loading...</span>;

  const { landingPage } = data;

  const pageHero = landingPage.landingPageHero

  return (
    <div className={styles.c_container} id='farid-portfolio'>
      <Header />
      <main className={styles.c_main} data-page-template="landing page" data-page-theme="home" >
        <Hero type={pageHero} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;