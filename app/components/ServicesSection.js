export default function ServicesSection({ serviceItems }) {
  return (
    <section className="services section" id="MyServices">
      <h2>What I Do</h2>
      <hr />
      <div className="service-article-container" role="list">
        {serviceItems.map((service) => (
          <article className="services-article stagger-item" role="listitem" key={service.title}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul className="service-details">
              {service.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
