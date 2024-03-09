import styles from '../../../assets/styles/main.module.scss';

// eslint-disable-next-line react/prop-types
export const Hero = ({ template, type }) => {
    return (
        <section className={styles.c_hero} data-page-template={template} data-page-type={type}>
            <div className={styles.c_container}>
                <h1 className={styles.hero_headline}>Beyond The <span>Horizon</span></h1>
                <p className={styles.hero_subhead}>Curiosity-Driven Leadership</p>
            </div>
        </section>
    );
};