import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import PostHeader from './PostHeader';
import classes from './PostContent.module.css';

const PostContent = ({ post }) => {
   const imagePath = `/images/posts/${post.slug}/${post.image}`;
   // customComponents: Cambiamos los elementos del markdown antes de pasarlos a JSX
   const customComponents = {
      p: (paragraph) => {
         const { node } = paragraph;
         if (node.children[0].tagName === 'img') {
            const image = node.children[0];
            return (
               <div className={classes.image}>
                  <Image
                     src={`/images/posts/${post.slug}/${image.properties.src}`}
                     alt={image.properties.alt}
                     width={600}
                     height={300}
                  />
               </div>
            );
         }
         return <p>{paragraph.children}</p>;
      },
      code: (code) => {
         return (
            <SyntaxHighlighter
               style={atomDark}
               children={code.children[0]}
               language="js"
            />
         );
      },
   };

   return (
      <article className={classes.content}>
         <PostHeader title={post.title} image={imagePath} />
         <ReactMarkdown components={customComponents}>
            {post.content}
         </ReactMarkdown>
      </article>
   );
};

export default PostContent;
