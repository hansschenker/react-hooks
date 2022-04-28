import React from "react";
import PostProvider from "./post.provider";
import { Post } from "./post.types";

type PostListProps = {
  posts: Post[];
};
const PostList = ({ posts }: PostListProps) => {
  console.log("PostList posts",posts )
  return (
    <PostProvider>
    <ul>
      {posts.map((post: Post) => (
        <li> {post.title} </li>
      ))}
    </ul>        
    </PostProvider>

  );
};

export default PostList;
