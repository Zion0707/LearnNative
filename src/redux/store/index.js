import { createStore } from 'redux';
import reducer from '../reducer/index'; 

const initValue = {
    hello: '初始值o'
};

const store=createStore(reducer, initValue);

export default store;
