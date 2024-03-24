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
        },
        [BLOCKS.UL_LIST]: (node, childern) => {
            return <ul>{childern}</ul>
        },
        [BLOCKS.OL_LIST]: (node, childern) => {
            return <ol>{childern}</ol>
        },
        [BLOCKS.LIST_ITEM]: (node, childern) => {
            return <li>{childern}</li>
        }
    }
}

function Hero({ template }) {
    const sectionHero = template.sectionTitle;

    let heroContent;

    if (sectionHero) {
        heroContent =
            <div className={styles.c_hero}>
                <div className={styles.c_container}>
                    <h2 className={styles.hero_headline}>{template.sectionHero.heroHeadline}</h2>
                    <p className={styles.hero_subhead}>{template.sectionHero.heroSubHeadline}</p>
                </div>
            </div>
    } else {
        heroContent =
            <section className={styles.c_hero}>
                <h1 className={styles.hero_headline}>
                    {documentToReactComponents(template.title.json, HERO_RICHTEXT_OPTIONS)}
                </h1>
                <h2 className={styles.hero_subhead}>{template.subTitle}</h2>
            </section>
    }

    return (
        <>
            {heroContent}
            {template.introduction &&
                <section className={styles.c_introduction}>
                    {documentToReactComponents(template.introduction.json, INTRO_RICHTEXT_OPTIONS)}
                </section>
            }
        </>
    );
}

export default Hero;