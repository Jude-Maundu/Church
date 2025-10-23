import React from "react";

const DevelopmentCommittee = () => {
  return (
    <div className="development-committee-page container py-5">
      {/* Hero Section */}
      <section className="text-center mb-5">
        <img
          src="/DSC_0334.jpg"
          alt="Development Committee"
          className="img-fluid rounded shadow mb-4"
          style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }}
        />
        <h1 className="display-4 fw-bold">Development Committee</h1>
      </section>

      {/* Introduction Section */}
      <section className="mb-5">
        <p className="fs-5">
          The St. John the Evangelist Parish Development Committee was
          established in 2002 to spearhead the development of the physical
          infrastructure of the parish. The committee provides the father in
          charge with the necessary advice and assistance concerning development
          matters of the parish.
        </p>
      </section>

      {/* Membership and Image Section */}
      <section className="mb-5 row g-4 align-items-center">
        <div className="col-md-6">
          <h2 className="fw-bold border-bottom pb-2 mb-3">
            Membership Committee
          </h2>
          <ol className="list-group list-group-numbered">
            <li className="list-group-item">Peterson Chege</li>
            <li className="list-group-item">John Mburu</li>
            <li className="list-group-item">Winnie Lichuma</li>
            <li className="list-group-item">Charles Muthigani</li>
            <li className="list-group-item">John Mbaya</li>
            <li className="list-group-item">Anne Kabue</li>
            <li className="list-group-item">Peter Memia</li>
            <li className="list-group-item">Martin Wamae</li>
            <li className="list-group-item">Alice Kamau</li>
            <li className="list-group-item">Rita Mugo</li>
          </ol>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="/DSC_0198.jpg"
            alt="Committee Members"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </section>

      {/* Key Projects Section */}
      <section className="mb-5 bg-light p-4 rounded shadow-sm">
        <h2 className="fw-bold border-bottom pb-2 mb-3">
          Key Priority Projects 2024
        </h2>
        <ul className="list-unstyled">
          <li className="mb-2"><i className="fas fa-wrench text-primary me-2"></i><strong>Power Backup System:</strong> Planning a diesel generator or solar backup solution.</li>
          <li className="mb-2"><i className="fas fa-video text-primary me-2"></i><strong>Media Room:</strong> Remodeling the current media room to be more spacious.</li>
          <li className="mb-2"><i className="fas fa-church text-primary me-2"></i><strong>Church Ceiling:</strong> Repairing and renovating the church ceiling.</li>
          <li className="mb-2"><i className="fas fa-parking text-primary me-2"></i><strong>Additional Parking Area:</strong> Expanding and improving the parking at the Spiritans.</li>
          <li className="mb-2"><i className="fas fa-place-of-worship text-primary me-2"></i><strong>Church Sacristy Area:</strong> Remodeling the sacristy for better functionality.</li>
        </ul>
      </section>

      {/* Accomplishments and Plans Section */}
      <section className="mb-5 row g-4">
        <div className="col-md-6">
          <h2 className="fw-bold border-bottom pb-2 mb-3">
            Past Accomplishments
          </h2>
          <ul className="list-group">
            <li className="list-group-item">Completion of the Ablution Block</li>
            <li className="list-group-item">Completion of the Adoration and Marian Grotto</li>
            <li className="list-group-item">Completion of the Church Extension</li>
            <li className="list-group-item">Completion of Nursing Mothers Area</li>
            <li className="list-group-item">Completion of the Bio Green/Bio Digester System</li>
            <li className="list-group-item">Completion of St Johns Wellspring</li>
            <li className="list-group-item">Completion of Church Bandas & Canteen</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold border-bottom pb-2 mb-3">
            Plans for the Parish
          </h2>
          <ul className="list-unstyled">
            <li className="mb-2"><i className="fas fa-heart text-success me-2"></i>Enhance the Parishioner Experience</li>
            <li className="mb-2"><i className="fas fa-cogs text-success me-2"></i>Ensure Efficient Church Facilities</li>
            <li className="mb-2"><i className="fas fa-users text-success me-2"></i>Meet the Needs of Special Groups</li>
            <li className="mb-2"><i className="fas fa-tools text-success me-2"></i>Maintain Church Facilities</li>
            <li className="mb-2"><i className="fas fa-leaf text-success me-2"></i>Promote Sustainable Church Operations</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentCommittee;