import Image from "next/image";
import theme from "../../../theme";
import Button from "../global/Button";
import styles from "../../../styles/Home.module.css";
import deadlifter from "../../../public/hero/deadlifter.svg";
import twoBlobs from "../../../public/hero/two-blobs.svg";

const Hero = () => {
  return (
    <section>
      <div className={`hero ${styles.constraint}`}>
        <div className="content">
          <h1 className="heading">
            Fitness made <span className="simple">simple</span>.
          </h1>
          <p className="subheading">
            Useful fitness information from certified fitness professionals.
          </p>
          <Button text="View Guides" href="#guides" />
        </div>
        <div className="images">
          <div className="two-blobs">
            <Image src={twoBlobs} alt="an illustrated man doing deadlifts" />
          </div>
          <div className="deadlifter">
            <Image src={deadlifter} alt="an illustrated man doing deadlifts" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          padding: 30px 0px;
        }

        .heading {
          font-weight: 500;
        }

        .subheading {
          color: ${theme.colors.blue};
          margin-bottom: ${theme.spacing.small};
        }

        .simple {
          color: ${theme.colors.purple};
          font-weight: bold;
        }

        .images {
          position: relative;
          margin-top: ${theme.spacing.large};
        }

        .two-blobs {
          position: absolute;
          transform: translateX(-30px);
          width: 550px;
          top: -50px;
        }

        @media only screen and (min-width: ${theme.breakpoints.tabletMin}) {
          .hero {
            min-height: 600px;
            display: grid;
            grid-template-columns: 1.4fr 1fr;
            align-items: center;
          }

          .images {
            position: relative;
            z-index: -1;
            max-width: 400px;
          }

          .images div {
            overflow: visible;
          }

          .deadlifter {
            position: absolute;
            bottom: -220px;
            width: 600px;
            right: -300px;
          }

          .two-blobs {
            transform: translateX(-200px);
            width: 1400px;
            top: -470px;
          }
        }

        @media only screen and (min-width: ${theme.breakpoints.tabletMax}) {
          .deadlifter {
            position: absolute;
            bottom: -220px;
            width: 600px;
            right: unset;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
