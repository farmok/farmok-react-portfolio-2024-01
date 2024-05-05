import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

import styles from '../assets/styles/main.module.scss';

function NotFound() {

    return (
        <div className={styles.c_wrapper} id='farid-portfolio'>
            <Header />
            <main className={styles.c_main} data-page-template='Landing Page'>
                <section className={styles.c_hero} data-template='Landing Page' data-theme='404'>
                    <hgroup className={styles.c_title}>
                        <h1 className={styles.hero_title}>
                            Error 404:<br />Page Not Found
                        </h1>
                        <p className={styles.c_introduction}><b>A rogue black hole devoured the page you were seeking.</b> It&apos;s now part of a singularity&apos;s bookmark collection.<br /><br />
                            Feel free to explore nearby star clusters while we recalibrate the navigation matrix.</p>
                    </hgroup>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default NotFound;