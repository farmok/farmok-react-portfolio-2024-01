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

const SECTION_HERO_RICHTEXT_OPTIONS = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, childern) => {
            return <>{childern}</>
        }
    }
}

const TITLE_RICHTEXT_OPTIONS = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, childern) => {
            return <>{childern}</>
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

function PageHero({ template }) {

    return (
        <>
            <section className={styles.c_hero}>
                <h1 className={styles.hero_headline}>
                    {documentToReactComponents(template.title.json, HERO_RICHTEXT_OPTIONS)}
                </h1>
                <h2 className={styles.hero_subhead}>{template.subTitle}</h2>
            </section>
            {template.introduction &&
                <section className={styles.c_introduction}>
                    {documentToReactComponents(template.introduction.json, INTRO_RICHTEXT_OPTIONS)}
                </section>
            }
        </>
    );
}


function SectionHero({ template }) {

    return (
        <>
            <div className={styles.c_hero}>
                <div className={styles.c_container}>
                    <h2 className={styles.hero_headline}>
                        {documentToReactComponents(template.sectionHero.title.json, SECTION_HERO_RICHTEXT_OPTIONS)}
                    </h2>
                    <p className={styles.hero_subhead}>{template.sectionHero.subTitle}</p>
                </div>
            </div>
            {template.introduction &&
                <section className={styles.c_introduction}>
                    {documentToReactComponents(template.introduction.json, INTRO_RICHTEXT_OPTIONS)}
                </section>
            }
        </>
    );
}

function ProjectHero({ template }) {
    const tags = template.pageTags

    console.log(template)

    return (
        <section className={styles.c_hero}>
            <img src={template.heroImage.url} alt={template.heroImage.title} />
            <hgroup className={styles.c_title}>
                <h1 className={styles.project_title}>{documentToReactComponents(template.title.json, TITLE_RICHTEXT_OPTIONS)}</h1>
                <h2 className={styles.project_subtitle}>{template.subTitle}</h2>
                <div className={styles.project_tag__list}>
                    {tags.map((tag) => (
                        <p key={tag} className={styles.project_tag__item}>{tag}</p>
                    ))}
                </div>
            </hgroup>
        </section>
    );
}

export { PageHero, SectionHero, ProjectHero }