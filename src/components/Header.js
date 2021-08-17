import Image from "next/image";
import headerLogo from "../../public/header/lightbulb-logo.svg";
import nav from "../../public/header/nav.svg";

const Header = () => {
  return (
    <section>
      <header>
        <a href="https://nextjs.org">
          <Image src={headerLogo} alt="Learn Fitness logo" />
        </a>
        <button>
          <Image src={nav} alt="open navigation menu" />
        </button>
      </header>

      <style jsx>{`
        header {
          width: 100%;
        }
      `}</style>
    </section>
  );
};

export default Header;
