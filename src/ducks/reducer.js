let initialState={
    mortgage:0,
    rent:0,
    img:'',
    name:'', 
    address:'', 
    city:'', 
    curState:'',
    zipcode:0
}
// const UPDATE_NAME = 'UPDATE_NAME';
// const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
// const UPDATE_CITY = 'UPDATE_CITY' ;
// const UPDATE_STATE = 'UPDATE_STATE';
// const UPDATE_ZIPCODE ='UPDATE_ZIPCODE';
const UPDATE = 'UPDATE'
const UPDATE_IMG = 'UPDATE_IMG'
const UPDATE_MONEY = 'UPDATE_MONEY'

export function update_all(name,address,city,curState,zipcode){
    return{
        type:UPDATE,
        payload:{
            name,
            address,
            city,
            curState,
            zipcode
        }
    }
}
export function update_img(img){
    return{
        type:UPDATE_IMG,
        payload:{
            img
        }
    }
}
export function update_money(mortgage,rent){
    return{
        type:UPDATE_MONEY,
        payload:{
            mortgage,
            rent
        }
    }
}

// export function update_name(name){
//     return{
//         type:UPDATE_NAME,
//         payload:name
//     }
// }
// export function update_address(address){
//     return{
//         type:UPDATE_ADDRESS,
//         payload:address
//     }
// }
// export function update_city(city){
//     return{
//         type:UPDATE_CITY,
//         payload:city
//     }
// }
// export function update_state(curState){
//     return{
//         type:UPDATE_STATE,
//         payload:curState
//     }
// }
// export function update_zipcode(zipcode){
//     return{
//         type:UPDATE_ZIPCODE,
//         payload:zipcode
//     }
// }


function reducer(state = initialState,action){
    switch(action.type){
        case UPDATE:
        return Object.assign({},state,{state:action.payload})
        case UPDATE_IMG:
        return Object.assign({},state,{state:action.payload})
        case UPDATE_MONEY:
        return Object.assign({},state,{state:action.payload})
        // case UPDATE_NAME:
        // return Object.assign({},state,{name:action.payload});
        // case UPDATE_ADDRESS:
        // return Object.assign({},state,{address:action.payload});
        // case UPDATE_CITY:
        // return Object.assign({},state,{city:action.payload});
        // case UPDATE_STATE:
        // return Object.assign({},state,{curState:action.payload});
        // case UPDATE_ZIPCODE:
        // return Object.assign({},state,{zipcode:action.payload});
        default:
        return state
    }
};
export default reducer;