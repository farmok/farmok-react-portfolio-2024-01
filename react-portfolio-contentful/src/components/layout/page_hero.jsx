/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

/* eslint-disable react/prop-types */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'

import styles from '../../assets/styles/main.module.scss';

const HERO_RICHTEXT_OPTIONS = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, childern) => {
            return <p>{childern}</p>
        }
    }
}

const INTRO_RICHTEXT_OPTIONS = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, childern) => {
            return <p>{childern}</p>
        }
    }
}


function Hero({ type }) {

    console.log(type)

    return (
        <>
            <section className={styles.c_hero}>
                <h1 className={styles.hero_headline}>
                    {documentToReactComponents(type.heroHeadline.json, HERO_RICHTEXT_OPTIONS)}
                </h1>
                <h2 className={styles.hero_subhead}>{type.heroSubHeadline}</h2>
            </section>
            <section className={styles.c_introduction}>
                {documentToReactComponents(type.introduction.json, INTRO_RICHTEXT_OPTIONS)}
            </section>
        </>
    );
}

export default Hero;