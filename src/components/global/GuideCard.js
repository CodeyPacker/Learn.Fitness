import Image from "next/image";
import theme from "../../../theme";
import styles from "../../../styles/Home.module.css";

const GuideCard = ({ colorTheme, tag, imgSrc, imgAlt, date, title }) => {
  return (
    <article className={`guide-card`}>
      <div className="content">
        <span className="tag">{tag}</span>
        <div className="image-container">
          <Image src={imgSrc} alt={imgAlt} />
        </div>
        <span className="date">{date}</span>
        <h3 className="title">{title}</h3>
      </div>

      <style jsx>{`
        .guide-card {
          background-color: transparent;
          padding: 15px;
        }

        .content {
          position: relative;
          background-color: ${theme.colors.white};
          padding: 30px 25px 35px 35px;
          border-radius: 6px;
        }

        .content:before {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          bottom: 0;
          background-color: ${theme.colors[colorTheme]};
          width: 10px;
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        }

        .tag {
          display: inline-block;
          color: ${theme.colors.white};
          padding: 4px 11px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: bold;
          margin-bottom: 12px;  
          background-color: ${theme.colors[colorTheme]};      
        }

        .image-container {
          margin-bottom: 30px;
        }

        .date {
          display: inline-block;
          font-size: 12px;
          color: ${theme.colors.purple};
          margin-bottom: 4px;
        }

        .title {
          color: ${theme.colors.blue};
          font-size: 22px;
          font-weight: 600;
        }
      `}</style>
    </article>
  );
};

export default GuideCard;
