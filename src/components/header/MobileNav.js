import { useState } from "react";
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

  return (
    <div>
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
      <style jsx>{`
        header {
          justify-content: space-between;
          display: flex;
        }

        .hamburger {
          cursor: pointer;
          background: 0;
          border: 0;
        }

        .mobile-nav {
          background-color: ${theme.colors.purple};
          color: ${theme.colors.white};
          transform: translateX(100%);
          transition: transform 0.3s;
          justify-content: center;
          flex-direction: column;
          padding-bottom: 30px;
          padding-right: 40px;
          position: absolute;
          padding-top: 30px;
          height: 100vh;
          display: flex;
          bottom: 0;
          right: 0;
          top: 0;
        }

        @media only screen and (min-device-width: 320px) and (max-device-width: 812px) and (orientation: landscape) {
          .mobile-nav {
            display: block;
          }
        }

        .mobile-nav.open {
          transform: unset;
        }

        .close-nav {
          transition: transform 0.3s;
          transform: translateX(100%);
          position: absolute;
          cursor: pointer;
          display: block;
          background: 0;
          z-index: 100;
          right: 5px;
          border: 0;
          top: 5px;
        }

        .close-nav.open {
          animation-fill-mode: forwards;
          animation-duration: 0.6s;
          animation-name: rollIn;
          animation-delay: 0.3s;
        }

        .mobile-nav ul {
          padding-left: ${theme.spacing.small};
        }

        .mobile-nav li {
          margin-bottom: ${theme.spacing.large};
          padding: 5px 10px 5px 45px;
          vertical-align: middle;
          list-style-type: none;
          list-style: none;
          font-size: 20px;
        }

        .mobile-nav .about {
          background: url(${about.src}) no-repeat left center;
          list-style: none;
        }

        .mobile-nav .guides {
          background: url(${guides.src}) no-repeat left center;
          list-style: none;
        }

        .mobile-nav .faq {
          background: url(${faq.src}) no-repeat left center;
          list-style: none;
        }

        .mobile-nav .shop {
          background: url(${shop.src}) no-repeat left center;
          list-style: none;
        }

        .mobile-nav .contact {
          background: url(${contact.src}) no-repeat left center;
          list-style: none;
        }

        @keyframes rollIn {
          from {
            transform: translateX(100%) rotate(0deg);
          }

          to {
            transform: translateX(0%) rotate(-180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default MobileNav;
