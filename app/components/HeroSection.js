import Image from "next/image";

export default function HeroSection({ typedText, typingTargetText, socialLinks, onScrollToId }) {
  return (
    <section className="intro section" id="intro">
      <article className="hero-article">
        <div className="hero-text">
          <p className="intro-text greeting">Hi, I&apos;m</p>
          <h1 className="intro-text name">Victor Nwafor</h1>
          <p className="intro-text typing-text" data-text={typingTargetText}>
            <strong>{typedText}</strong>
          </p>
          <p className="tagline">
            I turn ideas into fast, accessible, and pixel-perfect web experiences that users love.
          </p>
          <div className="hero-cta-group">
            <a href="#MyWork" className="button-cta button-cta--primary" onClick={(event) => onScrollToId(event, "#MyWork")}>
              View My Work
            </a>
            <a href="#ContactMe" className="button-cta button-cta--outline" onClick={(event) => onScrollToId(event, "#ContactMe")}>
              Get In Touch
            </a>
          </div>
          <div className="hero-socials">
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                <Image src={link.icon} alt="" width={22} height={22} />
              </a>
            ))}
          </div>
        </div>
        <figure>
          <Image
            src="/images/Victor.png"
            alt="Victor Nwafor smiling in monotone."
            width={1639}
            height={2186}
            sizes="(min-width: 900px) 210px, 320px"
            className="hero-image"
            priority
          />
        </figure>
      </article>
    </section>
  );
}
