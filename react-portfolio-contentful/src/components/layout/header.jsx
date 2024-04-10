import useContentful from '../../hooks/use_contentful';
import { useState } from 'react';

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
  const [menuOpen, setMenuOpen] = useState(false);
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
      <nav className={styles.c_nav}>
        <div className={styles.nav__icon} style={menuOpen
          ? { maskImage: `url(https://images.ctfassets.net/jwwsi6yg5ser/3KCf30AWBEEJM4D3qQeVb5/292c255e4b51aad6d4de5a870340303e/menu_close-bold.svg)`, WebkitMaskImage: `url(https://images.ctfassets.net/jwwsi6yg5ser/3KCf30AWBEEJM4D3qQeVb5/292c255e4b51aad6d4de5a870340303e/menu_close-bold.svg)` }
          : { maskImage: `url(https://images.ctfassets.net/jwwsi6yg5ser/4QaEin8qRidJp6oZOVec5k/0604690dde0aabc49b568f51bad0016e/menu_rocket-bold.svg)`, WebkitMaskImage: `url(https://images.ctfassets.net/jwwsi6yg5ser/4QaEin8qRidJp6oZOVec5k/0604690dde0aabc49b568f51bad0016e/menu_rocket-bold.svg)` }} src="" alt=""
          onClick={() => setMenuOpen(!menuOpen)} />
        <ul className={`${styles.nav__group} ${menuOpen && styles.nav__open}`} onClick={() => setMenuOpen(false)}>
          <Navigation data={primary} />
        </ul>
      </nav>
    </header >
  );
}

export default Header;

