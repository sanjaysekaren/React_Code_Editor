import React from 'react';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'

import Editor from './editor';
import Reducer from '../reducers/index';

const store = createStore(Reducer,applyMiddleware(thunk));

function App() {
  return(
    <div style={{padding:10}}>
    <Provider store={store}  >
      <Editor/>
    </Provider>
    </div>
  );
  
}

export default App;
