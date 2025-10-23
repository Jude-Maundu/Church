import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideMenu.css"


const SideMenu = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const handleClose = () => {
    const offcanvasEl = document.getElementById("sideMenu");
    const offcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasEl);
    if (offcanvas) offcanvas.hide();
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const menus = [
    {
      title: "Choirs",
      icon: "fa-music",
      links: [
        { name: "Upendo Choir", path: "/choirs/upendo" },
        { name: "Blessed Voices Choir", path: "/choirs/blessed-voices" },
        { name: "Singers of Christ Choir", path: "/choirs/singers-of-christ" },
      ],
    },
    {
      title: "News & Events",
      icon: "fa-newspaper",
      links: [
        { name: "Announcements", path: "/announcements" },
        { name: "Upcoming Events", path: "/events" },
        { name: "News", path: "/news" },
      ],
    },
    {
      title: "Church",
      icon: "fa-church",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Contact Us", path: "/contact" },
        { name: "Our History", path: "/history" }, // Added Our History link
        { name: "Catechist Pastoral Office" },
        { name: "Priests" },
        { name: "PPC Executive" },
      ],
    },
    {
      title: "Church Committees",
      icon: "fa-users",
      links: [
        { name: "Lectors Committee", path: "/committees/lectors" },
        { name: "Development Committee", path: "/committees/development" },
        { name: "Ushers Committee", path: "/committees/ushers" },
      ],
    },
    {
      title: "Church Groups",
      icon: "fa-users-line",
      links: [
        { name: "Catholic Men Association", path: "/groups/cma" },
        { name: "Catholic Women Association", path: "/groups/cwa" },
        { name: "Altar Servers", path: "/groups/AltarServers" }, // Corrected path
        { name: "Pontifical Missionary Children" },
        { name: "Lay Incarnate", path: "/groups/LayIncarnate" },
        { name: "Schoenstatt Movement" },
        { name: "Lay Carmelites", path: "/groups/LayCarmelites" },
        { name: "Lay Spiritans", path: "/groups/LaySpiritans" },
        { name: "Self Help Group", path: "/groups/SelfHelp" },
        { name: "Widows Association", path: "/groups/WidowsAssociation" },
      ],
    },
    {
      title: "Jumuias",
      icon: "fa-people-group",
      links: [
        { name: "St Anne", path: "/jumuias/st-anne" },
        { name: "St Augustine", path: "/jumuias/st-augustine" },
        { name: "St Claire of Assisi", path: "/jumuias/st-claire" },
        { name: "St Francis of Assisi", path: "/jumuias/st-francis" },
        { name: "St Josemaria", path: "/jumuias/st-josemaria" },
        { name: "St Jude", path: "/jumuias/st-jude" },
        { name: "St Mary", path: "/jumuias/st-mary" },
        { name: "St Michael", path: "/jumuias/st-michael" },
        { name: "St Monica", path: "/jumuias/st-monica" },
        { name: "St Padre Pio", path: "/jumuias/st-padrepio" },
        { name: "St Theresa", path: "/jumuias/st-theresa" },
      ],
    },
    {
      title: "Sacraments",
      icon: "fa-hand-holding-water",
      links: [
        { name: "Sacraments Overview", path: "/sacraments" },
        { name: "Baptism", path: "/sacraments/baptism" },
        { name: "Confirmation" },
        { name: "Confession" },
        { name: "Eucharist" },
        { name: "Holy Orders" },
        { name: "Anointing of the Sick" },
        { name: "Marriage" },
      ],
    },
    {
      title: "Youth Ministry",
      icon: "fa-child",
      links: [
        { name: "Young Catholic Adults", path: "/youth/yca" },
        { name: "Youth Serving Christ", path: "/youth/ysc" },
      ],
    },
  ];

  return (
    <div
      className="offcanvas offcanvas-start custom-offcanvas"
      tabIndex="-1"
      id="sideMenu"
      style={{ backgroundColor: "#6f4e37", color: "white", width: "280px" }}
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">Menu</h5>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>

      <div className="offcanvas-body d-flex flex-column gap-2">
        <div className="sidemenu-image-container mb-3">
          <img
            src={process.env.PUBLIC_URL + "/DSC_0176-scaled.jpg"}
            alt="St. John the Evangelist Parish"
            className="sidemenu-image"
          />
        </div>

        {/* Home */}
        <Link
          to="/"
          className="btn btn-outline-light rounded-pill text-start w-100"
          onClick={handleClose}
        >
          <i className="fa-solid fa-house me-2"></i> Home
        </Link>

        {menus.map((menu, idx) => (
          <div key={idx} className="mb-2">
            {/* Dropdown Toggle */}
            <button
              className="btn btn-outline-light rounded-pill w-100 text-start d-flex justify-content-between align-items-center"
              onClick={() => toggleDropdown(menu.title)}
            >
              <span>
                <i className={`fa-solid ${menu.icon} me-2`}></i> {menu.title}
              </span>
              <i
                className={`fa-solid fa-chevron-${
                  openDropdown === menu.title ? "up" : "down"
                }`}
              ></i>
            </button>

            {/* Collapsible Items */}
            <div
              className={`collapse mt-2 ${
                openDropdown === menu.title ? "show" : ""
              }`}
            >
              <div className="d-flex flex-column gap-1">
                {menu.links.map((link, i) =>
                  link.path ? (
                    <Link
                      to={link.path}
                      key={i}
                      className="btn btn-light rounded-pill text-start ps-4"
                      onClick={handleClose}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      key={i}
                      className="btn btn-light rounded-pill text-start ps-4 disabled"
                    >
                      {link.name}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
