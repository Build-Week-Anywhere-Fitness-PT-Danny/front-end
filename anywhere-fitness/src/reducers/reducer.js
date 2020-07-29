import {
  FETCHING_CLASSES_START,
  FETCHING_CLASSES_SUCCESS,
  FETCHING_CLASSES_FAILURE,
  ADD_VALUE,
  ADD_SELECT,
  UPDATE_RESULTS,
} from '../actions/actions';
// import _ from 'lodash';

const initialState = {
  isFetching: false,
  results: [],
  newResults: [],
  error: '',
  values: '',
  select: 'name',
};

const filterResults = (value, resultsArray) => {
  // const re = new RegExp(_.escapeRegExp(value), 'i');
  // const isMatch = (result) => re.test(result.title);
  // const compare = _.filter(resultsArray, isMatch);
  // console.log(compare);
  // return compare;
  let map = [];
  return (map = resultsArray
    .filter((resultsArray) => resultsArray.includes(value))
    .map((filteredArray) => {
      return filteredArray;
    }));
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
    case ADD_VALUE:
      return {
        ...state,
        values: action.payload,
      };
    case ADD_SELECT:
      return {
        ...state,
        select: action.payload,
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
