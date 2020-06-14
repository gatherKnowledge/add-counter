import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducer';

import './App.css';
import CounterPage from './redux/container';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterPage />
      </div>
    </Provider>
  );
}

export default App;
