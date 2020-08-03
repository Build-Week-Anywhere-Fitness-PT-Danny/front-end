import {
  FETCHING_CLASSES_START,
  FETCHING_CLASSES_SUCCESS,
  FETCHING_CLASSES_FAILURE,
  ADD_VALUE,
  ADD_SELECT,
  ADD_ADMIN,
  UPDATE_RESULTS,
  SEARCHING,
  ADD_JOINED_CLASS,
  ADD_CLASS_TO_DB,
} from '../actions/actions';

const initialState = {
  isFetching: false,
  results: [],
  newResults: [],
  joinedClass_array: [],
  addToDB: [],
  error: '',
  values: '',
  select: '',
  admin: false,
  searching: false,
};

const addToDB = (item) => {
  const newArray = {
    id: item.id,
    name: item.name,
    type: item.type,
    startTime: item.startTime,
    duration: item.duration,
    intensity: item.intensity,
    location: item.location,
    numberOfRegisteredAttendees: item.numberOfRegisteredAttendees + 1,
    maxClassSize: item.maxClassSize,
  };

  console.log(newArray);
  return newArray;
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
    case ADD_JOINED_CLASS:
      return {
        ...state,
        joinedClass_array: [...state.joinedClass_array, action.payload],
      };
    case ADD_CLASS_TO_DB:
      return {
        ...state,
        addToDB: addToDB(action.payload),
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
