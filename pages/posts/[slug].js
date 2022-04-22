import Head from 'next/head';

import PostContent from '../../components/postsPage/postDetail/PostContent';
import { getPostData, getPostsFiles } from '../../lib/postsUtil';

const SingleProduct = ({ singlePost }) => {
  return (
    <>
      <Head>
        <title>{singlePost.title}</title>
        <meta name='description' content={singlePost.excerpt} />
      </Head>
      <PostContent post={singlePost} />
    </>
  );
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const singlePost = getPostData(slug);

  return { props: { singlePost }, revalidate: 600 };
};

export const getStaticPaths = async () => {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames
    .map((fileName) => fileName.replace(/\.md$/, ''))
    .map((slug) => ({
      params: { slug },
    }));

  return {
    paths: slugs,
    fallback: false,
  };
};

export default SingleProduct;

/* [slug] -> /products/a-cool-product = Usar un url como id -> +SEO */
/* [id] -> /products/p1 = Usar el id -> -SEO */
