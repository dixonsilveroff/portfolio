import Image from "next/image";

export default function Footer({ navItems, onScrollToId }) {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#intro" className="footer-logo" onClick={(event) => onScrollToId(event, "#intro")}>
            {"VictorNwafor.me"}
          </a>
          <p className="footer-tagline">Crafting the web, one pixel at a time.</p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <h3>Quick Links</h3>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={(event) => onScrollToId(event, item.href)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer-connect">
          <h3>Connect</h3>
          <div className="footer-social_icons" role="navigation" aria-label="Social media links">
            <a target="_blank" href="https://www.instagram.com/the.real_victor/" rel="noopener noreferrer" aria-label="Instagram">
              <Image src="/images/instagram.svg" alt="" width={24} height={24} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/therealvict0r/" rel="noopener noreferrer" aria-label="LinkedIn">
              <Image src="/images/linkedin.svg" alt="" width={24} height={24} />
            </a>
            <a target="_blank" href="https://github.com/dixonsilveroff" rel="noopener noreferrer" aria-label="GitHub">
              <Image src="/images/github.svg" alt="" width={24} height={24} />
            </a>
            <a target="_blank" href="https://x.com/dixonsilveroff" rel="noopener noreferrer" aria-label="Twitter / X">
              <Image src="/images/twitter.svg" alt="" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">&copy; 2026 Victor Nwafor. All rights reserved.</p>
      </div>
    </footer>
  );
}
