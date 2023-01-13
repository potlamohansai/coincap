const initialState = { data:[] };


function reducer( state=initialState, action) {
    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            return {...state, data: action.data};
        default:
            return state;
    }
}

export default reducer;