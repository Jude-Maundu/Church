import React, { useState } from "react";
import { Link } from "react-router-dom";

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
        { name: "Upendo Choir", path: "Upendo Choir" },
        { name: "Blessed Voices Choir", path: "Blessed Voices Choir" },
        { name: "Singers of Christ Choir", path: "Singers of Christ Choir" },
      ],
    },
    {
      title: "News & Events",
      icon: "fa-newspaper",
      links: [
        { name: "Announcements", path: "/news/announcements" },
        { name: "Upcoming Events", path: "/news/upcoming-events" },
      ],
    },
    {
      title: "Church",
      icon: "fa-church",
      links: [
        { name: "Church History", path: "/church/history" },
        { name: "Church Staff", path: "/church/mission" },
        { name: "Catechist Pastoral Office" },
        { name: "Priests" },
        { name: "PPC Executive" },
      ],
    },
    {
      title: "Church Committees",
      icon: "fa-users",
      links: [
        { name: "Lectors Committee", path: "/committees/finance" },
        { name: "Development Committee", path: "/committees/event" },
      ],
    },
    {
      title: "Church Groups",
      icon: "fa-users-line",
      links: [
        { name: "Catholic Men Association", path: "/groups/youth" },
        { name: "Catholic Women Association", path: "/groups/women" },
        { name: "Pontifical Missionary Children" },
        { name: "Lay Incarnet" },
        { name: "Schoenstatt Movement" },
        { name: "Lay Carmelites" },
        { name: "Lay Spiritans" },
        { name: "Self Help Group" },
        { name: "Widows Association" },
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
        { name: "St John Prayer Group", path: "/jumuias/st-john" },
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
        { name: "Baptism", path: "/sacraments/baptism" },
        { name: "Confirmation", path: "/sacraments/confirmation" },
        { name: "Confession" ,},
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
        { name: "Young Catholic Adults", path: "/youth/fellowship" },
        { name: "Youth Serving Christ", path: "/youth/outreach" },
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
