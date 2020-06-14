export const ADD_COUNT = 'ADD_COUNT';
export const SUB_COUNT = 'SUB_COUNT';
export const DOUBLE_COUNT = 'DOUBLE_COUNT';

export const addAction = (adder) => {
  return {
    type: ADD_COUNT ,
    payload: {
      value: adder
    }
  }
}
