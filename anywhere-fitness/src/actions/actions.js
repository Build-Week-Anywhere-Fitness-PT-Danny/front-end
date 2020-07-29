import axios from 'axios';

export const FETCHING_CLASSES_START = 'FETCHING_CLASSES_START';
export const FETCHING_CLASSES_SUCCESS = 'FETCHING_CLASSES_SUCCESS';
export const FETCHING_CLASSES_FAILURE = 'FETCHING_CLASSES_FAILURE';
export const ADD_VALUE = 'ADD_VALUE';
// const headers = {
//   Accept: 'application/hal+json',
// };

export const getClasses = () => (dispatch) => {
  dispatch({ type: FETCHING_CLASSES_START });
  axios
    .get('https://anywhere-fitness-bw-2020.herokuapp.com/api/')
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCHING_CLASSES_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: FETCHING_CLASSES_FAILURE,
        payload: err.response.message,
      });
    });
};

export const addValue = (value) => (dispatch) => {
  dispatch({ type: ADD_VALUE, payload: value });
};
