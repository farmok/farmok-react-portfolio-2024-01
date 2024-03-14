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

const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

function App() {

  const [page, setPage] = useState(null);
  // const [count, setCount] = useState(0)

  console.log(REACT_APP_CDA_TOKEN + '---' + REACT_APP_SPACE_ID)

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/jwwsi6yg5ser/`, {
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
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
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