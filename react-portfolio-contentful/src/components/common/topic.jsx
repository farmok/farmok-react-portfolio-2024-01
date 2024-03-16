/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import styles from '../../assets/styles/main.module.scss';

function Topic({ type }) {
    return (
        <article className={styles.c_topic}>
            <div className={styles.topic_content}>
                <h3 className={styles.topic_title}>{type.topicTitle}</h3>
                {/* <p className={styles.topic_body}>{type.topicBody}</p> */}
            </div>
            <div className={styles.image_100}>
                <img src={type.topicImage01.url} alt={type.topicImage01.title} />
                <img src={type.topicImage02.url} alt={type.topicImage02.title} />
            </div>
        </article >
    );
};

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

