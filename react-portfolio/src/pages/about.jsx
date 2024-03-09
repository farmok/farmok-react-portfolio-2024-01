import styles from '../assets/styles/main.module.scss';
import { Header } from '../components/layout/header/Header';
import { Hero } from '../components/layout/hero/Hero';
import { Footer } from '../components/layout/footer/Footer';

export const About = () => {
    return (
        <div className={styles.app} id='farid-portfolio'>
            <Header />
            <main className={styles.c_main}>
                <Hero template='landing page' type='about' />
                <h2>This is the About Page for my site.</h2>
            </main>
            <Footer />
        </div>
    );
};