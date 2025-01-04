```javascript
// pages/posts/[postId].js

import { getServerSideProps } from 'next/server';

export async function getServerSideProps(context) {
  const { postId } = context.params;
  // Fetch data based on postId
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
```