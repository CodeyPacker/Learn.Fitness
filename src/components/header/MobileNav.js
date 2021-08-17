import { useState, useEffect } from "react";
import Image from "next/image";
import nav from "../../../public/header/nav.svg";
import closeNav from "../../../public/header/close-nav.svg";
import about from "../../../public/header/about.svg";
import guides from "../../../public/header/guides.svg";
import faq from "../../../public/header/faq.svg";
import shop from "../../../public/header/shop.svg";
import contact from "../../../public/header/contact.svg";
import theme from "../../../theme";

const MobileNav = () => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const escFunction = (event) => {
      if (event.keyCode === 27 && navOpen) {
        setNavOpen(false);
      }
    };

    document.addEventListener("keydown", escFunction);

    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [navOpen]);

  return (
    <div>
      <div className="mobile-nav-container">
        <button className="hamburger" onClick={() => setNavOpen(true)}>
          <Image src={nav} alt="open navigation menu" />
        </button>
        <button
          className={`close-nav ${navOpen ? "open" : ""}`}
          onClick={() => setNavOpen(false)}
        >
          <Image src={closeNav} alt="close navigation menu" />
        </button>
        <div className={`mobile-nav ${navOpen ? "open" : ""}`}>
          <nav>
            <ul>
              <li className="about">
                <a href="#">About</a>
              </li>
              <li className="guides">
                <a href="#">Guides</a>
              </li>
              <li className="faq">
                <a href="#">FAQ</a>
              </li>
              <li className="shop">
                <a href="#">Shop</a>
              </li>
              <li className="contact">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {navOpen && (
        <div className={`nav-backdrop`} onClick={() => setNavOpen(false)} />
      )}
      <style jsx>{`
        .hamburger {
          border: 0;
          background: 0;
          cursor: pointer;
        }

        .nav-backdrop {
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          opacity: 0.8;
          height: 100vh;
          position: absolute;
          background-color: black;
        }

        .mobile-nav {
          top: 0;
          right: 0;
          bottom: 0;
          z-index: 2;
          height: 100vh;
          display: flex;
          padding-top: 80px;
          position: absolute;
          padding-right: 40px;
          padding-bottom: 30px;
          flex-direction: column;
          visibility: hidden;
          transition: transform 0.4s;
          transform: translateX(110%);
          color: ${theme.colors.white};
          background-color: ${theme.colors.purple};
          box-shadow: -8px -1px 15px -3px rgba(0, 0, 0, 0.2);
        }

        .mobile-nav.open {
          visibility: visible;
          transform: unset;
        }

        .close-nav {
          top: 5px;
          border: 0;
          right: 5px;
          z-index: 100;
          background: 0;
          display: block;
          cursor: pointer;
          overflow: hidden;
          visibility: hidden;
          position: absolute;
          transition: transform 0.3s;
          transform: translateX(100%);
        }

        .close-nav.open {
          animation-delay: 0.22s;
          animation-name: rollIn;
          animation-duration: 0.6s;
          animation-fill-mode: forwards;
        }

        .mobile-nav ul {
          padding-left: ${theme.spacing.small};
        }

        .mobile-nav li {
          font-size: 20px;
          list-style: none;
          list-style-type: none;
          vertical-align: middle;
          padding: 5px 10px 5px 45px;
          margin-bottom: ${theme.spacing.large};
        }

        .mobile-nav .about {
          list-style: none;
          background: url(${about.src}) no-repeat left center;
        }

        .mobile-nav .guides {
          list-style: none;
          background: url(${guides.src}) no-repeat left center;
        }

        .mobile-nav .faq {
          list-style: none;
          background: url(${faq.src}) no-repeat left center;
        }

        .mobile-nav .shop {
          list-style: none;
          background: url(${shop.src}) no-repeat left center;
        }

        .mobile-nav .contact {
          list-style: none;
          background: url(${contact.src}) no-repeat left center;
        }

        @media only screen and (min-device-width: 320px) and (max-device-width: 812px) and (orientation: landscape) {
          .mobile-nav {
            display: block;
          }
        }

        @media only screen and (min-width: ${theme.breakpoints.desktopMin}) {
          .mobile-nav-container {
            display: none;
          }
        }

        @keyframes rollIn {
          from {
            transform: translateX(100%) rotate(0deg);
          }

          to {
            visibility: visible;
            transform: translateX(0%) rotate(-180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default MobileNav;
