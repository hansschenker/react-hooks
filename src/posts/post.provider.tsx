import React, { useReducer } from "react";
import PostContext from "./post.context";
import  postReducer  from "./post.reducer";
import { PostState } from "./post.types";

const initialState: PostState = {
  posts: [
      {id: 1, title: "Post 1", category:"react", description:"This is Post 1"},
      {id: 2, title: "Post 2", category:"react", description:"This is Post 2"},
      {id: 3, title: "Post 3", category:"react", description:"This is Post 3"},
  ],
};

type PostProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const PostProvider = ({ children }: PostProviderProps) => {

  const [postState, dispatch] = useReducer(postReducer, initialState);

  return <PostContext.Provider value={{
      postState
  }}>{children}</PostContext.Provider>;
};

export default PostProvider;
