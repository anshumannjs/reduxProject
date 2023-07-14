const fetchData = ()=>{
    return (dispatch)=>{
        const url='https://jsonplaceholder.typicode.com/posts';
        return func1().then(([res,json])=>{
            console.log(json)
            dispatch({
                type: 'data',
                payload: json
            })
        })
        // fetch(url)
        // .then((response)=>response.json())
        // .then((json)=>{a=json;})
        
    }
}

function func1(){
    const url='https://jsonplaceholder.typicode.com/posts';
    return fetch(url)
    .then(res=>Promise.all([res,res.json()]));
}

export default fetchData;