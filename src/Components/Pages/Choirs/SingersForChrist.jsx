import React from "react";


const SingersForChrist = () => {
  return (
    <div className="singers-page container py-5">
      {/* Hero Section */}
      <section className="text-center mb-5">
        <img
          src="DSC_0176.jpg"
          alt="Singers for Christ Choir"
          className="img-fluid rounded shadow mb-4 hero-img"
        />
        <h1 className="display-4 fw-bold">Singers for Christ</h1>
        <p className="lead text-muted">
          A journey of passion, unity, and faith expressed through music.
        </p>
      </section>

      {/* Story Section */}
      <section className="mb-5">
        <h2 className="section-title">Our Story</h2>
        <p>
          The Singers for Christ Choir is more than just a music group; it’s a
          testament to the power of passion, dedication, and a shared love for
          music. Our story began in 2020 with a simple desire: to elevate the
          musical experience of the first mass.
        </p>
      </section>

      {/* Journey Section */}
      <section className="mb-5 row align-items-center">
        <div className="col-md-6">
          <h2 className="section-title">A Journey of Growth and Transformation</h2>
          <p>
            Our path wasn’t always easy. We started as a group of individuals from
            various backgrounds, some with little to no formal training. But fueled
            by our love for music and our desire to glorify God through song, we
            persevered.
          </p>
          <p>
            A turning point came in 2021 with the arrival of a new leadership team
            led by <strong>Fr. Aloyce Rogath Kimaryo</strong>. Under his guidance,
            we embraced creativity, discipline, and a sense of unity. We even
            drafted a constitution to solidify our foundation.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="choir-practice.jpg"
            alt="Choir practice"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </section>

      {/* Vibrant Tapestry Section */}
      <section className="mb-5 row align-items-center flex-md-row-reverse">
        <div className="col-md-6">
          <h2 className="section-title">A Vibrant Tapestry of Voices</h2>
          <p>
            Our choir is a beautiful blend of talented individuals, including
            students from nearby institutes, congregations, and universities. This
            diversity brings a unique energy and depth to our music, reflecting the
            richness of our faith.
          </p>
          <p>
            Despite the ever-changing nature of our membership, our commitment to
            excellence remains constant. We welcome new members with open arms,
            fostering a supportive and collaborative environment where everyone can
            grow.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="group-photo.jpg"
            alt="Choir group"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="mb-5">
        <h2 className="section-title">Celebrating Achievements</h2>
        <p>
          This past Easter, we were honored to lead the Easter Vigil Mass. The
          outpouring of appreciation solidified our place within the parish
          community and validated the impact of our music.
        </p>
        <p>
          While formal competitions aren’t our immediate focus, we are constantly
          honing our skills and deepening our connection with music. Our ultimate
          dream is to record an album, a lasting legacy of our musical journey.
        </p>
      </section>

      {/* Legacy Section */}
      <section className="mb-5 row align-items-center">
        <div className="col-md-6">
          <h2 className="section-title">A Legacy of Faith Expressed Through Song</h2>
          <p>
            The Singers for Christ Choir is a beacon of hope and inspiration. Our
            voices carry messages of faith, unity, and love, leaving an indelible
            mark on the hearts of those who hear us.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="performance.jpg"
            alt="Choir performance"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-5">
        <h2 className="section-title">Join Us!</h2>
        <p className="lead">
          Are you passionate about music and sharing your love for faith? We’d love
          to welcome you to our choir!
        </p>
        <a
          href="mailto:Singersforchrist@stjohnthevangelistchurch.co.ke"
          className="btn btn-primary btn-lg"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default SingersForChrist;
