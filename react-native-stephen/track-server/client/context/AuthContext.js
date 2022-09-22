import AsyncStorage from "@react-native-async-storage/async-storage";
import trackerApi from "../api/tracker";
import createDataContext from "./createDataContext";
// import { navigate } from "../navigationRef";

function authReducer(state, action) {
  switch (action.type) {
    case `add_error`:
      return { ...state, errorMessage: action.payload };
    case `signin`:
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
      dispatch({ type: `signin`, payload: data.token });
      // navigate("TrackListFlow");
    } catch (err) {
      dispatch({
        type: `add_error`,
        payload: `Something went wrong with user signup`,
      });
    }
  };
}

function signin(dispatch) {
  return async ({ email, password }) => {
    try {
      const { data } = await trackerApi.post(`/signin`, {
        email,
        password,
      });

      await AsyncStorage.setItem(`token`, data.token);
      dispatch({ type: `signin`, payload: data.token });
      // navigate("TrackListFlow");
    } catch (err) {
      dispatch({
        type: `add_error`,
        payload: `Something went wrong with user signin`,
      });
    }
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
