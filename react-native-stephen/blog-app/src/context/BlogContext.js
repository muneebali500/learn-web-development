import createDataContext from "./createDataContext";

function blogReducer(state, action) {
  switch (action.type) {
    case "add_blogPost":
      return [...state, { title: `blog post #${state.length + 1}` }];
    default:
      return state;
  }
}

function addBlogPost(dispatch) {
  return () => {
    dispatch({ type: `add_blogPost` });
  };
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
