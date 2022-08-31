import { Actions } from "../../actions/actions";



const initialState = [];


const manage_item = (state,args,payload)=>{


    const el = state.filter((product,id)=>payload.id===product.product.id);

    if(args==='add_item'){

       const newState = state.map((productObj,id)=>{
        if(productObj.product.id === el[0].product.id){

            return {
                ['product'] : el[0].product,
                ['item_count'] : el[0].item_count+1
            }
        }
        else{
            return productObj
        }
       })

        return newState;
    }
    else if(args==='remove_item') {

        let newState;

        if(el[0].item_count > 1){
          newState = state.map((productObj,id)=>{

              if(productObj.product.id === el[0].product.id){
                  return {
                      ['product'] : el[0].product,
                      ['item_count'] : el[0].item_count-1
                  }
              }

              else{
                  return productObj
              }
             })

        }
        else{
          newState = state.filter((productObj,id)=>{
            if(productObj.product.id !== el[0].product.id){
               return productObj;
            }
          })
        }

        return newState;
    }
    else{
        if(state.length===0 || el.length===0){
            return[
                ...state,
                {
                    ['product'] : payload,
                    ['item_count'] : 1 
                }
            ]
        }
        else{
            console.log('add 2')
            state.splice(state.indexOf(el),1,{
                ['product'] : el[0].product,
                ['item_count'] : el[0].item_count
            })
          
           return state;

        }
    }
}


export const getCartReducer = (state=initialState, action)=>{

    switch(action.type){


        case Actions.STORE_PRODUCT_TO_CART : return manage_item(state,'new_item',action.payload);

        case Actions.ADD_PRODUCT_ITEM_TO_CART : return manage_item(state,'add_item',action.payload);

        case Actions.REMOVE_PRODUCT_ITEM_TO_CART : return manage_item(state,'remove_item',action.payload);

        default : return [
            ...state
        ]
    }
}