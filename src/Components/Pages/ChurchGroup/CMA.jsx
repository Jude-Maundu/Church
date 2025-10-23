import React from "react";


const Cma = () => {
  const shareUrl = window.location.href;
  const title = "Catholic Men Association - St. John the Evangelist Parish";

  return (
    <div className="cma-page container py-5">
      {/* Hero Section */}
      <section className="text-center mb-5">
        <img // Changed to use PUBLIC_URL for deployment
          src={process.env.PUBLIC_URL + "/IMG_3835.jpg"}
          alt="Catholic Men Association"
          className="img-fluid rounded shadow mb-4"
          style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }}
        />
        <h1 className="display-4 fw-bold">Catholic Men Association</h1>
        <p className="lead text-muted">
          Empowering Men for a Good Church, Family, and Society
        </p>
      </section>

      {/* Intro Section */}
      <section className="mb-5">
        <p className="fs-5">
          The Catholic Men Association of Kenya (CMA) is an ecclesial movement
          dedicated to bringing together practicing Catholic men to take an
          active role in evangelization and social development. With a strong
          emphasis on spiritual formation, the CMA strives to empower men to
          become beacons of faith and service in their homes, churches, and
          communities.
        </p>
      </section>

      {/* History Section */}
      <section className="mb-5">
        <h2 className="fw-bold border-bottom pb-2 mb-3">A History of Service and Empowerment</h2>
        <p>
          The CMA’s roots can be traced back to 1947 when the Association of the
          Catholic Men of the Catholic Action of Italy conceived the idea of an
          international movement. The idea gained momentum when Cardinal
          Giuseppe Pizzardi of Italy presented it to Pope Pius XII, who welcomed
          it and declared it an ecclesial public movement of the Catholic
          Church.
        </p>
        <p>
          In Kenya, the CMA was introduced by Catholic missionaries at various
          times, with the Missionaries of Austria establishing the association
          in Nakuru in 1983, marking the first Diocesan-level CMA inauguration
          in the country. An Interim National CMA committee was formed in 1983,
          facilitating the introduction of CMA in other dioceses and hosting
          ICCM meetings.
        </p>
      </section>

      {/* Mission and Vision Section */}
      <section className="mb-5">
        <h2 className="fw-bold border-bottom pb-2 mb-3">Mission and Vision: A Guiding Light</h2>
        <p>
          The CMA’s vision is to effectively form and empower all Catholic Men
          Spiritually, Socially, and economically toward eternal life. Their
          mission is to promote the family institution through companionship
          (spouse), fatherhood (children), and active participation in church
          for the evangelization and sanctification of humanity.
        </p>
        <p>
          Guided by this vision and mission, the CMA has made significant
          strides in empowering Catholic men across Kenya. The CMA fellowship at
          St. John The Evangelist Parish, for instance, has witnessed a
          remarkable growth in membership, revitalizing the group and fostering
          a strong sense of community among its members.
        </p>
      </section>

      {/* Spiritual & Social Development Section */}
      <section className="mb-5 row g-4 align-items-center">
        <div className="col-md-6">
          <h2 className="fw-bold border-bottom pb-2 mb-3">Spiritual Empowerment at the Core</h2>
          <p>
            Spiritual empowerment lies at the heart of the CMA’s activities. The
            group organizes regular spiritual talks and retreats to nourish the
            souls of its members. These initiatives have not only strengthened
            the faith of individual members but have also fostered a deeper
            sense of unity within the group.
          </p>
          <h2 className="fw-bold border-bottom pb-2 mb-3 mt-4">Social Development Projects</h2>
          <p>
            The Social Development Project (SDP) targets men already in the
            church, providing them with savings and credit opportunities,
            self-reliance training, and social empowerment programs. The Beacon
            Boy Project (BBP) addresses the unique challenges faced by boys,
            equipping them with spiritual guidance, life skills, and empowerment
            to become responsible and contributing members of society.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src={process.env.PUBLIC_URL + "/DSC_1655.jpg"} alt="CMA Project" className="img-fluid rounded shadow-lg" />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mt-5">
        <h2 className="fw-bold">Join the Movement</h2>
        <p className="lead">
          The CMA’s open and welcoming nature invites all men to join their
          movement and contribute to building a good church, a good family, and
          a good society.
        </p>
      </section>
    </div>
  );
};

export default Cma;