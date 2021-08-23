import Image from "next/image";
import headerLogo from "../../../public/header/lightbulb-logo.svg";
import theme from "../../../theme";
import styles from "../../../styles/Home.module.css";

const Button = ({ text, href, type = "anchor", theme }) => {
  return type === "anchor" ? (
    <a className={`${styles.button} ${theme} button`} href={href}>
      {text}

      <style jsx>{`
        .button {
          display: block;
          text-align: center;
          background-color: #41d3a2;
          color: #1b0c69;
          padding: 8px 20px;
          transition: color 0.3s;
          border-radius: 6px;
          font-weight: 700;
        }

        .button:hover {
          background-color: #36f3b4;
        }

        .button.outline {
          background-color: transparent;
          border: 1px solid white;
          border-radius: 6px;
          color: white;
          padding: 13px 25px;
          transition: background-color 0.3s;
        }

        .button.outline:hover {
          background-color: #1b0c69;
        }
        
      `}</style>
    </a>
  ) : (
    <button className={`${styles.button}`}>{text}</button>
  );
};

export default Button;
