import Link from 'next/link';
import Logo from './Logo';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/posts'>Posts</Link>
          </li>
          <li>
            <Link href='/contact'>Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

/* Cuando en el componente Link hay mas que texto (Un componente), es necesario envolverlo en una etiqueda <a> - */
