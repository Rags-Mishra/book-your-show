import { GET_SHOWS } from "../types";
export default (state,action)=>{
    switch(action.type){
        case GET_SHOWS:
            return{
                ...state,
                shows:action.payload,
                loading:false
            }
        
    }
}