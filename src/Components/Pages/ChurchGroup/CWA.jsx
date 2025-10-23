import React from "react";


const Cwa = () => {
  const shareUrl = window.location.href;
  const title = "Catholic Women Association - St. John the Evangelist Parish";

  return (
    <div className="cwa-page container py-5">
      {/* Hero Section */}
      <section className="text-center mb-5">
        <img
          src="/DSC_0860.jpg"
          alt="Catholic Women Association"
          className="img-fluid rounded shadow mb-4"
          style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }}
        />
        <h1 className="display-4 fw-bold">Catholic Women Association</h1>
        <p className="lead text-muted">
          A Journey of Faith, Leadership, and Service
        </p>
      </section>

      {/* Introduction and Growth Section */}
      <section className="mb-5">
        <p className="fs-5">
          The Catholic Women Association (CWA) stands as a beacon of hope and
          empowerment, illuminating the lives of women from all walks of life.
          Established in 1996, this remarkable organization has blossomed into a
          thriving force, guided by a steadfast commitment to supporting,
          empowering, and educating Catholic women in the realms of
          spirituality, leadership, and service.
        </p>
        <p className="fs-5">
          From humble beginnings under a tree at the Shrine, the CWA has
          flourished, its membership expanding from an initial 20-25 members to
          an impressive 200. This growth mirrors the organization’s unwavering
          dedication to fostering a vibrant community where women can find
          solace, mentorship, and a platform to make a meaningful difference.
        </p>
      </section>

      {/* Founding Members Section */}
      <section className="mb-5">
        <h2 className="fw-bold border-bottom pb-2 mb-3">Founding Members</h2>
        <p>
          At the helm of this inspiring journey lie the association’s founding
          members, whose unwavering leadership paved the way for success:
        </p>
        <ul className="list-unstyled fs-5">
          <li>Anjuri</li>
          <li>Bertha Njau</li>
          <li>Josephine Magari</li>
          <li>Rose Mukoya</li>
        </ul>
      </section>

      {/* Impact on Church and Community Section */}
      <section className="mb-5 row g-4 align-items-center">
        <div className="col-md-6">
          <h2 className="fw-bold border-bottom pb-2 mb-3">Impact on the Church</h2>
          <p>
            The CWA’s impact on the Church extends far beyond its membership,
            leaving an indelible mark on the wider community. Their tireless
            efforts in managing the gift shop, mentoring religious individuals,
            preparing the church for various liturgical seasons, and providing
            micro and small business training have significantly enhanced the
            Women’s Potential and management skills.
          </p>
          <h2 className="fw-bold border-bottom pb-2 mb-3 mt-4">Community Contributions</h2>
          <p>
            The association’s contributions extend beyond the church walls,
            reaching into the broader community. Their instrumental role in
            establishing a boy’s school by the CWA Archdiocese of Nairobi in
            Mangu, Thika, stands as a testament to their unwavering commitment
            to Education for the Boy Child.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src="/DSC_0110.jpg" alt="CWA Community Work" className="img-fluid rounded shadow-lg" />
        </div>
      </section>

      {/* Membership Section */}
      <section className="mb-5">
        <h2 className="fw-bold border-bottom pb-2 mb-3">Membership and Formation</h2>
        <p>
          The CWA’s strength lies not only in its numbers but also in its
          remarkable diversity. Drawn from the parish and its environs, the
          membership encompasses a wide spectrum of professionals, technicians,
          and artists, bringing together a wealth of experiences, perspectives,
          and talents.
        </p>
        <p>
          Membership in the CWA is open to women aged 18 and above, offering a
          pathway for personal growth and spiritual enrichment.
        </p>
        <h3 className="fw-bold mt-4">Formation Program:</h3>
        <ul className="list-unstyled fs-5">
          <li>A seven-month Level 1 course at the parish level</li>
          <li>A seven-month Level 1 course at the Archdiocese level</li>
        </ul>
        <p className="fs-5">
          With an annual subscription fee of Kshs 310 and a monthly fee of Kshs
          200, the CWA welcomes women from all walks of life to embark on a
          transformative journey of empowerment, service, and spiritual growth.
        </p>
      </section>

      {/* Monthly Meetings Section */}
      <section className="mb-5">
        <h2 className="fw-bold border-bottom pb-2 mb-3">Monthly Meetings</h2>
        <p className="fs-5">
          The CWA’s monthly meetings, held on the fourth Sunday of every month
          after the second Mass, provide a space for fellowship, learning, and
          shared experiences. Here, women connect, inspire one another, and
          forge lifelong bonds of friendship.
        </p>
      </section>

      {/* Legacy Section */}
      <section className="text-center mt-5">
        <h2 className="fw-bold">A Legacy of Faith, Leadership, and Service</h2>
        <p className="lead">
          The CWA’s legacy is woven with threads of faith, leadership, and
          service. Its impact on the lives of countless women and the wider
          community is undeniable. As the organization continues to be a beacon
          of Faith, its unwavering commitment to empowering Catholic women
          remains steadfast, illuminating the path toward a brighter future.
        </p>
      </section>
    </div>
  );
};

export default Cwa;