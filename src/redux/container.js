import { connect } from 'react-redux';
import CounterPage from '../Counter';
import { ADD_COUNT, SUB_COUNT, DOUBLE_COUNT_REQUEST } from './action';

const mapStateToProp = (state) => ({
  count: state.count
});

const mapDispatchToProp = (dispatch) => ({
  addCount: (adder) => 
    dispatch({
      type: ADD_COUNT,
      adder
    }),
  subCount: (sub) => 
    dispatch({
      type: SUB_COUNT,
      sub
    }),
  doubleCount: () => {
    dispatch({
      type: DOUBLE_COUNT_REQUEST
    })
  }
});

export default connect(mapStateToProp, mapDispatchToProp)(CounterPage);
