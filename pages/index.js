import { Fragment } from 'react';

import Hero from '../components/homePage/Hero';
import FeaturedPosts from '../components/homePage/FeaturedPosts';

const HomePage = () => {
   const dummy_posts = [
      {
         title: 'Getting Started with NextJS',
         image: 'getting-started-with-nextjs.png',
         excerpt: 'NextJS is the react framework for production!',
         date: '2022-08-02',
         slug: 'getting-started-with-nextjs',
      },
      {
         title: 'Getting Started with NextJS',
         image: 'getting-started-with-nextjs.png',
         excerpt: 'NextJS is the react framework for production!',
         date: '2022-08-02',
         slug: 'getting-started-with-nextjs2',
      },
      {
         title: 'Getting Started with NextJS',
         image: 'getting-started-with-nextjs.png',
         excerpt: 'NextJS is the react framework for production!',
         date: '2022-08-02',
         slug: 'getting-started-with-nextjs3',
      },
   ];

   return (
      <Fragment>
         <Hero />
         <FeaturedPosts posts={dummy_posts} />
      </Fragment>
   );
};

export default HomePage;
