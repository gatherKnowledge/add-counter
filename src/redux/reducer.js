import { ADD_COUNT, SUB_COUNT, DOUBLE_COUNT } from './action';

const initialState = { count: 0 };
const switchMap = new Map();
export default (state = initialState, action) => {
  // 왜? 다른 add count하는 코드들에서는 전부 reducer에서 더하기 처리를 진행하는 걸까? action에서 처리를 받아서 넘겨줘야하는 것 아닐까?
  switchMap.set(ADD_COUNT, {
    ...state,
    count: state.count + (action.payload && action.payload.value) || action.value
  });
  switchMap.set(SUB_COUNT, {
    ...state  
  });
  switchMap.set(DOUBLE_COUNT, {
    ...state  
  });
  return switchMap.get(action.type) || state;
}