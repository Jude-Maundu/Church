import React from "react";

const SelfHelp = () => {
  return (
    <div className="self-help-page container py-5">
      {/* Hero Section */}
      <section className="text-center mb-5">
        <img
          src="/Web self help group.jpg"
          alt="St John Self Help Group"
          className="img-fluid rounded shadow mb-4"
          style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }}
        />
        <h1 className="display-4 fw-bold">St. John Self Help Group</h1>
        <p className="lead text-muted">Your Savings & Investment Companion</p>
      </section>

      {/* About Us Section */}
      <section className="mb-5">
        <h2 className="fw-bold border-bottom pb-2 mb-3">About Us</h2>
        <p className="fs-5">
          Welcome to the St. John the Evangelist Self-Help Group (SHG), a
          Christian values-based savings and credit group striving to empower
          our members and the community!
        </p>
        <div className="row mt-4 text-center">
          <div className="col-md-6 mb-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <h3 className="fw-bold">Our Vision</h3>
              <p>To support and empower members socially and economically.</p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <h3 className="fw-bold">Our Mission</h3>
              <p>
                To enhance member recruitment and service delivery to achieve
                financial empowerment.
              </p>
            </div>
          </div>
        </div>
        <h3 className="fw-bold mt-4">Who We Are:</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Established in 1998, we operate under the Catholic Caritas Nairobi
            Self Help Programme.
          </li>
          <li className="list-group-item">
            We are a Caritas Microfinance Bank partner, ensuring secure
            financial services.
          </li>
          <li className="list-group-item">
            Run by a dedicated management committee guided by Christian values.
          </li>
        </ul>
      </section>

      {/* Benefits Section */}
      <section className="mb-5 bg-light p-4 rounded shadow-sm">
        <h2 className="fw-bold border-bottom pb-2 mb-3">
          Benefits of Membership
        </h2>
        <div className="row">
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i><strong>Save for the future:</strong> Cultivate a culture of saving with a supportive community.</li>
              <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i><strong>Access to loans:</strong> Borrow wisely for important needs with competitive rates.</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i><strong>Invest prudently:</strong> Learn financial management skills for a brighter future.</li>
              <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i><strong>Empowerment:</strong> Be part of a community that fosters social and economic growth.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Membership & Payments Section */}
      <section className="mb-5 row">
        <div className="col-md-7">
            <h2 className="fw-bold border-bottom pb-2 mb-3">Membership & Registration</h2>
            <p><strong>Minimum age:</strong> 18 years</p>
            <p><strong>Membership Fee:</strong> Ksh 50 (application) + Ksh 200 (registration, non-refundable)</p>
            <p><strong>Minimum Savings:</strong> Ksh 500 monthly</p>
            <p><strong>Meetings:</strong> Every first Sunday of the month, 11:00 AM – 12:00 PM, near the main church entrance.</p>
            <h5 className="fw-bold mt-3">Requirements:</h5>
            <ul className="list-group">
                <li className="list-group-item">Application form</li>
                <li className="list-group-item">2 passport photos</li>
                <li className="list-group-item">Copy of National ID</li>
                <li className="list-group-item">KRA PIN Number</li>
            </ul>
        </div>
        <div className="col-md-5">
            <div className="card h-100 shadow">
                <div className="card-header fw-bold">Banks-Mpesa-Paybill</div>
                <div className="card-body">
                    <h5 className="card-title">MPESA Payments</h5>
                    <p className="card-text mb-1"><strong>Paybill No:</strong> 899790</p>
                    <p className="card-text mb-1"><strong>Account No:</strong> 1002025000075</p>
                    <p className="card-text mb-1"><strong>Bank:</strong> Caritas-MFB</p>
                    <p className="card-text"><strong>A/C Name:</strong> St. John the Evangelist Catholic Church SHG</p>
                </div>
            </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="mb-5">
        <h2 className="fw-bold border-bottom pb-2 mb-3">Current Leadership</h2>
        <ul className="list-unstyled">
          <li><strong>Moderator:</strong> Josphat Namu</li>
          <li><strong>Vice-moderator:</strong> Emma Thuo Karanja</li>
          <li><strong>Treasurer:</strong> Albert Migowa</li>
          <li><strong>Secretary:</strong> Anastasia Kimonyi Mbithi</li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mt-5 p-4 bg-light rounded shadow-sm">
        <h2 className="fw-bold">Ready to Join?</h2>
        <p className="lead">Download the application form or visit us during our next meeting.</p>
        <p><strong>Email:</strong> selfhelp@stjohnevangelistchurch.co.ke | <strong>Phone:</strong> 0746 382 853</p>
      </section>
    </div>
  );
};

export default SelfHelp;