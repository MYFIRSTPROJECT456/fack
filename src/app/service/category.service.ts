import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class CategoryService {

  private _getCategoryListUrl = "http://localhost:3000/categorylist";
  private _postCreateCategoryUrl = "http://localhost:3000/addcatdata";
  private _getCategoryByIdUrl = "http://localhost:3000/updatecat?id=";
  private _postUpdateCategoryUrl = "http://localhost:3000/updatecatdata?id=";
  private _getDeleteCategoryUrl = "http://localhost:3000/deletecategory?id=";
  private _getSubcategoryById = "http://localhost:3000/getsubcategorybycategory?id="

  constructor(private _http:Http) { }

  getCategoryList(){
   return this._http.get(this._getCategoryListUrl)
    .map((response:Response)=>response.json())
  }

  CreateCategory(inputData){
    console.log('03',inputData);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    return this._http.post(this._postCreateCategoryUrl, JSON.stringify(inputData), options)
    .map((response:Response) => response.json());
  }

  getCategoryById(id){
    return this._http.get(this._getCategoryByIdUrl+''+id)
    .map((response:Response)=>response.json());
  }

  updateCategory(inputData, id){
    var headers = new Headers({'Content-Type':'application/json'});
    var options = new RequestOptions({headers:headers});
    return this._http.post(this._postUpdateCategoryUrl+''+id, JSON.stringify(inputData), options)
    .map((response:Response)=>response.json());
  }
  deleteCategory(id){
    return this._http.get(this._getDeleteCategoryUrl+''+id)
    .map((response:Response)=>response.json());
  }

  getSubcategoryBycategory(id){
    return this._http.get(this._getSubcategoryById+''+id)
    .map((response:Response)=>response.json())
  }
}
