import theme from "../../../theme";

const Sprinkles = () => {
  return (
    <>
      <div className="sprinkle sprinkle-1 teal" />
      <div className="sprinkle sprinkle-2 yellow" />
      <div className="sprinkle sprinkle-3 teal" />
      <div className="sprinkle sprinkle-4 pink" />
      <div className="sprinkle sprinkle-5 orange" />
      <div className="sprinkle sprinkle-6" />
      <div className="sprinkle sprinkle-7" />
      <div className="sprinkle sprinkle-8" />
      <div className="sprinkle sprinkle-9" />
      <div className="sprinkle sprinkle-10" />
      <div className="sprinkle sprinkle-11" />
      <div className="sprinkle sprinkle-12" />
      <div className="sprinkle sprinkle-13" />
      <div className="sprinkle sprinkle-14" />
      <div className="sprinkle sprinkle-15" />
      <div className="sprinkle sprinkle-16" />
      <div className="sprinkle sprinkle-17" />
      <style jsx>{`
        .sprinkle {
          position: absolute;
          background: radial-gradient(
            circle,
            transparent 25%,
            ${theme.colors.teal} 25%
          );
          border-radius: 50%;
          width: 15px;
          height: 15px;
          transform-style: preserve-3d;
        }

        .sprinkle-1 {
          top: 2%;
          left: 40%;
          background: radial-gradient(
            circle,
            transparent 25%,
            ${theme.colors.teal} 25%
          );
        }

        .sprinkle-2 {
          top: 25%;
          right: -3%;
          background: radial-gradient(
            circle,
            transparent 25%,
            ${theme.colors.yellow} 25%
          );
        }

        .sprinkle-3 {
          top: 40%;
          left: 0%;
          background: radial-gradient(
            circle,
            transparent 25%,
            ${theme.colors.teal} 25%
          );
        }

        .sprinkle-4 {
          top: 45%;
          left: 10%;
          background: radial-gradient(
            circle,
            transparent 25%,
            ${theme.colors.pink} 25%
          );
        }

        @media only screen and (max-width: ${theme.breakpoints.tabletMin}) {
          .sprinkle-5,
          .sprinkle-6,
          .sprinkle-7,
          .sprinkle-8,
          .sprinkle-9,
          .sprinkle-10,
          .sprinkle-11,
          .sprinkle-12,
          .sprinkle-13,
          .sprinkle-14,
          .sprinkle-15,
          .sprinkle-16,
          .sprinkle-17 {
            display: none;
          }
        }

        @media only screen and (min-width: ${theme.breakpoints.tabletMin}) {
          .sprinkle-1 {
            top: 20%;
            left: -5%;
          }

          .sprinkle-2 {
            top: 50%;
            left: -10%;
          }

          .sprinkle-3 { display: none; }

          .sprinkle-4 {
            top: 15%;
            left: 20%;
          }

          .sprinkle-5 {
            top: 18%;
            left: 50%;
            background: radial-gradient(
              circle,
              transparent 25%,
              ${theme.colors.lightOrange} 25%
            );
          }

          .sprinkle-6 {
            top: 10%;
            right: 40%;
            background: radial-gradient(
              circle,
              transparent 25%,
              ${theme.colors.lightPink} 25%
            );
          }

          .sprinkle-7 {
            top: 60%;
            left: -20%;
            background: radial-gradient(
              circle,
              transparent 25%,
              ${theme.colors.pink} 25%
            );
          }

          .sprinkle-8 {
            top: 80%;
            left: -10%;
            background: radial-gradient(
              circle,
              transparent 25%,
              ${theme.colors.lightOrange} 25%
            );
          }

          .sprinkle-9 {
            bottom: 0%;
            left: 10%;
            background: radial-gradient(
              circle,
              transparent 25%,
              ${theme.colors.lightPink} 25%
              );
          }

          .sprinkle-10 {
            bottom: 10%;
            left: 40%;
            background: radial-gradient(
              circle,
              transparent 25%,
              ${theme.colors.yellow} 25%
              );
          }

          .sprinkle-11 {
            bottom: 40%;
            left: 50%;
            background: radial-gradient(
              circle,
              transparent 25%,
              ${theme.colors.green} 25%
              );
          }

          .sprinkle-12 {
            bottom: 15%;
            right: 22%;
            background: radial-gradient(
              circle,
              transparent 25%,
              ${theme.colors.teal} 25%
              );
          }

          .sprinkle-13 {
            bottom: 10%;
            right: -3%;
            background: radial-gradient(
              circle,
              transparent 25%,
              ${theme.colors.lightPink} 25%
              );
          }

          .sprinkle-14 {
            bottom: 0;
            right: -30%;
            background: radial-gradient(
              circle,
              transparent 25%,
              ${theme.colors.teal} 25%
              );
          }

          .sprinkle-14 {
            bottom: 50%;
            right: -40%;
            background: radial-gradient(
              circle,
              transparent 25%,
              ${theme.colors.white} 25%
              );
          }

          .sprinkle-15 {
            top: 25%;
            right: -30%;
            background: radial-gradient(
              circle,
              transparent 25%,
              ${theme.colors.white} 25%
              );
          }

          .sprinkle-16 {
            top: 25%;
            right: -10%;
            background: radial-gradient(
              circle,
              transparent 25%,
              ${theme.colors.white} 25%
              );
          }

          .sprinkle-17 {
            top: 10%;
            right: -15%;
            background: radial-gradient(
              circle,
              transparent 25%,
              ${theme.colors.purple} 25%
              );
          }
        }
      `}</style>
    </>
  );
};

export default Sprinkles;
