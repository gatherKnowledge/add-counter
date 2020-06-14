import React from 'react';
import './App.css';
import LoadingWave from '@bit/ngoue.playground.loading-wave';
import CounterPage from './redux/container';
import { connect } from 'react-redux';

function App({ isLoading }) {
  return (
    <>
      {isLoading ? <LoadingWave /> : ''}
      <div className="App">
        <CounterPage />
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  isLoading: state.isLoading
});
export default connect(mapStateToProps, null)(App);
