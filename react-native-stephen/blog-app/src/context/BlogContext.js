import createDataContext from "./createDataContext";

function blogReducer(state, action) {
  switch (action.type) {
    case "add_blogPost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "edit_blogPost":
      return state.map((blog) =>
        blog.id === action.payload.id
          ? {
              ...blog,
              title: action.payload.title,
              content: action.payload.content,
            }
          : blog
      );
    case "delete_blogPost":
      return state.filter((blog) => blog.id !== action.payload);
    default:
      return state;
  }
}

function addBlogPost(dispatch) {
  return (title, content, callback) => {
    dispatch({ type: `add_blogPost`, payload: { title, content } });
    callback();
  };
}

function editBlogPost(dispatch) {
  return (id, title, content, callback) => {
    dispatch({ type: `edit_blogPost`, payload: { id, title, content } });
    callback();
  };
}

function deleteBlogPost(dispatch) {
  return (id) => {
    dispatch({ type: `delete_blogPost`, payload: id });
  };
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  []
);
