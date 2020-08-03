import axios from 'axios';

export const FETCHING_CLASSES_START = 'FETCHING_CLASSES_START';
export const FETCHING_CLASSES_SUCCESS = 'FETCHING_CLASSES_SUCCESS';
export const FETCHING_CLASSES_FAILURE = 'FETCHING_CLASSES_FAILURE';
export const ADD_VALUE = 'ADD_VALUE';
export const ADD_SELECT = 'ADD_SELECT';
export const ADD_ADMIN = 'ADD_ADMIN';
export const UPDATE_RESULTS = 'UPDATE_RESULTS';
export const SEARCHING = 'SEARCHING';
export const ADD_JOINED_CLASS = 'ADD_JOINED_CLASS';
export const ADD_CLASS_TO_DB = 'ADD_CLASS_TO_DB';

export const getClasses = () => (dispatch) => {
  dispatch({ type: FETCHING_CLASSES_START });
  axios
    .get('https://anywhere-fitness-bw-2020.herokuapp.com/api/classes')
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCHING_CLASSES_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: FETCHING_CLASSES_FAILURE,
        payload: err.response.statusText,
      });
    });
};

export const addJoinedClass = (value) => (dispatch) => {
  dispatch({ type: ADD_JOINED_CLASS, payload: value });
};

export const addClassToDB = (value) => (dispatch) => {
  dispatch({ type: ADD_CLASS_TO_DB, payload: value });
};

export const searchingVal = (value) => (dispatch) => {
  dispatch({ type: SEARCHING, payload: value });
};

export const addValue = (value) => (dispatch) => {
  dispatch({ type: ADD_VALUE, payload: value });
};

export const addSelect = (value) => (dispatch) => {
  dispatch({ type: ADD_SELECT, payload: value });
};

export const addAdmin = (value) => (dispatch) => {
  console.log(value);
  dispatch({ type: ADD_ADMIN, payload: value });
};

export const updateResults = (results) => (dispatch) => {
  dispatch({ type: UPDATE_RESULTS, payload: results });
};
