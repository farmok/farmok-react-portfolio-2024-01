import styles from '../assets/styles/main.module.scss';
import { Header } from '../components/layout/header';
import { Hero } from '../components/layout/hero';
import { Footer } from '../components/layout/footer';

export const Design = () => {
    return (
        <div className={styles.app} id='farid-portfolio'>
            <Header />
            <main className={styles.c_main}>
                <Hero template='landing page' type='design' />
                <h2>This is the Design Page</h2>
            </main>
            <Footer />
        </div>
    );
};