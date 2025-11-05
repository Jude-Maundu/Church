import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import ShareButtons from "../../ShareButtons";
import { ContentContext } from "../../../ContentContext";
const ChurchHistory = () => {
  // Ensure safe access to window
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const title = "Our History - St. John the Evangelist Parish";

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { getText } = useContext(ContentContext);
  const pageTitle = getText('churchHistory','title','Our Parish History');
  const pageSubtitle = getText('churchHistory','subtitle','A Journey of Faith, Community, and Growth');
  return (
    <div className="church-history-page container py-5">
      {/* SEO & Social Sharing Metadata */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="Explore the rich history of St. John the Evangelist Parish — from its humble beginnings to its thriving faith community today." />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="A Journey of Faith, Community, and Growth" />
        <meta property="og:image" content={process.env.PUBLIC_URL + "/images/DSC_0150.jpg"} />
        <meta property="og:url" content={shareUrl} />
      </Helmet>

      {/* Hero Section */}
      <section className="text-center mb-5" data-aos="fade-up">
        <img
          loading="lazy"
          src={process.env.PUBLIC_URL + "/images/DSC_0150.jpg"}
          alt="Front view of St. John the Evangelist Parish"
          className="img-fluid rounded shadow mb-4"
          style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }}
        />
        <h1 className="display-4 fw-bold">{pageTitle}</h1>
        <p className="lead text-muted">
          {pageSubtitle}
        </p>
      </section>

      {/* Inception */}
      <section className="mb-5" data-aos="fade-up">
        <h2 className="fw-bold border-bottom pb-2 mb-3">Inception</h2>
        <p>
          The Parish was enacted in <strong>1989</strong> by the late Servant of God
          Cardinal Maurice Otunga when he was the Archbishop of Nairobi.
          However, it was not activated until <strong>1995</strong>.
        </p>
        <p>
          The Catholics who were attending Mass at the Spiritan House chapel
          organized themselves and incorporated those who attended Mass at
          Capuchin Franciscans on Bogani Road, the Shrine on Langata Road, and
          the Passionist Congregation on Ushirika Road. Together they formed a
          group that met Sundays at Spiritan House to start the Parish.
        </p>
        <p>
          Since there was no Parish priest, they requested the Archbishop’s
          guidance. He appointed <strong>Fr. Pius Onyango</strong>, the Parish
          priest of Regina Caeli, Karen, to attend meetings and guide the
          formation of the new Parish.
        </p>
      </section>

      {/* Long Term Plans */}
      <section className="mb-5 bg-light p-4 rounded shadow-sm" data-aos="fade-up">
        <h2 className="fw-bold border-bottom pb-2 mb-3">Long Term Plans</h2>
        <p>The long-term plans drawn by the Christians included:</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-transparent">
            To acquire a plot for development
          </li>
          <li className="list-group-item bg-transparent">To build a church</li>
          <li className="list-group-item bg-transparent">
            To build a Father’s house
          </li>
          <li className="list-group-item bg-transparent">
            To build a Community Centre
          </li>
          <li className="list-group-item bg-transparent">
            To grow and develop the spiritual and pastoral life of parishioners
            alongside physical development.
          </li>
        </ul>
        <p className="mt-3">
          To achieve these goals, two committees were founded: the{" "}
          <strong>Interim Parish Council</strong> and the{" "}
          <strong>Finance and Development Committee</strong>. They initiated
          monthly Harambees, and ever since, parish developments have been
          funded by the generous contributions of parishioners and well-wishers.
        </p>
      </section>

      {/* Progress of Projects */}
      <section className="mb-5" data-aos="fade-up">
        <h2 className="fw-bold border-bottom pb-2 mb-3">Progress of Projects</h2>
        <div className="row g-4 align-items-start">
          <div className="col-md-6">
            <h4>Plot</h4>
            <p>
              Due to the high cost of land, it became apparent that it would
              take years to acquire one. The committees therefore requested the
              Spiritan Congregation to donate <strong>2.5 acres</strong> for the
              Parish — a request graciously granted.
            </p>
            <h4>Church</h4>
            <p>
              Construction began in <strong>April 1999</strong>. Once the walls
              were up, Sunday Masses were celebrated in the unfinished building.
              Parishioners endured cold winds and rain, often gathering under a
              tent pitched inside the structure.
            </p>
            <h4>Community Centre</h4>
            <p>
              As the church became usable, plans for a community centre began
              due to the need for more space for groups and catechism classes.
            </p>
          </div>
          <div className="col-md-6">
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + "/images/DSC_0899.jpg"}
              alt="St. John the Evangelist Parish Church Building"
              className="img-fluid rounded shadow-lg mb-4"
            />
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + "/images/DSC_0971.jpg"}
              alt="Parish Community Hall"
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Lay Leaders */}
      <section className="mb-5" data-aos="fade-up">
        <h2 className="fw-bold border-bottom pb-2 mb-3">Lay Leaders</h2>
        <p>
          Only the positions of chairpersons and treasurers are highlighted
          here, but many others played crucial roles and are sincerely
          acknowledged.
        </p>
        <p>
          <strong>Parish Council Chairpersons:</strong> The late{" "}
          <strong>Mr. Gabriel Itela</strong>, followed by{" "}
          <strong>Mr. Peter Memia</strong>, <strong>Mr. Nicholas Njau</strong>,{" "}
          <strong>Mr. Aleke Dondo</strong>, and currently{" "}
          <strong>Mr. Antony Ndegwa</strong> (as of May 2023).
        </p>
        <p>
          <strong>Finance & Development Chairpersons:</strong> The late{" "}
          <strong>Mr. James Gacheru</strong>, followed by{" "}
          <strong>Mr. John Mbaya</strong>, <strong>Mr. Peter Memia</strong>, and
          currently <strong>Mr. Peterson Chege</strong>.
        </p>
        <p>
          <strong>Treasurers:</strong> <strong>Mr. Francis Muguku</strong> (first),
          followed by <strong>Mr. John Mbaya</strong>,{" "}
          <strong>Mrs. Caroline Nduku Isaboke</strong>, and currently{" "}
          <strong>Mr. Joseph Kibwott</strong> (as of May 2023).
        </p>
      </section>

      {/* Closing Quote & Share */}
      <section className="text-center mt-5" data-aos="fade-up">
        <p className="fst-italic">
          "May God continue blessing our Parish, the Fathers, and all the
          parishioners for their dedication and service."
        </p>
        <p className="fw-bold">
          — Peter Memia, Former Chair of Finance & Development
        </p>
        <ShareButtons url={shareUrl} title={title} />
      </section>
    </div>
  );
};

export default ChurchHistory;
