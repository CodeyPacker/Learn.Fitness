import Head from "next/head";
import Image from "next/image";
import Header from "../src/components/header/Header";
import Hero from "../src/components/hero/Hero";
import FeaturedGuides from "../src/components/featured-guides/FeaturedGuides";
import yellowBlobMobile from "../public/header/yellow-blob-mobile.svg";
import yellowBlob from "../public/header/yellow-blob.svg";
import theme from "../theme";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Learn Fitness</title>
        <meta
          name="description"
          content="Fitness information for all levels of experience"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main-content">
        <div className="yellow-blob-mobile">
          <Image src={yellowBlobMobile} alt="" />
        </div>
        <div className="yellow-blob">
          <Image src={yellowBlob} alt="" />
        </div>
        <Header />
        <Hero />
        <FeaturedGuides/>
      </main>
      <style jsx>{`
        header {
          justify-content: space-between;
          display: flex;
        }

        .yellow-blob-mobile {
          z-index: -1;
          position: absolute;
          top: -180px;
          left: -140px;
        }

        .yellow-blob {
          display: none;
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

        .main-content {
          min-height: 100vh;
          width: 100vw;
        }

        @media only screen and (min-width: ${theme.breakpoints.tabletMin}) {
          .yellow-blob-mobile {
            display: none;
          }

          .yellow-blob {
            display: block;
            position: absolute;
            top: -346px;
            left: -283px;
          }
        }

        @media only screen and (max-width: ${theme.breakpoints.desktopMin}) {
          .desktop-nav {
            display: none;
          }
        }

        @media only screen and (min-width: ${theme.breakpoints.desktopMax}) {
          .yellow-blob {
            left: 100px;
            top: -245px;
          }
        }

        @media only screen and (min-width: 2300px) {
          .yellow-blob {
            left: 400px;
          }
        }
      `}</style>
    </div>
  );
}
