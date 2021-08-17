import Head from "next/head";
import Image from "next/image";
import Header from "../src/components/header/Header";
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
        <Header />
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}

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

        .main-content {
          padding: 10px 15px;
          min-height: 100vh;
          width: 100vw;
          background-image: url(${yellowBlobMobile.src});
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-position: -84px -164px;
        }

        @media only screen and (min-width: ${theme.breakpoints.tabletMin}) {
          .main-content {
            background-image: url(${yellowBlob.src});
            background-position: -222px -278px;
          }
        }

        @media only screen and (min-width: ${theme.breakpoints.desktopMin}) {
          .main-content {
            background-position: -222px -278px;
          }
        }

        @media only screen and (min-width: ${theme.breakpoints.desktopMax}) {
          .main-content {
            background-position: 10px -333px;
          }
        }

        @media only screen and (max-width: ${theme.breakpoints.desktopMin}) {
          .desktop-nav {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
