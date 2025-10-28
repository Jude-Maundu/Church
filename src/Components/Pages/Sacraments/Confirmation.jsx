import React from 'react';



const Confirmation = () => {
  return (
    <div className="sacrament-page">
      <div className="sacrament-content">
        <h1 className="sacrament-title">Confirmation</h1>
        <div className="sacrament-image-container confirmation-images">
          {/* <img src={confirmationImage1} alt="Sacrament of Confirmation" className="sacrament-image" />
          <img src={confirmationImage2} alt="Sacrament of Confirmation" className="sacrament-image" /> */}
        </div>
        <div className="sacrament-text">
          <p>
            Confirmation is the final rite of initiation into the Catholic Church. It can only be given to those who have been baptized. Confirmation is intended to fully bring someone into the Church and create a deeper relationship with Christ than Baptism allows for. In some Catholic churches, Confirmation is performed immediately after Baptism. In others, individuals usually spend several months studying for Confirmation. For those who grow up in the Catholic Church, Confirmation typically occurs in early adolescence. The sacrament of confirmation is accomplished when a Bishop/priest blesses an individual and anoints them with oil.
          </p>
          <p className="fst-italic">
            Acts 8:17 describes what is considered to be the first Confirmation when some believers who have been baptized feel that they have not yet connected with the Holy Spirit: ”Then Peter and John placed their hands on them, and they received the Holy Spirit.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;