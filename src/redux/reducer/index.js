const reducers = function(state, action) {
    switch( action.type ){
        case 'changeHelloVal':
            return {...state, hello: action.value}
        default:
            return state;
    }
};

export default reducers;
