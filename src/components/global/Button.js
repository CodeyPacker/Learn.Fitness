import Image from "next/image";
import headerLogo from "../../../public/header/lightbulb-logo.svg";
import theme from "../../../theme";
import styles from "../../../styles/Home.module.css";

const Button = ({ text, href, type = "anchor" }) => {
  return type === "anchor" ? (
    <a className={styles.button} href={href}>
      {text}
    </a>
  ) : (
    <button className={styles.button}>{text}</button>
  );
};

export default Button;
