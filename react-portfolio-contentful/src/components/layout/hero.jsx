/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'

import styles from '../../assets/styles/main.module.scss';
import { Download } from '../common/download';

const HERO_RICHTEXT_OPTIONS = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, childern) => { return <p>{childern}</p> }
    }
}

const SECTION_HERO_RICHTEXT_OPTIONS = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, childern) => { return <>{childern}</> }
    }
}

const TITLE_RICHTEXT_OPTIONS = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, childern) => { return <>{childern}</> }
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
        },
        [INLINES.HYPERLINK]: (node, children) => {
            return <a href={node.data.uri}>{children}</a>
        }
    }
}

function PageHero({ content, theme }) {

    return (
        <>
            <section className={styles.c_hero} data-template={content.heroTemplate} data-theme={theme}>
                <hgroup className={styles.c_title}>
                    <h1 className={styles.hero_title}>
                        {documentToReactComponents(content.title.json, HERO_RICHTEXT_OPTIONS)}
                    </h1>
                    <h2 className={styles.hero_subtitle}>{content.subTitle}</h2>
                </hgroup>
            </section>
            {content.introduction &&
                <section className={styles.c_introduction} data-theme={theme}>
                    {documentToReactComponents(content.introduction.json, INTRO_RICHTEXT_OPTIONS)}
                </section>
            }
        </>
    );
}


function SectionHero({ content, theme }) {

    return (
        <div className={styles.c_hero} data-template={content.sectionHero.heroTemplate} data-theme={theme}>
            <hgroup className={styles.c_title}>
                <h2 className={styles.hero_title}>
                    {documentToReactComponents(content.sectionHero.title.json, SECTION_HERO_RICHTEXT_OPTIONS)}
                </h2>
                <p className={styles.hero_subtitle}>{content.sectionHero.subTitle}</p>
            </hgroup>
        </div>
    );
}

function ProjectHero({ content }) {

    const tags = content.pageTags

    return (
        <section className={styles.c_hero} data-template={content.heroTemplate}>
            <img src={content.heroImage.url} alt={content.heroImage.title} />
            <hgroup className={styles.c_title}>
                <h1 className={styles.hero_title}>{documentToReactComponents(content.title.json, TITLE_RICHTEXT_OPTIONS)}</h1>
                <h2 className={styles.hero_subtitle}>{content.subTitle}</h2>
                <div className={styles.page_tag__list}>
                    {tags.map((tag) => (
                        <p key={tag} className={styles.page_tag__item}>{tag}</p>
                    ))}
                </div>
            </hgroup>
        </section>
    );
}

function PageTitle({ content, title, theme }) {
    if (!content) {
        return (
            <section className={styles.c_hero} data-template='Project List Page'>
                <hgroup className={styles.c_title}>
                    <h1 className={styles.hero_title}>{title}</h1>
                </hgroup>
            </section>
        )
    } else {

        const tags = content.pageTags
        const download = content.documentDownload

        return (
            <>
                <section className={styles.c_hero} data-template={content.heroTemplate}>
                    <hgroup className={styles.c_title}>
                        <h1 className={styles.hero_title}>{documentToReactComponents(content.title.json, TITLE_RICHTEXT_OPTIONS)}</h1>
                        {tags &&
                            <div className={styles.page_tag__list}>
                                {tags.map((tag) => (
                                    <p key={tag} className={styles.page_tag__item}>{tag}</p>
                                ))}
                            </div>
                        }
                    </hgroup>
                </section>
                {download &&
                    < Download key='download 01' content={download} />
                }
                {content.introduction &&
                    <section className={styles.c_introduction} data-theme={theme}>
                        {documentToReactComponents(content.introduction.json, INTRO_RICHTEXT_OPTIONS)}
                    </section>
                }
            </>
        );
    }
}

export { PageHero, SectionHero, ProjectHero, PageTitle }