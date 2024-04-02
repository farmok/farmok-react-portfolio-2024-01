import useContentful from '../../hooks/use_contentful';

/* eslint-disable react/prop-types */
import styles from '../../assets/styles/main.module.scss';

const query = `query{
    navigationBlock(id: "63UDPt0LWVlxQJxBVSf852"){
        primaryNavigationCollection{
            items{
                orderNumber
                navigationLabel
                navigationUrl
            }
        }

    }
}`

function Navigation({ template }) {
    let { data, errors } = useContentful(query);

    if (errors) return <span style={{ color: "red" }}>{errors.map((error) => error.message).join(",")}</span>;
    if (!data) return <span>Loading...</span>;

    const navigation = data;

    console.log(navigation.navigationBlock)

    const navigationLinks = navigation.navigationBlock.primaryNavigationCollection.items
    // const sortedProjects = navigationLinks.sort((a, b) => (a.projectCard.orderNumber - b.projectCard.orderNumber));

    return (
        <nav className={styles.c_nav} data-page-template={template}>
            <ul className={styles.nav__group}>
                {navigationLinks.map((primaryNavigation) => (
                    <li key={primaryNavigation.navigationLabel} className={styles.nav__link}>
                        <a href={primaryNavigation.navigationUrl}>{primaryNavigation.navigationLabel}</a>
                    </li>

                ))}
                {/* <li className={styles.nav__link}>
                    <a href='/design'>Design</a>
                </li> */}
                {/* <li className={styles.nav__link}>
                    <a href='/project_list'>Projects</a>
                </li>
                <li className={styles.nav__link}>
                    <a href='/about'>Resume</a>
                </li> */}
            </ul>
        </nav >
    );
}

export default Navigation;