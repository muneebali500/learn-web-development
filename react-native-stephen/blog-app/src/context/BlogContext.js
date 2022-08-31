import createDataContext from "./createDataContext";

function blogReducer(state, action) {
  switch (action.type) {
    case "add_blogPost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `blog post #${state.length + 1}`,
        },
      ];
    case "delete_blogPost":
      return state.filter((blog) => blog.id !== action.payload.id);
    default:
      return state;
  }
}

function addBlogPost(dispatch) {
  return () => {
    dispatch({ type: `add_blogPost` });
  };
}

function deleteBlogPost(dispatch) {
  return (id) => {
    dispatch({ type: `delete_blogPost`, payload: { id } });
  };
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
