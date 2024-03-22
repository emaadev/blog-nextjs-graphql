import Image from "next/image";

import leftImage from "/public/left-hero-img.png";
import rightImage from "/public/right-hero-img.png";

import styles from "@/styles/Hero.module.css";
import SearchBar from "./shared/SearchBar";

interface HeroProps {
  data: any;
}

const Hero = ({ data }: HeroProps) => {
  return (
    <section className={styles.sectionContainer}>
      <header className={styles.headerContainer}>
        <h1 className={styles.title}>
          Do you want to study code? <br /> <span>Here we are!</span>
        </h1>
        <div className={styles.underline} />
      </header>

      <SearchBar data={data} />

      <div className={styles.imagesContainer}>
        <Image
          src={leftImage}
          className={styles.leftImage}
          alt="Python, Node.js, PHP, Java, JavaScript"
          priority
        />
        <Image
          src={rightImage}
          className={styles.rightImage}
          alt="React, Angular, Vue, Ruby on Rails, .NET Core"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
