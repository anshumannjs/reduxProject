const reducer = (state={},action)=>{
    state=action.payload;
    return state;
}

export default reducer;