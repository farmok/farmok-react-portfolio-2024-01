import styles from '../assets/styles/main.module.scss';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

function About() {
    return (
        <div className={styles.app} id='farid-portfolio'>
            <Header />
            <main className={styles.c_main}>
                <h2>This is the About Page for my site.</h2>
            </main>
            <Footer />
        </div>
    );
}

export default About;