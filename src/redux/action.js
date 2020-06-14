export const ADD_COUNT = 'ADD_COUNT';
export const SUB_COUNT = 'SUB_COUNT';

export const addCount = (adder) => ({
  type: ADD_COUNT,
  adder
});

export const subCount = (sub) => ({
  type: SUB_COUNT,
  sub
});

// 비동기
export const DOUBLE_COUNT_REQUEST = 'DOUBLE_COUNT_REQUEST';
export const DOUBLE_COUNT_SUCCESS = 'DOUBLE_COUNT_SUCCESS';
export const DOUBLE_COUNT_FAILED = 'DOUBLE_COUNT_FAILED';

// loading
export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDDEN_LOADING = 'HIDDEN_LOADING';

