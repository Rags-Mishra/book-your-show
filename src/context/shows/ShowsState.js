import React, { useReducer } from "react";
import ShowsContext from "./showsContext";
import showsReducer from "./showsReducer";
import axios from "axios";
import { GET_SHOWS } from "../types";
const ShowsState = (props) => {
  const initialState = {
    shows: null,
    error: null,
    loading: true,
  };
  let url = process.env.REACT_APP_API_URL;
  const [state, dispatch] = useReducer(showsReducer, initialState);
  const getShows = async () => {
    try {
      const res = await axios.get(`${url}`);
      console.log("data: ", res.data);
      dispatch({
        type: GET_SHOWS,
        payload: res?.data,
      });
    } catch (error) {
      console.log("ERROR: ", error?.reponse?.msg);
    }
  };
  return (
    <ShowsContext.Provider
      value={{
        shows: state.shows,
        getShows,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};
export default ShowsState;
