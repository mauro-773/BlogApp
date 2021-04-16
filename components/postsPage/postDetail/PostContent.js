import ReactMarkdown from 'react-markdown';
import PostHeader from './PostHeader';
import classes from './PostContent.module.css';

const dummy_post = {
   title: 'Getting Started with NextJS',
   image: 'getting-started-with-nextjs.png',
   date: '2022-08-02',
   slug: 'getting-started-with-nextjs',
   content: '# This is a first post!',
};

const PostContent = () => {
   const imagePath = `/images/posts/${dummy_post.slug}/${dummy_post.image}`;

   return (
      <article className={classes.content}>
         <PostHeader title={dummy_post.title} image={imagePath} />
         <ReactMarkdown>{dummy_post.content}</ReactMarkdown>
      </article>
   );
};

export default PostContent;
