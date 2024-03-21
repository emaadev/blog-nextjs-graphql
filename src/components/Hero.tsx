import Image from "next/image";

import leftImage from "/public/left-hero-img.png";
import rightImage from "/public/right-hero-img.png";
import { BiSearchAlt } from "react-icons/bi";

import styles from "@/styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.mainSection}>
      <header className={styles.headerContainer}>
        <h1 className={styles.title}>
          Do you want to study code? <br /> <span>Here we are!</span>
        </h1>
        <div className={styles.underline} />
        <p className={styles.subtitle}>
          The perfect blog to boost your IT Career 🚀
        </p>
      </header>

      <div className={styles.searchBarContainer}>
        <div className={styles.searchBar}>
          <BiSearchAlt />
          Find the blog you are looking for...
        </div>
      </div>

      <div className={styles.imagesContainer}>
        <Image
          src={leftImage}
          className={styles.leftImage}
          alt="Python, Node.js, PHP, Java, JavaScript"
        />
        <Image
          src={rightImage}
          className={styles.rightImage}
          alt="React, Angular, Vue, Ruby on Rails, .NET Core"
        />
      </div>
    </section>
  );
};

export default Hero;
