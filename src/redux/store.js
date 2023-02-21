import rootReducer from'./rootReducer';
// import {createStore} from 'redux';
// const store=createStore(rootReducer);

import {configureStore} from '@reduxjs/toolkit'
const store=configureStore({reducer:rootReducer});
export default store;