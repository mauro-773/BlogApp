import { Fragment } from 'react';

import Hero from '../components/homePage/Hero';
import FeaturedPosts from '../components/homePage/FeaturedPosts';

import { getFeaturedPosts } from '../lib/postsUtil';

const HomePage = ({ featuredPosts }) => {
   return (
      <Fragment>
         <Hero />
         <FeaturedPosts posts={featuredPosts} />
      </Fragment>
   );
};

export const getStaticProps = async () => {
   const featuredPosts = getFeaturedPosts();

   return {
      props: {
         featuredPosts,
      },
   };
};

export default HomePage;
