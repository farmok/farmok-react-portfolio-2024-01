import styles from '../assets/styles/main.module.scss';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

function Design() {
    return (
        <div className={styles.app} id='farid-portfolio'>
            <Header />
            <main className={styles.c_main}>
                <h2>This is the Design Page</h2>
            </main>
            <Footer />
        </div>
    );
}

export default Design;