import axios from "axios";
import { NEW_POST } from "./types";

export const newPost = (post) => async (dispatch) => {
  const { data } = await axios.post(`/api/posts/new`, post);

  dispatch({ type: NEW_POST, payload: data });
};

export const fetchPosts = () => async (dispatch) => {
  const { data } = await axios.get(`/api/posts/`);

  dispatch({ type: FETCH_POSTS, payload: data });
};
export const fetchSinglePost = () => async (dispatch) => {
  const { data } = await axios.get(`/api/posts/`);

  dispatch({ type: FETCH_POSTS, payload: data });
};
