import Image from "next/image";

export default function AboutSection({ onScrollToId }) {
  return (
    <section className="about-me section" id="AboutMe">
      <h2>Who I Am</h2>
      <hr />
      <div className="about-me-wrapper">
        <div className="about-me-head">
          <h3>A frontend developer based in Abakaliki, Nigeria - building for the world.</h3>
          <figure>
            <Image
              src="/images/victor2.webp"
              alt="Victor in a peace sign pose."
              width={230}
              height={300}
              className="hero-image2"
            />
          </figure>
        </div>
        <div className="about-me-content">
          <p className="about-me_text">
            I fell in love with web development the moment I realized code could turn an idea into
            something people actually use. Since then, I&apos;ve been obsessed with crafting
            interfaces that are <strong>blindingly fast</strong>,
            <strong> accessible to everyone</strong>, and genuinely enjoyable to interact with.
          </p>
          <p className="about-me_text">
            My approach is straightforward: understand the problem, design a clean solution, and
            write code that&apos;s as easy to maintain as it is to use. Whether it&apos;s a startup
            landing page or a full-scale web application, I bring the same attention to detail and
            care.
          </p>
          <div className="about-stats">
            <div className="stat-item glass-card">
              <span className="stat-number" data-count="15">0</span>
              <span className="stat-suffix">+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item glass-card">
              <span className="stat-number" data-count="10">0</span>
              <span className="stat-suffix">+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-item glass-card">
              <span className="stat-number" data-count="3">0</span>
              <span className="stat-suffix">+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
          <a href="#ContactMe" className="button-cta" onClick={(event) => onScrollToId(event, "#ContactMe")}>
            Let&apos;s work together
          </a>
        </div>
      </div>
    </section>
  );
}
