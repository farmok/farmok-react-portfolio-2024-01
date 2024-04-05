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

function Header() {
    let { data, errors } = useContentful(query);

    if (errors) return <span style={{ color: "red" }}>{errors.map((error) => error.message).join(",")}</span>;
    if (!data) return <span>Loading...</span>;

    const navigation = data.navigationBlock;

    const primary = navigation.primaryNavigationCollection;

    return (
        <header className={styles.c_header}>
            <h2 className={styles.header_logo}>
                <a href='/'>Farid<br />Mokraoui</a>
            </h2>
            <Navigation data={primary} />
        </header>
    );
}

export default Header;