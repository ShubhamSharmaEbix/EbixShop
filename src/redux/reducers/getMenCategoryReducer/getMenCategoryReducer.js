import { Actions } from "../../actions/actions";



const initialState = {
    isLoading : false,
    data : '',
    errors : {hasErrors : false, msg : ''}
}


export const getMenCategoryReducer = (state=initialState, action)=>{

    switch(action.type){

        case Actions.GET_MEN_CATEGORY_REQUEST  : return {
            ...state,
            isLoading : true
        }

        case Actions.GET_MEN_CATEGORY_SUCCESS : return{
            ...state,
            isLoading : false,
            data : action.payload
        }

        case Actions.GET_MEN_CATEGORY_FAILURE : return{
            ...state,
            isLoading : false,
            errors : { 
                hasErrors : true,
                msg : action.payload
            }
        }

        default : return {
            ...state
        }
    }
}