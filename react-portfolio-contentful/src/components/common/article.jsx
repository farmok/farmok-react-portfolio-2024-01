/* eslint-disable react/prop-types */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'

import styles from '../../assets/styles/main.module.scss';

const RICHTEXT_OPTIONS = {
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

function PageContent({ content }) {
    if (content.contentImage01 || content.contentImage02) {
        return (
            <article className={styles.c_topic}>
                <div className={styles.topic_content}>
                    <h3 className={styles.topic_title}>{content.contentTitle}</h3>
                    <div className={styles.topic_body}>
                        {documentToReactComponents(content.contentBody.json, RICHTEXT_OPTIONS)}
                    </div>
                </div>
                <div className={styles.topic_media}>
                    {content.contentImage01 && <figure className={styles.images_100}><img src={content.contentImage01.url} alt={content.contentImage01.title} /><figcaption className={styles.topic_image__caption}>{content.contentImage01.description}</figcaption></figure>}
                    {content.contentImage02 && <figure className={styles.images_100}><img src={content.contentImage02.url} alt={content.contentImage02.title} /><figcaption className={styles.topic_image__caption}>{content.contentImage02.description}</figcaption></figure>}
                </div>
            </article >
        );
    } else {
        return (
            <article className={styles.c_topic}>
                <div className={styles.topic_content}>
                    <h3 className={styles.topic_title}>{content.contentTitle}</h3>
                    <div className={styles.topic_body}>
                        {documentToReactComponents(content.contentBody.json, RICHTEXT_OPTIONS)}
                    </div>
                </div>
            </article >
        );
    }
}

function ProjectContent({ content }) {
    if (content.contentImage01 || content.contentImage02) {
        return (
            <article className={styles.c_topic}>
                <div className={styles.topic_content}>
                    <h3 className={styles.topic_title}>{content.contentTitle}</h3>
                    <div className={styles.topic_body}>
                        {documentToReactComponents(content.contentBody.json, RICHTEXT_OPTIONS)}
                    </div>
                </div>
                <div className={styles.topic_media}>
                    {content.contentImage01 && <figure className={styles.images_100}><img src={content.contentImage01.url} alt={content.contentImage01.title} /><figcaption className={styles.topic_image__caption}>{content.contentImage01.description}</figcaption></figure>}
                    {content.contentImage02 && <figure className={styles.images_100}><img src={content.contentImage02.url} alt={content.contentImage02.title} /><figcaption className={styles.topic_image__caption}>{content.contentImage02.description}</figcaption></figure>}
                </div>
            </article >
        );
    } else {
        return (
            <article className={styles.c_topic}>
                <div className={styles.topic_content}>
                    <h3 className={styles.topic_title}>{content.contentTitle}</h3>
                    <div className={styles.topic_body}>
                        {documentToReactComponents(content.contentBody.json, RICHTEXT_OPTIONS)}
                    </div>
                </div>
            </article >
        );
    }
}

function JobContent({ content }) {
    return (
        <article key={content.jobTitle} className={styles.c_topic}>
            <div className={styles.job_content}>
                <hgroup className={styles.c_title}>
                    <h3 className={styles.job_title}>{content.jobTitle}</h3>
                    <h4 className={styles.job_employer}>{content.employer}</h4>
                    <h5 className={styles.job_dates}>{content.dates}</h5>
                </hgroup>
                <div className={styles.job_summary}>
                    {documentToReactComponents(content.summary.json, RICHTEXT_OPTIONS)}
                </div>
            </div>
        </article >
    );
}

export { PageContent, ProjectContent, JobContent, }