import React from "react";

const AltarServers = () => {
  const shareUrl = window.location.href;
  const title = "Altar Servers - St. John the Evangelist Parish";

  return (
    <div className="altar-servers-page container py-5">
      {/* Hero Section */}
      <section className="text-center mb-5">
        <img // Changed to use PUBLIC_URL for deployment
          src={process.env.PUBLIC_URL + "/DSC_0354.jpg"}
          alt="Altar Servers"
          className="img-fluid rounded shadow mb-4"
          style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }}
        />
        <h1 className="display-4 fw-bold">St. John Altar Servers</h1>
        <p className="lead text-muted">
          Welcome to the St. John Altar Servers!
        </p>
      </section>

      {/* History Section */}
      <section className="mb-5">
        <h2 className="fw-bold border-bottom pb-2 mb-3">A Brief History</h2>
        <p className="fs-5">
          St. John has a long and proud history of dedicated altar servers. The
          ministry has seen tremendous growth over the years, thanks to the
          selfless dedication of those who have volunteered to train altar
          servers. We would like to express our special thanks to Fr. Martin
          Mandele, who took up the responsibility of teaching the altar servers
          when there was a shortage of people to train them. He not only taught
          the altar servers their roles in the liturgy but also helped to
          attract more servers to the ministry. After his return to his native
          country, the group has remained active, and we are grateful to all its
          dedicated members and leaders for pushing the group to where we are
          today.
        </p>
      </section>

      {/* Leadership Section */}
      <section className="mb-5 bg-light p-4 rounded shadow-sm">
        <h2 className="fw-bold border-bottom pb-2 mb-3">Leadership</h2>
        <p>The group is currently led by a strong team of:</p>
        <ul className="list-unstyled">
          <li>Fredrick Ochieng, Michael Kahare, Dennis Otieno, Paul Kinyua.</li>
          <li>Spiritan Brothers: Br Emmanuel and Br Harrison</li>
          <li>Incarnate Word Sisters: Sr Rose and Sr Muzungu</li>
        </ul>
        <p>
          They are then followed closely by the current group’s president, Mr.
          Ivan Njuguna.
        </p>
      </section>

      {/* Altar Servers Ministry Section */}
      <section className="mb-5">
        <h2 className="fw-bold border-bottom pb-2 mb-3">
          Altar Servers Ministry
        </h2>
        <p className="fs-5">
          Altar serving is a form of ministry that allows young people to
          actively participate in the worship life of the Church. Altar servers
          receive training to ensure that they understand their responsibilities
          and perform them with reverence.
        </p>
      </section>

      {/* Importance During Liturgy Section */}
      <section className="mb-5 row g-4 align-items-center">
        <div className="col-md-6">
          <h2 className="fw-bold border-bottom pb-2 mb-3">
            Our Importance During Liturgy
          </h2>
          <p>
            As altar servers, we play a crucial role in the liturgy. We help to
            ensure that the liturgy flows smoothly, assist the celebrant, and
            embody the spirit of service within the sacred rituals of the
            Church. Some of our specific roles include:
          </p>
          <ul className="list-unstyled">
            <li className="mb-2">
              <i className="fas fa-hand-holding-heart text-primary me-2"></i>
              <strong>Assistance to the Celebrant:</strong> We assist the priest
              during the celebration of the Mass. We help to ensure that the
              liturgy flows smoothly by anticipating the needs of the celebrant
              and providing support.
            </li>
            <li className="mb-2">
              <i className="fas fa-cross text-primary me-2"></i>
              <strong>Symbolic Representation:</strong> The actions of altar
              servers often carry symbolic meaning. For example, carrying the
              processional cross and candles symbolizes the light of Christ
              entering the worship space. The use of incense represents prayers
              rising to heaven.
            </li>
            <li className="mb-2">
              <i className="fas fa-church text-primary me-2"></i>
              <strong>Enhancing the Worship Experience:</strong> Altar servers
              contribute to the solemnity and beauty of the liturgy. Our actions
              and presence add a visual and auditory dimension to the worship
              experience, enhancing the overall sense of reverence and awe.
            </li>
          </ul>
        </div>
        <div className="col-md-6 text-center">
          <img
            src={process.env.PUBLIC_URL + "/DSC_0017.jpg"}
            alt="Altar Servers in action"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </section>

      {/* How to Join Section */}
      <section className="mb-5 bg-light p-4 rounded shadow-sm">
        <h2 className="fw-bold border-bottom pb-2 mb-3">
          How to Join as an Altar Server
        </h2>
        <p className="lead">
          If you are interested in becoming an altar server, we encourage you to
          contact us. We are always looking for new members, and we would be
          happy to answer any questions you may have.
        </p>
        <h3 className="fw-bold mt-4">Requirements:</h3>
        <ul className="list-unstyled">
          <li><i className="fas fa-check-circle text-success me-2"></i>Be at least 8 years old</li>
          <li><i className="fas fa-check-circle text-success me-2"></i>Have received your First Holy Communion</li>
          <li><i className="fas fa-check-circle text-success me-2"></i>Be a regular attendee at Mass</li>
          <li><i className="fas fa-check-circle text-success me-2"></i>Be respectful of the sacred nature of the liturgy</li>
          <li><i className="fas fa-check-circle text-success me-2"></i>Be committed to attending training sessions and rehearsals</li>
          <li><i className="fas fa-check-circle text-success me-2"></i>Parental consent is often required for minors to become altar servers. Parents or guardians may need to support their child’s involvement in this ministry.</li>
        </ul>
      </section>

      {/* Activities Section */}
      <section className="text-center mt-5">
        <h2 className="fw-bold border-bottom pb-2 mb-3">Activities</h2>
        <p className="lead">
          In addition to our liturgical duties, we also participate in a variety
          of social and service activities. Some of our past activities have
          included: Tree planting, Movies, Fun days, Sports.
        </p>
        <p>If you are interested in becoming an altar server, please contact our Patron/ Matron</p>
      </section>
    </div>
  );
};

export default AltarServers;