import { combineReducers } from "redux";
import { getAllProductsReducer } from "./getAllProductsReducer/getAllProductsReducer";
import { getCartReducer } from "./getCartReducer/getCartReducer";
import { getCategoriesReducer } from "./getCategoriesReducer/getCategoriesReducer";
import { getElectronicsCategoryReducer } from "./getElectronicsCategoryReducer/getElectronicsCategoryReducer";
import { getJeweleryCategoryReducer } from "./getJeweleryCategoryReducer/getJeweleryCategoryReducer";
import { getMenCategoryReducer } from "./getMenCategoryReducer/getMenCategoryReducer";
import { getProductReducer } from "./getProductReducer/getProductReducer";
import { getWomenCategoryReducer } from "./getWomenCategoryReducer/getWomenCategoryReducer";





export const rootReducer = combineReducers({
    getCategories : getCategoriesReducer,
    getAllProducts : getAllProductsReducer,
    getMenCategory : getMenCategoryReducer,
    getWomenCategory : getWomenCategoryReducer,
    getElectronicsCategory : getElectronicsCategoryReducer,
    getJewelleryCategory : getJeweleryCategoryReducer,
    getProduct : getProductReducer,
    getCart : getCartReducer
})