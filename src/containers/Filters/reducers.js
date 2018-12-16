import { FL_UPDATE_FILTER, FL_RESET } from './constants';


const defaultState = {
  // height: 130,
  // mass: 47,
  // hair_color: ['blond', 'brown'],
  // skin_color: ['gold', 'light'],
  // eye_color: ['red', 'blue'],
  // birth_year: '104',
  // gender: ['male', 'n/a'],
};

export const FilterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FL_UPDATE_FILTER:
      // console.log(state, action);
      // const filters = {};
      // Object.keys(action.payload).forEach(key=>)
      return {
        ...state,
        ...action.payload,
      };
    case FL_RESET:
      return defaultState;
    default:
      return state
  }
};
