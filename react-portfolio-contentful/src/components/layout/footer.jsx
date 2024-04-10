import useContentful from '../../hooks/use_contentful';

import Navigation from '../common/navigation';

import styles from '../../assets/styles/main.module.scss';

const query = `query{
    navigationBlock(id:"6Z3fKgEbpAVFbaL8Yg0n0Y"){
      primaryNavigationCollection(limit:10){
        items{
          navigationLabel
          navigationUrl
        }
      }
      socialNavigationCollection(limit:10){
        items{
          navigationLabel
          navigationUrl
          navigationImage{
            url
            title
          }
        }
      }
    }
  }`


function Footer() {
  let { data, errors } = useContentful(query);

  if (errors) return <span style={{ color: "red" }}>{errors.map((error) => error.message).join(",")}</span>;
  if (!data) return <span>Loading...</span>;

  const navigation = data.navigationBlock;

  const primary = navigation.primaryNavigationCollection;
  const social = navigation.socialNavigationCollection;

  return (
    <footer className={styles.c_footer}>
      <nav className={styles.c_nav}>
        <ul className={styles.nav__group}>
          <Navigation data={primary} />
        </ul>
      </nav>
      <nav className={styles.c_nav}>
        <ul className={styles.nav__group}>
          <Navigation data={social} />
        </ul>
      </nav>
    </footer >
  );
}

export default Footer;