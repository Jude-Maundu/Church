import React from "react";

const WidowsAssociation = () => {
  return (
    <div className="widows-association-page container py-5">
      {/* Hero Section */}
      <section className="text-center mb-5">
        <img
          src="/Widows.jpg"
          alt="Widows Association Group"
          className="img-fluid rounded shadow mb-4"
          style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }}
        />
        <h1 className="display-4 fw-bold">Widows Association</h1>
        <p className="lead text-muted">A Beacon of Hope & Empowerment</p>
      </section>

      {/* Introduction Section */}
      <section className="mb-5">
        <p className="fs-5">
          In the midst of life’s inevitable challenges, the loss of a beloved
          spouse can be an overwhelming experience, leaving a void that seems
          impossible to fill. For widows, navigating the path forward can be
          fraught with grief, uncertainty, and loneliness. Recognizing this
          profound need for support and companionship, the St. John Evangelist
          Widows Support Group emerged as a beacon of hope and empowerment.
        </p>
        <p className="fs-5">
          Established four years ago, the group has become a sanctuary for
          widows, providing a safe space to share their experiences, offer
          mutual encouragement, and forge lasting friendships. Members gather
          every month on the 3rd Friday at 4.30 P.M., creating a tapestry of
          shared understanding and unwavering support.
        </p>
      </section>

      {/* Activities and Spiritual Growth Section */}
      <section className="mb-5 bg-light p-4 rounded shadow-sm">
        <h2 className="fw-bold border-bottom pb-2 mb-3">
          Healing and Personal Growth
        </h2>
        <p>
          The group’s activities extend beyond mere gatherings; they encompass a
          holistic approach to healing and personal growth. Members actively
          participate in seminars, workshops, recollections, and animate masses,
          fostering spiritual nourishment and a deeper connection with their
          faith.
        </p>
        <p>
          Currently, the group is embarking on a journey of spiritual
          exploration through discussions on “Life within the Sacraments,”
          guided by Catechist Charles Kimani. These sessions provide an
          opportunity for widows to delve into the richness of the sacraments,
          seeking solace and strength from their profound symbolism and
          transformative power.
        </p>
      </section>

      {/* Conclusion Section */}
      <section className="text-center mt-5">
        <h2 className="fw-bold">A Place to Find Solace and Strength</h2>
        <p className="lead">
          The St. John Evangelist Widows Support Group is not just a place to
          gather; it is a family, a place where widows find solace, strength,
          and a renewed sense of purpose. The group’s commitment to fostering
          unity and empowering widows to embrace life with resilience and hope
          is a testament to the transformative power of human connection and
          shared experiences.
        </p>
      </section>
    </div>
  );
};

export default WidowsAssociation;