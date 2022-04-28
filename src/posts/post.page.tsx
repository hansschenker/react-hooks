import React, { useContext } from "react";

import PostContext from "./post.context";
import PostProvider from "./post.provider";
import PostList from "./post.list";

const PostPage = () => {
  const { postState  } = useContext(PostContext);
  const { posts} = postState;
  console.log("Postpage posts:", posts)
  return (

  <div>Post Page</div>
  // <PostProvider>
  //     <PostList posts={ posts} />
  // </PostProvider>
  )
}

export default PostPage;
