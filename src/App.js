import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Auth from './components/containers/Auth/Auth';

import store from './store/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Auth />
      </Provider>
    );
  }
}

export default App;
