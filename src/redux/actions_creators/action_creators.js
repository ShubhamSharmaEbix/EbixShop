import { Actions } from '../actions/actions';
import axios from 'axios';




export const action_creators = {
    
    getCategories  : ()=>async(dispatch)=>{
        dispatch({type : Actions.GET_CATEGORIES_REQUEST})

        try{
            const res = await axios.get('https://fakestoreapi.com/products/categories');

            if(res?.status===200){
                dispatch({type : Actions.GET_CATEGORIES_SUCCESS, payload : res.data})
            }
            else{
                dispatch({type : Actions.GET_CATEGORIES_FAILURE, payload : res.data})
            }
        }
        catch(e){
            dispatch({type : Actions.GET_CATEGORIES_FAILURE, payload : e})
        }
    },

    getAllProducts : ()=>async(dispatch)=>{
        dispatch({type : Actions.GET_ALLPRODUCTS_REQUEST})

        try{
            const res = await axios.get('https://fakestoreapi.com/products');

            if(res?.status===200){
                dispatch({type : Actions.GET_ALLPRODUCTS_SUCCESS, payload : res.data})
            }
            else{
                dispatch({type : Actions.GET_ALLPRODUCTS_FAILURE, payload : res.data})
            }
        }
        catch(e){
            dispatch({type : Actions.GET_ALLPRODUCTS_FAILURE, payload : e})
        }
    },

    getMenCategory : ()=>async(dispatch)=>{
        dispatch({type : Actions.GET_MEN_CATEGORY_REQUEST})

        try{
            const res = await axios.get("https://fakestoreapi.com/products/category/men's clothing");

            if(res?.status===200){
                dispatch({type : Actions.GET_MEN_CATEGORY_SUCCESS, payload : res.data})
            }
            else{
                dispatch({type : Actions.GET_MEN_CATEGORY_FAILURE, payload : res.data})
            }
            return res.data;
        }
        catch(e){
            dispatch({type : Actions.GET_MEN_CATEGORY_FAILURE, payload : e})
        }
    },

    getWomenCategory : ()=>async(dispatch)=>{
        dispatch({type : Actions.GET_WOMEN_CATEGORY_REQUEST})

        try{
            const res = await axios.get("https://fakestoreapi.com/products/category/women's clothing");

            if(res?.status===200){
                dispatch({type : Actions.GET_WOMEN_CATEGORY_SUCCESS, payload : res.data})
            }
            else{
                dispatch({type : Actions.GET_WOMEN_CATEGORY_FAILURE, payload : res.data})
            }
            return res.data;
        }
        catch(e){
            dispatch({type : Actions.GET_WOMEN_CATEGORY_FAILURE, payload : e})
        }
    },

    getJewelleryCategory : ()=>async(dispatch)=>{
        dispatch({type : Actions.GET_JEWELLERY_CATEGORY_REQUEST})

        try{
            const res = await axios.get("https://fakestoreapi.com/products/category/jewelery");

            if(res?.status===200){
                dispatch({type : Actions.GET_JEWELLERY_CATEGORY_SUCCESS, payload : res.data})
            }
            else{
                dispatch({type : Actions.GET_JEWELLERY_CATEGORY_FAILURE, payload : res.data})
            }
            return res.data;
        }
        catch(e){
            dispatch({type : Actions.GET_JEWELLERY_CATEGORY_FAILURE, payload : e})
        }
    }, 
    getElectronicsCategory : ()=>async(dispatch)=>{
        dispatch({type : Actions.GET_ELECTRONICS_CATEGORY_REQUEST})

        try{
            const res = await axios.get("https://fakestoreapi.com/products/category/electronics");

            if(res?.status===200){
                dispatch({type : Actions.GET_ELECTRONICS_CATEGORY_SUCCESS, payload : res.data})
            }
            else{
                dispatch({type : Actions.GET_ELECTRONICS_CATEGORY_FAILURE, payload : res.data})
            }
            return res.data;
        }
        catch(e){
            dispatch({type : Actions.GET_ELECTRONICS_CATEGORY_FAILURE, payload : e})
        }
    },

    getProduct : (productId)=>async(dispatch)=>{
        dispatch({type : Actions.GET_PRODUCT_REQUEST});

        try{
            const res = await axios.get(`https://fakestoreapi.com/products/${productId}`);

            if(res?.status === 200){
                dispatch({type : Actions.GET_PRODUCT_SUCCESS, payload : res.data});
            }
            else {
                dispatch({ type : Actions.GET_PRODUCT_FAILURE, payload : res.data})
            }
        }
        catch(e){
            dispatch({type : Actions.GET_PRODUCT_FAILURE, payload : e})
        }
    },

    storeProductToCart : (product, oprtn)=>async(dispatch)=>{
        if(oprtn==='add_item'){
            dispatch({type : Actions.ADD_PRODUCT_ITEM_TO_CART, payload : product})
        }
        else if(oprtn==='remove_item'){
            dispatch({type : Actions.REMOVE_PRODUCT_ITEM_TO_CART, payload : product})
        }
        else{
            dispatch({type : Actions.STORE_PRODUCT_TO_CART, payload : product})
        }
    }
}