"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navlink from "./Navlink";
import { usePathname } from "next/navigation";
import Select from "react-select";

const options = [
  { value: "EN1", label: "EN" },
  { value: "EN2", label: "FR" },
  { value: "EN3", label: "GER" },
  { value: "EN4", label: "BAN" },
];

const Header = () => {
  const initialSelected = options.find((option) => option.label === "EN");

  const [selected, setSelected] = useState(initialSelected);
  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
  };
  const [mobileMenu, setMobileMenu] = useState(false);
  const [home, setHome] = useState(false);
  const [service, setService] = useState(false);
  const [page, setPage] = useState(false);
  const [blog, setBlog] = useState(false);
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  const mobileMenuOpen = () => {
    setMobileMenu(true);
    setIsOverlayActive(true);
    document.body.classList.add("disable-scroll");
  };

  const mobileMenuClose = () => {
    setMobileMenu(false);
    setIsOverlayActive(false);
    document.body.classList.remove("disable-scroll");
  };
  const serviceHandler = () => {
    setService(!service);
  };
  const pageHandler = () => {
    setPage(!page);
  };
  const [currentPath, setCurrentPath] = useState(null);

  // Get the current pathname using usePathname hook
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const [scrollClassName, setScrollClassName] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollClassName("sticky-menu");
      } else {
        setScrollClassName("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Search Popup
  const [isActive, setIsActive] = useState(false);

  const togglePopup = () => {
    setIsActive(!isActive);
    document.body.classList.toggle("locked");
  };
  function preloader() {
    // Implementation of the preloader function
    var preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.style.display = "none";
    }
  }
  if (typeof window !== "undefined") {
    window.onload = () => {
      preloader();
    };
  }

  return (
    <header className="main-header main-header-two style4">
      <div id="sticky-header" className={`menu-area ${scrollClassName}`}>
        <div className="main-header-two__outer">
          <div className="logo-box-two">
            <Link href="/">
              <img
                // style={{
                //   width: "140px",
                //   height: "140px",
                // }}
                src="/img/resource/logo-6.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="menu-area__inner">
            <div className="mobile-nav-toggler" onClick={mobileMenuOpen}>
              <i className="fas fa-bars"></i>
            </div>
            <div className="menu-wrap">
              <nav className="menu-nav">
                <div className="main-header-two__inner">
                  <div className="main-header-two__top">
                    <div
                      className="main-header-two__top-pattern"
                      style={{
                        backgroundImage:
                          "url(/img/pattern/header-v2-pattern.png)",
                      }}
                    ></div>

                    <div className="main-header-two__top-inner">
                      <div className="main-header-two__top-left">
                        <div className="header-contact-info">
                          <ul>
                            <li>
                              <div className="icon-box">
                                <span className="icon-pin"></span>
                              </div>
                              <p>
                                913 Southerly Road, Winthrop Apt 038, Towson MD
                              </p>
                            </li>
                            <li>
                              <div className="icon-box">
                                <span className="icon-paper-plane"></span>
                              </div>
                              <p>
                                <Link href="mailto:info@theaksolutions.com">
                                  Info@theaksolutions.com
                                </Link>
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="main-header-two__top-right">
                        <div className="inner">
                          <div className="header-social-links">
                            <ul>
                              <li>
                                <Link href="#">
                                  <span className="icon-facebook"></span>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <span className="icon-twitter"></span>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <span className="icon-instagram"></span>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <span className="icon-linkedin"></span>
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="btn-box">
                            <Link href="contact">
                              Get a Free Quote{" "}
                              <span className="icon-right-arrow"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="main-header-two__bottom">
                    <div className="main-header-two__bottom-left">
                      <div className="navbar-wrap main-menu">
                        <ul className="navigation">
                          <li className="">
                            <Link href="/">Home</Link>
                            {/* <ul className="sub-menu">
                              <li>
                                <Link href="/">Home One</Link>
                              </li>
                              <li>
                                <Link href="home-2">Home Two</Link>
                              </li>
                              <li>
                                <Link href="home-3">Home Three</Link>
                              </li>
                            </ul> */}
                          </li>
                          <Navlink
                            className=""
                            activeClasses="active"
                            text="About"
                            href="/about"
                            liClassName=""
                          />

                          {/* <li
                            className={
                              currentPath === "/services" ||
                              currentPath === "/road-transport" ||
                              currentPath === "/air-transport" ||
                              currentPath === "/cargo-transport" ||
                              currentPath === "/ocean-freight" ||
                              currentPath === "/rail-transport" ||
                              currentPath === "/warehousing"
                                ? "active menu-item-has-children"
                                : "menu-item-has-children"
                            }
                          > */}
                          <li>
                            <Link href="/services">Services</Link>
                          </li>
                          <li>
                            <Link href="/carrier">Carrier Setup</Link>
                          </li>
                          {/* <ul className="sub-menu">
                              <li>
                                <Link
                                  href="/services"
                                  className={
                                    currentPath === "/services" ? "active" : ""
                                  }
                                >
                                  Services
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/road-transport"
                                  className={
                                    currentPath === "/road-transport"
                                      ? "active"
                                      : ""
                                  }
                                >
                                  Road Transport
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/air-transport"
                                  className={
                                    currentPath === "/air-transport"
                                      ? "active"
                                      : ""
                                  }
                                >
                                  Air Transport
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/cargo-transport"
                                  className={
                                    currentPath === "/cargo-transport"
                                      ? "active"
                                      : ""
                                  }
                                >
                                  Cargo Transport
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/ocean-freight"
                                  className={
                                    currentPath === "/ocean-freight"
                                      ? "active"
                                      : ""
                                  }
                                >
                                  Ocean Freight
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/rail-transport"
                                  className={
                                    currentPath === "/rail-transport"
                                      ? "active"
                                      : ""
                                  }
                                >
                                  Rail Transport
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/warehousing"
                                  className={
                                    currentPath === "/warehousing"
                                      ? "active"
                                      : ""
                                  }
                                >
                                  Warehousing
                                </Link>
                              </li>
                            </ul> */}
                          {/* </li> */}
                          <li>
                            {/*
                            className={
                              currentPath &&
                              (currentPath.startsWith("/team") ||
                                currentPath.startsWith("/projects") ||
                                currentPath.startsWith("/error"))
                                ? "active menu-item-has-children"
                                : "menu-item-has-children"
                            }
                          > */}
                            <Link href="/projects">Projects</Link>
                            {/* <ul className="sub-menu">
                              <li>
                                <Link
                                  href="/team"
                                  className={
                                    currentPath === "/team" ? "active" : ""
                                  }
                                >
                                  Team
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/team-details"
                                  className={
                                    currentPath === "/team-details"
                                      ? "active"
                                      : ""
                                  }
                                >
                                  Team Details
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/projects"
                                  className={
                                    currentPath === "/projects" ? "active" : ""
                                  }
                                >
                                  Projects
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/project-details"
                                  className={
                                    currentPath === "/project-details"
                                      ? "active"
                                      : ""
                                  }
                                >
                                  Project Details
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/error"
                                  className={
                                    currentPath === "/error" ? "active" : ""
                                  }
                                >
                                  404
                                </Link>
                              </li>
                            </ul>
                            */}
                          </li>
                          {/* <li
                            className={
                              currentPath && currentPath.startsWith("/blog")
                                ? "active menu-item-has-children"
                                : "menu-item-has-children"
                            }
                          >
                            <Link href="#">Blog</Link>
                            <ul className="sub-menu">
                              <li>
                                <Link
                                  href="/blog"
                                  className={
                                    currentPath === "/blog" ? "active" : ""
                                  }
                                >
                                  Blog
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/blog-standard"
                                  className={
                                    currentPath === "/blog-standard"
                                      ? "active"
                                      : ""
                                  }
                                >
                                  Blog standard
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/blog-details"
                                  className={
                                    currentPath === "/blog-details"
                                      ? "active"
                                      : ""
                                  }
                                >
                                  Blog Details
                                </Link>
                              </li>
                            </ul>
                          </li> */}
                          <Navlink
                            className=""
                            activeClasses="active"
                            text="Contact"
                            href="/contact"
                            liClassName=""
                          />
                        </ul>
                      </div>
                    </div>

                    <div className="main-header-two__bottom-right">
                      <div className="search-box">
                        <Link
                          href="#"
                          className="main-menu__search search-toggler icon-magnifying-glass"
                          onClick={togglePopup}
                        ></Link>
                      </div>

                      {/* <div className="main-header__language-switcher">
                        <div
                          className="select-box clearfix"
                          id="select-box-home-two"
                        >
                          <Select
                            className="selectmenu wide"
                            options={options}
                            value={selected}
                            onChange={handleChange}
                            styles={{
                              control: (provided, state) => ({
                                ...provided,
                                width: "100%",
                                height: "50px",
                                fontSize: "16px",
                                fontWeight: 500,
                                fontStyle: "normal",
                                // paddingLeft: '5px',
                                // paddingRight: '0px',
                                borderRadius: "4px",
                                transition: "all 500ms ease",
                                outline: "none",
                                backgroundColor: "#fff",
                                color: "#fff",
                              }),
                              option: (provided, state) => ({
                                ...provided,
                                display: "block",
                                width: "100%",
                                float: "none",
                                borderRight: "none",
                                color: "#ffffff",
                                fontWeight: 500,
                                lineHeight: "24px", // Set the height of options
                                listStyle: "none",
                                minHeight: "35px",
                                outline: "none",
                                // paddingLeft: '18px',
                                // paddingRight: '29px',
                                textAlign: "left",
                                cursor: "pointer",
                                transition: "all 0.2s",
                                backgroundColor: state.isSelected
                                  ? "#121213"
                                  : state.isFocused
                                  ? "#121213"
                                  : "#FF5E15",
                              }),
                            }}
                          />
                        </div>
                      </div> */}

                      <div className="contact-box">
                        <div className="icon-box">
                          <span className="icon-out-call"></span>
                        </div>
                        <div className="text">
                          <p>
                            <Link href="tel:+14438240078">+1 443 824 0078</Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`mobile-menu ${mobileMenu ? "mobile-menu-open" : ""}`}
          >
            <nav className="menu-box">
              <div
                className={`close-btn ${mobileMenu ? "rotate" : ""}`}
                onClick={mobileMenuClose}
              >
                <i className="fas fa-times"></i>
              </div>
              <div className="nav-logo">
                <Link href="/">
                  {/* <img src="/img/resource/mobile-menu-logo3.png" alt="Logo" /> */}
                  <h2>The AK Solutions</h2>
                </Link>
              </div>
              <div className="menu-outer">
                <ul className="navigation">
                  <li className="active">
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="about">About</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="carrier">Carrier Setup</Link>
                  </li>
                  <li>
                    <Link href="projects">Projects</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact</Link>
                  </li>
                  {/* <li>
                    <Link href="blog">Blog</Link>
                  </li> */}
                </ul>
              </div>
              <div className="contact-info">
                <div className="icon-box">
                  <span className="icon-telephone-handle-silhouette"></span>
                </div>
                <p>
                  <Link href="tel:+14438240078">+1 443 824 0078</Link>
                </p>
              </div>
              <div className="social-links">
                <ul className="clearfix list-wrap">
                  <li>
                    <Link href="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {/* Overlay */}
          {isOverlayActive && (
            <div className="overlay" onClick={mobileMenuClose}></div>
          )}

          {/* <!-- End Mobile Menu --> */}
        </div>
      </div>
      <div className={`search-popup ${isActive ? "active" : ""}`} id="home-two">
        <div
          className="search-popup__overlay search-toggler"
          onClick={togglePopup}
        >
          <div className="search-popup__close-icon">
            <span className="icon-plus"></span>
          </div>
        </div>
        <div className="search-popup__content">
          <form action="#">
            <label htmlFor="search" className="sr-only">
              search here
            </label>
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="btn-box"
            >
              <i className="icon-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
