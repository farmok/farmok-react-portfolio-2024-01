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

function Article({ content }) {
    return (
        <article className={styles.c_topic}>
            <div className={styles.topic_content}>
                <h3 className={styles.topic_title}>{content.contentTitle}</h3>
                <div className={styles.topic_body}>
                    {documentToReactComponents(content.contentBody.json, RICHTEXT_OPTIONS)}
                </div>
            </div>
            <div className={styles.topic_media}>
                <figure className={styles.images_100}><img src={content.contentImage01.url} alt={content.contentImage01.title} /><figcaption className={styles.topic_image__caption}>{content.contentImage01.description}</figcaption></figure>
                {content.contentImage02 && <figure className={styles.images_100}><img src={content.contentImage02.url} alt={content.contentImage02.title} /><figcaption className={styles.topic_image__caption}>{content.contentImage02.description}</figcaption></figure>}
            </div>
        </article >
    );
}

export default Article;