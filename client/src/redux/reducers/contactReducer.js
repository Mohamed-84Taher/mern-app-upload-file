import { GETALLCONTACTS, GETCONTACT, TOGGLEFALSE, TOGGLETRUE } from "../types"

const initState={
    contacts:[],
    contact:{},
    edit:false
}

function contactReducer(state=initState,action){
switch (action.type) {
    case GETALLCONTACTS:
       return {
           ...state,contacts:action.payload
       }
    case GETCONTACT:
        return {
            ...state,contact:action.payload
        }
     case TOGGLETRUE:
            return {
                ...state,edit:true
            }
     case TOGGLEFALSE:
                return {
                    ...state,edit:false
                }
    default:
        return state
}
}
export default contactReducer