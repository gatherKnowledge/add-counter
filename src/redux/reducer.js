import { ADD_COUNT, SUB_COUNT, DOUBLE_COUNT_REQUEST, DOUBLE_COUNT_SUCCESS, DOUBLE_COUNT_FAILED } from './action';

const initialState = { count: 0, isLoading: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return {
        ...state,
        count: state.count + action.adder
      };
    case SUB_COUNT:
      return {
        ...state,
        count: state.count - action.sub
      };
    case DOUBLE_COUNT_FAILED:
    case DOUBLE_COUNT_REQUEST:
      return {
        ...state,
        count: state.count,
        isLoading: true
      };
    case DOUBLE_COUNT_SUCCESS:
      return {
        ...state,
        count: state.count * 2,
        isLoading: false
      };
    default:
      return state;
  }
}