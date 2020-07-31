import {
  FETCHING_CLASSES_START,
  FETCHING_CLASSES_SUCCESS,
  FETCHING_CLASSES_FAILURE,
  ADD_VALUE,
  ADD_SELECT,
  ADD_ADMIN,
  UPDATE_RESULTS,
  SEARCHING,
} from '../actions/actions';
// import _ from 'lodash';

const initialState = {
  isFetching: false,
  results: [],
  newResults: [],
  error: '',
  values: '',
  select: '',
  admin: false,
  searching: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CLASSES_START:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case FETCHING_CLASSES_SUCCESS:
      return {
        ...state,
        results: action.payload,
        isFetching: false,
      };
    case FETCHING_CLASSES_FAILURE:
      return console.log(action.payload);
    case SEARCHING:
      return {
        ...state,
        searching: action.payload,
      };
    case ADD_VALUE:
      return {
        ...state,
        values: action.payload,
      };
    case ADD_SELECT:
      return {
        ...state,
        select: action.payload,
        searching: true,
      };
    case ADD_ADMIN:
      console.log(action.payload);
      return {
        ...state,
        admin: action.payload,
      };
    case UPDATE_RESULTS:
      return {
        ...state,
        newResults: action.payload,
      };
    default:
      return state;
  }
};
