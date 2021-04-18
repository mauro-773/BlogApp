import Head from 'next/head';
import { Fragment } from 'react';

import Hero from '../components/homePage/Hero';
import FeaturedPosts from '../components/homePage/FeaturedPosts';

import { getFeaturedPosts } from '../lib/postsUtil';

const HomePage = ({ featuredPosts }) => {
   return (
      <Fragment>
         <Head>
            <title>Welcome to my blog</title>
            <meta
               name="description"
               content="I post about programming and web delelopment"
            />
         </Head>
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
