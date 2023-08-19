import React from 'react';
import './App.css';
import Layout from './Container/Layout/Layout';
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout />
      </Provider>
    </div>
  );
}

export default App;
