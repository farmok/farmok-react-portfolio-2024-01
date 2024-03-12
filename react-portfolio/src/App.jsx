// import { Nav_Route } from './routes';
// import styles from './assets/styles/main.module.scss';

import { PrismicRichText, useFirstPrismicDocument } from '@prismicio/react'

function App() {
  const [document] = useFirstPrismicDocument();

  console.log(document.data.body[2]);

  return (
    <div>
      {document && (
        <PrismicRichText field={document.data.example_rich_text} />
      )}
    </div>
  );
}

export default App