import {
  blog_links,
  company_links,
  explore_links,
  social_links,
} from "./constants";
import { container } from "./FooterNavContainer.style";
import { Nav } from "./nav";

const FooterNavContainer = () => {
  return (
    <div className={container}>
      <Nav heading="explore" links={explore_links} />
      <Nav heading="company" links={company_links} is_logged_in />
      <div>
        <Nav heading="blog" links={blog_links} is_logged_in />
      </div>
      <div>
        <Nav
          heading="social"
          links={social_links}
          is_logged_in
          has_external_links
        />
      </div>
    </div>
  );
};
export default FooterNavContainer;
