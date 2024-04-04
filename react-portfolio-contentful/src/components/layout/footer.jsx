import styles from '../../assets/styles/main.module.scss';
import Navigation from '../common/navigation';
// import Social_Links from '../common/social';
import useContentful from '../../hooks/use_contentful';

const query = `query{
  navigationBlockCollection(limit:2){
    items{
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
  }
}`


function Footer() {
    let { data, errors } = useContentful(query);

    if (errors) return <span style={{ color: "red" }}>{errors.map((error) => error.message).join(",")}</span>;
    if (!data) return <span>Loading...</span>;

    const navigation = data.navigationBlockCollection;

    // const navigationLinks = navigation.navigationBlock.primaryNavigationCollection.items

    return (
        <footer className={styles.c_footer}>
            {navigation.items.map((nav) => {
                const primary = nav.primaryNavigationCollection.items;
                const social = nav.socialNavigationCollection.items;

                <>
                    <Navigation data={primary} />
                    {/* <Navigation data={social} /> */}
                </>

                // {
                //     primary.map((primary_links) => (

                //     ))
                // }

                // {
                //     social.map((social_links) => (
                //         < Navigation key={social_links.navigationLabel} template={social_links} />
                //     ))
                // }
                // console.log(primary + social)
            }
            )}
            {/* <Navigation template='footer' />
            <Social_Links /> */}
        </footer >
    );
}

export default Footer;