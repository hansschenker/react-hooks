import { createContext } from "react";
import { PostState } from "./post.types";

type PostContextProps = {
  postState: PostState;
};
const PostContext = createContext<PostContextProps>( {} as PostContextProps );

export default PostContext;
