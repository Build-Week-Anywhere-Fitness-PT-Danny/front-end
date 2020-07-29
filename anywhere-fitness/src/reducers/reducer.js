import {
  FETCHING_CLASSES_START,
  FETCHING_CLASSES_SUCCESS,
  FETCHING_CLASSES_FAILURE,
  ADD_VALUE,
} from '../actions/actions';
import _ from 'lodash';

const initialState = {
  isFetching: false,
  results: [],
  newResults: [
    {
      name: 'Pilates',
      type: 'cardio',
      startTime: '1:00pm',
      duration: '1 hour',
      intensity: 'medium',
      location: 'mall',
      numberOfRegisteredAttendees: 11,
      maxClassSize: 20,
    },
  ],
  error: '',
  values: '',
  select: 'all',
};

const filterResults = (value, resultsArray) => {
  const re = new RegExp(_.escapeRegExp(value), 'i');
  const isMatch = (result) => re.test(result.title);
  const compare = _.filter(resultsArray, isMatch);
  return compare;
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
        results: [...state.results, action.payload],
        isFetching: false,
      };
    case FETCHING_CLASSES_FAILURE:
      return console.log(action.payload);
    case ADD_VALUE:
      return {
        ...state,
        values: action.payload,
        newResults: filterResults(action.payload, state.results),
      };
    default:
      return state;
  }
};
