import Image from "next/image";
import headerLogo from "../../../public/header/lightbulb-logo.svg";
import styles from "../../../styles/Home.module.css";
import theme from "../../../theme";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <section>
      <header className={styles.constraint}>
        <a href="https://nextjs.org">
          <Image src={headerLogo} alt="Learn Fitness logo" />
        </a>
        <MobileNav />
        <nav className="desktop-nav">
          <ul className="nav-items">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Guides</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
      <style jsx>{`
        header {
          justify-content: space-between;
          display: flex;
        }

        .nav {
          cursor: pointer;
          background: 0;
          border: 0;
        }

        .nav-items {
          display: flex;
          list-style-type: none;
        }

        .nav-items li {
          margin-left: ${theme.spacing.small};
        }

        @media only screen and (max-width: 1023px) {
          .desktop-nav {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Header;
