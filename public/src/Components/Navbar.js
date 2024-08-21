import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../Lists/Links";
import PageLink from "./PageLink";
import SocialLink from "./SocialLink";

export const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* <!-- left this comment on purpose --> */}

        <ul className="nav-links" id="nav-links">
          {pageLinks.map((page) => {
            return <PageLink key={page.id} itemClass="nav-link" {...page} />;
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((social) => {
            return (
              <SocialLink key={social.id} itemClass="nav-icon" {...social} />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
