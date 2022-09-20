import AsyncStorage from "@react-native-async-storage/async-storage";
import trackerApi from "../api/tracker";
import createDataContext from "./createDataContext";

function authReducer(state, action) {
  switch (action.type) {
    case `add_error`:
      return { ...state, errorMessage: action.payload };
    case `signup`:
      return { errorMessage: ``, token: action.payload };
    default:
      return state;
  }
}

// to do Actions
function signup(dispatch) {
  return async ({ email, password }) => {
    try {
      const { data } = await trackerApi.post(`/signup`, {
        email,
        password,
      });

      await AsyncStorage.setItem(`token`, data.token);
      dispatch({ type: `signup`, payload: data.token });
    } catch (err) {
      dispatch({
        type: `add_error`,
        payload: `Something went wrong with user signup`,
      });
    }
  };
}

function signin(dispatch) {
  return (email, password) => {
    // try to signin
    // handle access by updating state
    // handle failure by showing error message (somehow)
  };
}

function signout(dispatch) {
  return () => {
    // show singout
  };
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: `` }
);

//http://10.0.2.2:3000
