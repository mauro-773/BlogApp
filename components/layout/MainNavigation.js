import Link from 'next/link';
import Logo from './Logo';

const MainNavigation = () => {
   return (
      <header>
         <Link href="/">
            <a>
               <Logo />
            </a>
         </Link>

         <nav>
            <ul>
               <li>
                  <Link href="/posts">Posts</Link>
                  <Link href="/contact">Contact</Link>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default MainNavigation;

/* Cuando en el componente Link hay mas que texto (Un componente), es necesario envolverlo en una etiqueda <a> - */
