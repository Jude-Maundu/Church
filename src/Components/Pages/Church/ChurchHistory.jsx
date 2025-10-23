import React from "react";
import ShareButtons from "../ShareButtons";

const ChurchHistory = () => {
  const shareUrl = window.location.href;
  const title = "Our History - St. John the Evangelist Parish";

  return (
    <div className="church-history-page container py-5">
      <section className="text-center mb-5">
        <img
          src={process.env.PUBLIC_URL + "/images/DSC_0150.jpg"}
          alt="St. John the Evangelist Parish"
          className="img-fluid rounded shadow mb-4"
          style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }}
        />
        <h1 className="display-4 fw-bold">Our Parish History</h1>
        <p className="lead text-muted">
          A Journey of Faith, Community, and Growth
        </p>
      </section>

      <section className="mb-5">
        <h2 className="fw-bold border-bottom pb-2 mb-3">Inception</h2>
        <p>
          The Parish was enacted in 1989 by the late Servant of God Cardinal
          Maurice Otunga when he was the Archbishop of Nairobi. However, it was
          not activated till 1995.
        </p>
        <p>
          The Catholics who were attending Mass at the Spiritan House chapel
          organized themselves and incorporated those who attended Mass at
          Capuchin Franciscans on Bogani Road, those attending at the Shrine on
          Langata Road, and those attending at the Passionist Congregation on
 Ushirika Road. Together they formed a group that met Sundays at
          Spiritan house to start the Parish. As there was a Parish priest, we
          asked the Archbishop for help and he asked Fr Pius Onyango, Parish
          priest of Regina Caeli at Karen, to be attending the meetings to give
          guidance on the formation of the new Parish.
        </p>
      </section>

      <section className="mb-5 bg-light p-4 rounded shadow-sm">
        <h2 className="fw-bold border-bottom pb-2 mb-3">Long Term Plans</h2>
        <p>The long-term plans as drawn by the Christians were:</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-transparent">
            To acquire a plot on which to do development
          </li>
          <li className="list-group-item bg-transparent">To build a church</li>
          <li className="list-group-item bg-transparent">
            To build a Father’s house
          </li>
          <li className="list-group-item bg-transparent">
            To build a Community Centre
          </li>
          <li className="list-group-item bg-transparent">
            Simultaneously with the above, to grow and develop spiritual and
            pastoral aspects of the parishioners.
          </li>
        </ul>
        <p className="mt-3">
          To accomplish the above, two committees were founded: the interim
          Parish Council and Finance and Development to spearhead the
          activities. As money was needed for these developments, it was
          decided to start doing Harambees at the end of the month. Since that
          time, all the developments in the Parish have been done through the
          generous contributions of the parishioners and well-wishers.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="fw-bold border-bottom pb-2 mb-3">
          Progress of Projects
        </h2>
        <div className="row g-4">
          <div className="col-md-6">
            <h4>Plot</h4>
            <p>
              As the committee searched for a plot, it became clear that due to
              the price of plots it would take many years for the Christians to
              collect enough money to purchase a plot let alone build the
              facilities. Therefore, the committees decided to request the
              Spiritan Congregation to donate 2.5 acres for the purpose.
            </p>
            <h4>Church</h4>
            <p>
              The construction of the church commenced in April 1999. As soon as
              the walls were built, Sunday masses were celebrated there and
              Christians had to endure the cold wind. During the rainy season, a
              tent had to be pitched inside the building shell.
            </p>
            <h4>Community Centre</h4>
            <p>
              When the church got to a stage where it was usable and reasonably
              comfortable though not complete, it was decided to start this
              project due to the demand for space for various church groups and
              children's catechism.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={process.env.PUBLIC_URL + "/images/DSC_0899.jpg"}
              alt="Church Building"
              className="img-fluid rounded shadow-lg mb-4"
            />
            <img
              src={process.env.PUBLIC_URL + "/images/DSC_0971.jpg"}
              alt="Church Hall"
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="fw-bold border-bottom pb-2 mb-3">Lay Leaders</h2>
        <p>
          Only the positions of chairmen and treasurers are highlighted here but
          many other people play a big part in the development process. All
          these are acknowledged.
        </p>
        <p>
          <strong>Parish Council Chairmen:</strong> The first was the late Mr.
          Gabriel Itela, succeeded by Mr. Peter Memia, then Mr. Nicholas Njau,
          Mr. Aleke Dondo, and now Antony Ndegwa (as of May 2023).
        </p>
        <p>
          <strong>Finance and Development Chairmen:</strong> The late Mr. James
          Gacheru was succeeded by Mr. John Mbaya, then Peter Memia, and the
          current Moderator is Mr. Peterson Chege.
        </p>
        <p>
          <strong>Treasurers:</strong> Mr. Francis Muguku was the first,
          followed by Mr. John Mbaya, Mrs. Caroline Nduku Isaboke, and now Mr.
          Joseph Kibwott (as of May 2023).
        </p>
      </section>

      <section className="text-center mt-5">
        <p className="fst-italic">
          "May God continue blessing our Parish, the Father, and all the
          parishioners for their dedication to the Parish."
        </p>
        <p className="fw-bold">- Peter Memia, Former Chair of Finance & Development</p>
        <ShareButtons url={shareUrl} title={title} />
      </section>
    </div>
  );
};

export default ChurchHistory;
