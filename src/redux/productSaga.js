import {takeEvery, put} from 'redux-saga/effects'
import { PRODUCT_LIST, SEARCH_PRODUCT_LIST, SET_PRODUCT_LIST } from './constant';
import { type } from '@testing-library/user-event/dist/type';
function* getProducts(){
    let data=yield fetch('http://localhost:3500/products');
    data= yield data.json();
    console.log("Clicked", data);
    yield put({ type: SET_PRODUCT_LIST, data });
}
function* searchProducts(data){
    let result=yield fetch(`http://localhost:3500/products?q=${data.query}`);
    result= yield result.json();
    console.log("Clicked", result);
    yield put({ type: SET_PRODUCT_LIST, data:result });
}
// function* searchProducts(action) {
//       let result = yield fetch(`http://localhost:3500/products?q=${action.data.query}`);
//       let searchData = yield result.json();
//       console.log("Search Result", searchData);
//       yield put({ type: SET_PRODUCT_LIST, data: searchData });
   
function * productSaga()
{
 yield takeEvery(PRODUCT_LIST,getProducts);
 yield takeEvery(SEARCH_PRODUCT_LIST,searchProducts);

}
export default productSaga;