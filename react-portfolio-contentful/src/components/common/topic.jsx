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
                <h3 className={styles.topic_title}>{type.topicTitle}</h3>
                <div className={styles.topic_body}>
                    {documentToReactComponents(type.topicBody.json, RICHTEXT_OPTIONS)}
                </div>
            </div>
            <div className={styles.images_100}>
                <img src={type.topicImage01.url} alt={type.topicImage01.title} />
                <img src={type.topicImage02.url} alt={type.topicImage02.title} />
            </div>
        </article >
    );
}

export default Topic;

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

