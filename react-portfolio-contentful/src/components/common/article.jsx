/* eslint-disable react/prop-types */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'

import styles from '../../assets/styles/main.module.scss';

const RICHTEXT_OPTIONS = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, childern) => {
            return <p>{childern}</p>
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
                <h3 className={styles.topic_title}>{content.topicTitle}</h3>
                <div className={styles.topic_body}>
                    {documentToReactComponents(content.topicBody.json, RICHTEXT_OPTIONS)}
                </div>
            </div>
            <div className={styles.topic_media}>
                <figure className={styles.images_100}><img src={content.topicImage01.url} alt={content.topicImage01.title} /><figcaption className={styles.topic_image__caption}>{content.topicImage01.description}</figcaption></figure>
                {content.topicImage02 && <figure className={styles.images_100}><img src={content.topicImage02.url} alt={content.topicImage02.title} /><figcaption className={styles.topic_image__caption}>{content.topicImage02.description}</figcaption></figure>}
            </div>
        </article >
    );
}

export default Article;