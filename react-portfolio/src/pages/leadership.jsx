import styles from '../assets/styles/main.module.scss';
import { Header } from '../components/layout/header/Header';
import { Hero } from '../components/layout/hero/Hero';
import { Footer } from '../components/layout/footer/Footer';

export const Leadership = () => {
    return (
        <div className={styles.app} id='farid-portfolio'>
            <Header />
            <main className={styles.c_main}>
                <Hero template='landing page' type='leadership' />
                <h2>This is the Leadership Page</h2>
            </main>
            <Footer />
        </div>
    );
};