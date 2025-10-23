import React from "react";


const LayCarmelites = () => {
  const shareUrl = window.location.href;
  const title = "Lay Carmelites - St. John the Evangelist Parish";

  return (
    <div className="lay-carmelites-page container py-5">
      {/* Hero Section */}
      <section className="text-center mb-5">
        <img
          src="/IMG_2937.jpg"
          alt="Lay Carmelites"
          className="img-fluid rounded shadow mb-4"
          style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }}
        />
        <h1 className="display-4 fw-bold">Lay Carmelites</h1>
        <p className="lead text-muted">A Beacon of Hope and Service</p>
      </section>

      {/* Introduction Section */}
      <section className="mb-5">
        <p className="fs-5">
          In a world yearning for solace and purpose, the Lay Carmelites stand
          as a guiding light. Embracing the spirit of St. Teresa of Avila and
          St. John of the Cross, this international community of lay people
          dedicates themselves to deepening their connection with God, fostering
          personal growth, and extending a hand to those in need.
        </p>
        <h3 className="fw-bold mt-4">A Life Woven in Communion</h3>
        <p>
          At the core of the Lay Carmelite way of life lies the belief in the
          interconnectedness of all beings. This philosophy translates into
          action as they cultivate a profound relationship with God, nurture
          their inner selves, and reach out to their neighbors with compassion.
        </p>
      </section>

      {/* Faith into Action Section */}
      <section className="mb-5 bg-light p-4 rounded shadow-sm">
        <h2 className="fw-bold border-bottom pb-2 mb-3">
          Putting Faith into Action
        </h2>
        <p>
          Inspired by the teachings of St. Teresa and St. John, Lay Carmelites
          translate their faith into acts of service. Their mission extends
          beyond the walls of churches, reaching those most vulnerable:
        </p>
        <ul className="list-unstyled">
          <li className="mb-2">
            <i className="fas fa-school text-success me-2"></i>
            <strong>Championing girls’ education:</strong> Through the “Keep a
            Girl Child in School” program, they provide reusable sanitary pads
            to girls in remote areas, empowering them to stay in school.
          </li>
          <li className="mb-2">
            <i className="fas fa-hands-helping text-success me-2"></i>
            <strong>Embracing corporal acts of mercy:</strong> Lay Carmelites
            exemplify compassion by supporting initiatives like paying NHIF for
            the elderly at Mji wa Wazee Ruaraka.
          </li>
          <li className="mb-2">
            <i className="fas fa-church text-success me-2"></i>
            <strong>Enriching the Church:</strong> Their contributions range
            from adorning liturgical services with vibrant vestments to offering
            unwavering support to the Church community.
          </li>
        </ul>
      </section>

      {/* Community and Growth Section */}
      <section className="mb-5">
        <h2 className="fw-bold border-bottom pb-2 mb-3">
          Our Community and Growth
        </h2>
        <p>
          <strong>Addressing Contemporary Challenges:</strong> The Lay
          Carmelites recognize the complexities of the modern world. Their
          annual assemblies foster open discussions and collaborative solutions,
          ensuring their efforts remain relevant and impactful.
        </p>
        <p>
          <strong>Expanding the Circle of Compassion:</strong> Predominantly
          female, the Lay Carmelites actively seek inclusivity. They welcome men
          and young families, fostering a diverse and representative community.
        </p>
        <p>
          <strong>Open Doors and Welcoming Hearts:</strong> To dispel
          misconceptions and encourage broader participation, Lay Carmelites
          seek additional meeting venues beyond their current location. This
          openness and inclusivity are hallmarks of their organization.
        </p>
      </section>

      {/* Legacy and Call to Action */}
      <section className="text-center mt-5">
        <h2 className="fw-bold">The Lay Carmelites: A Beacon of Hope</h2>
        <p className="lead">
          The Lay Carmelites embody the spirit of compassion, service, and
          spiritual growth. Their unwavering commitment to their charism and
          dedication to uplifting others make them a beacon of hope in our
          world.
        </p>
        <div className="mt-4">
          <h3 className="fw-bold">Join the Journey</h3>
          <p>
            Are you called to a life of deeper communion with God and service to
            others? Explore the Lay Carmelites and discover how you can
            contribute to their mission.
          </p>
          <p><strong>Contact us:</strong> <a href="mailto:laycarmelites@stjohntheevangelistchurch.co.ke">laycarmelites@stjohntheevangelistchurch.co.ke</a></p>
        </div>
      </section>
    </div>
  );
};

export default LayCarmelites;