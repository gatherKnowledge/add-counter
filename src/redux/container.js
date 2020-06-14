import { connect } from 'react-redux';
import CounterPage from './../Coutner';
import { addAction } from './action';

const mapStateToProp = (state) => ({
  count: state.count
});

const mapDispatchToProp = (dispatch) => ({
  addCount: (adder) =>
    dispatch(addAction(adder))
});

export default connect(mapStateToProp, mapDispatchToProp)(CounterPage);
