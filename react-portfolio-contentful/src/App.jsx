import { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'



const query = `{
  projectHero(id: "5UZxUMOiGOyrL1dMCa9Ek8") {
    projectHeroImage {
      url
    }
    projectTitle
    projectSubTitle
    projectTags
  }
}`;

const REACT_APP_SPACE_ID = import.meta.env.VITE_REACT_APP_SPACE_ID;

function App() {

  const [page, setPage] = useState(null);
  // const [count, setCount] = useState(0)


  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer _9p3Q-zBodSzjc1ObgbLdabl-t7aIOc4Sd5fcApTFW4",
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setPage(data.projectHero);
      });
  }, []);

  if (!page) {
    return "Loading...";
  }

  return (
    <>
      <div className="App">
        <section className="c_hero">
          <img src={page.projectHeroImage.url} alt="" />
          <div className="c_title">
            <h1 className="project_title">{page.projectTitle}</h1>
            <h2>{page.projectSubTitle}</h2>
            <p className="project_tags">{page.projectTags}</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default App