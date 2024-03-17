/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
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

function Topic({ type }) {
    return (
        <article className={styles.c_topic + " " + styles.m_media_right}>
            <div className={styles.topic_content}>
                <h3 className={styles.topic_title}>{type.items[0].topicTitle}</h3>
                <div className={styles.topic_body}>
                    {documentToReactComponents(type.items[0].topicBody.json, RICHTEXT_OPTIONS)}
                </div>
            </div>
            <div className={styles.images_100}>
                <img src={type.items[0].topicImage01.url} alt={type.items[0].topicImage01.title} />
                <img src={type.items[0].topicImage02.url} alt={type.items[0].topicImage02.title} />
            </div>
        </article >
    );
}

Topic.propTypes = {
    type: PropTypes.shape({
        topicImage01: PropTypes.shape({
            url: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        }),
        topicImage02: PropTypes.shape({
            url: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        }),
        topicTitle: PropTypes.string.isRequired,
    }).isRequired,
};

export default Topic;

