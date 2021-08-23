import Image from "next/image";
import theme from "../../../theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../styles/Home.module.css";
import React from "react";
import Slider from "react-slick";
import Button from "../global/Button";
import blueBlob from "../../../public/featured-guides/blue-blob.svg";
import jumproping from "../../../public/guide-cards/jumproping.jpg";
import GuideCard from "../../components/global/GuideCard";

export default function FeaturedGuides() {
  let numberOfSlides = 1;

  if (typeof window !== "undefined") {
    if (window.innerWidth > 600) {
      numberOfSlides = 3;
    }
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: numberOfSlides,
    slidesToScroll: 1,
  };

  return (
    <div className="guides-bg">
      <div className={styles.constraint}>
        <div className="blue-blob">
          <Image src={blueBlob} alt="" />
        </div>
        <div className="content">
          <h2 className="heading">Featured Guides</h2>
          <Slider {...settings}>
            <div>
              <GuideCard
                colorTheme="pink"
                tag="Trending"
                imgSrc={jumproping}
                imgAlt="jumproping"
                date="12 MAR 2018"
                title="Best Jump Rope"
              />
            </div>
            <div>
              <GuideCard
                colorTheme="pink"
                tag="Most viewed"
                imgSrc={jumproping}
                imgAlt="jumproping"
                date="12 MAR 2018"
                title="Best Jump Rope"
              />
            </div>
            <div>
              <GuideCard
                colorTheme="pink"
                tag="Popular"
                imgSrc={jumproping}
                imgAlt="jumproping"
                date="12 MAR 2018"
                title="Best Jump Rope"
              />
            </div>
            <div>
              <GuideCard
                colorTheme="pink"
                tag="New"
                imgSrc={jumproping}
                imgAlt="jumproping"
                date="12 MAR 2018"
                title="Best Jump Rope"
              />
            </div>
            <div>
              <GuideCard
                colorTheme="pink"
                tag="tag"
                imgSrc={jumproping}
                imgAlt="jumproping"
                date="12 MAR 2018"
                title="Best Jump Rope"
              />
            </div>
            <div>
              <GuideCard
                colorTheme="pink"
                tag="tag"
                imgSrc={jumproping}
                imgAlt="jumproping"
                date="12 MAR 2018"
                title="Best Jump Rope"
              />
            </div>
          </Slider>
          <div className="cta">
            <Button text="SEE ALL GUIDES" href="#guides" theme="outline" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .guides-bg {
          position: relative;
          background-color: ${theme.colors.purple};
          padding: 100px 0;
        }

        .content {
          z-index: 2;
        }

        .heading {
          color: ${theme.colors.white};
          margin: 0 15px 40px;
          text-align: center;
        }

        .cta {
          margin-top: 45px;
          padding: 0 15px;
        }

        .blue-blob {
          position: absolute;
          bottom: -15%;
          left: -15%;
          pointer-events: none;
        }

        .slick-dots .slick-active {
          color: white;
        }

        @media only screen and (min-width: ${theme.breakpoints.desktopMin}) {
          .cta {
            width: fit-content;
            margin-right: auto;
            margin-left: auto;
          }
        }
      `}</style>
    </div>
  );
}
