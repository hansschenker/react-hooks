import { PostAction, PostState } from "./post.types";

const postReducer = (state: PostState, action: PostAction) => {
  console.log("reducer state:", state);
  console.log("reducer action:", action);
  switch (action.type) {
      case "add":
          return {
              ...state,
              posts: [...state.posts, action.payload]
          }
      case "list":
          return {
              ...state,
              posts:  action.payload
          }

      default:
          return state;
  }
};

export default postReducer
