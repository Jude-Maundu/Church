import React from "react";

const Baptism = () => {
  return (
    <div className="baptism-page container py-5">
      {/* Hero Section */}
      <section className="text-center mb-5">
        <img
          src="/DSC_0206.jpg"
          alt="Baptism Ceremony"
          className="img-fluid rounded shadow mb-4"
          style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }}
        />
        <h1 className="display-4 fw-bold">Sacrament of Baptism</h1>
      </section>

      {/* Introduction Section */}
      <section className="mb-5 row g-4 align-items-center">
        <div className="col-md-7">
          <h2 className="fw-bold border-bottom pb-2 mb-3">The First Sacrament</h2>
          <p className="fs-5">
            Baptism is the first sacrament that Catholics experience when they
            enter the Church. For many Catholics, baptism occurs shortly after
            birth. For those who convert later in life, it occurs during the
            process of conversion.
          </p>
          <p>
            Baptism involves a Priest performing a blessing over a person and
            anointing them with water. It removes original sin from a person’s
            soul and any other prior sins. Essentially, it is a ritual of
            rebirth that leaves a permanent mark on the soul.
          </p>
        </div>
        <div className="col-md-5 text-center">
          <img
            src="/DSC_0191.jpg"
            alt="Anointing with water"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </section>

      {/* Baptism Programs Section */}
      <section className="mb-5 bg-light p-4 rounded shadow-sm">
        <h2 className="fw-bold border-bottom pb-2 mb-3 text-center">
          Baptism in Our Parish
        </h2>
        <div className="row text-center">
          <div className="col-md-6 border-end">
            <h3 className="fw-bold">Infant Baptism</h3>
            <p>Eligible for infants below 7 years old.</p>
            <p>Celebrated every 4 months.</p>
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold">Adult & Child Baptism</h3>
            <p>
              Children above seven years and adults who have not received this
              sacrament are encouraged to join catechism classes.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mt-5">
        <h2 className="fw-bold">Learn More</h2>
        <p className="lead">
          The Parish offers sacraments for Infants and adults. For more info on
          schedules and reservations, please get in touch with the Parish
          office.
        </p>
      </section>
    </div>
  );
};

export default Baptism;