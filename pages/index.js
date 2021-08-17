import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../src/components/header/Header";
import yellowBlob from "../public/header/yellow-blob.svg";
import theme from "../theme";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learn Fitness</title>
        <meta
          name="description"
          content="Fitness information for all levels of experience"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={`${styles.mainContent}`}>
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

        @media only screen and (max-width: ${theme.breakpoints.desktopMin}) {
          .desktop-nav {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
