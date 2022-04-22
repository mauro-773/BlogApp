import Image from 'next/image';

import classes from './Hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <h1>Hola! Soy Mauro</h1>
      <p>Este es un blog construido con Next.js y MongoDB</p>
    </section>
  );
};

export default Hero;
