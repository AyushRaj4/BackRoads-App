import { pageLinks, socialLinks } from "../Lists/Links";
import PageLink from "./PageLink";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links" id="footer-links">
        {pageLinks.map((page) => {
          return <PageLink key={page.id} itemClass="footer-link" {...page} />;
        })}
      </ul>

      <ul className="footer-icons">
        {socialLinks.map((social) => {
          return <SocialLink key={social.id} itemClass="footer-icon" {...social} />;
        })}
      </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
