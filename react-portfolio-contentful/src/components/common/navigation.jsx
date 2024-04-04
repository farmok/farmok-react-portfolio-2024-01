// import useContentful from '../../hooks/use_contentful';

/* eslint-disable react/prop-types */
// import styles from '../../assets/styles/main.module.scss';

// const query = `query{
//     navigationBlock(id: "63UDPt0LWVlxQJxBVSf852"){
//         primaryNavigationCollection{
//             items{
//                 orderNumber
//                 navigationLabel
//                 navigationUrl
//             }
//         }

//     }
// }`

function Navigation() {

    console.log('hello world');
    // let { data, errors } = useContentful(query);

    // if (errors) return <span style={{ color: "red" }}>{errors.map((error) => error.message).join(",")}</span>;
    // if (!data) return <span>Loading...</span>;

    // const navigation = data;

    // const navigationLinks = navigation.navigationBlock.primaryNavigationCollection.items
    // const sortedProjects = navigationLinks.sort((a, b) => (a.projectCard.orderNumber - b.projectCard.orderNumber));

    // return (
    //     <nav className={styles.c_nav} data-page-template={template}>
    //         <ul className={styles.nav__group}>
    //             {template.items.map((navigationLinks) => (
    //                 <li key={navigationLinks.navigationLabel} className={styles.nav__link}>
    //                     <a href={navigationLinks.navigationUrl}>{navigationLinks.navigationLabel}</a>
    //                 </li>

    //             ))}
    //             {/* <li className={styles.nav__link}>
    //                 <a href='/design'>Design</a>
    //             </li> */}
    //             {/* <li className={styles.nav__link}>
    //                 <a href='/project_list'>Projects</a>
    //             </li>
    //             <li className={styles.nav__link}>
    //                 <a href='/about'>Resume</a>
    //             </li> */}
    //         </ul>
    //     </nav >
    // );
}

export default Navigation;