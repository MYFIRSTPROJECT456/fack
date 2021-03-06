import { Component, OnInit, ViewChild } from '@angular/core';
import { AdsService } from '../../service/ads.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

import { DataTableDirective } from 'angular-datatables';
@Component({
  selector: 'app-adslist',
  templateUrl: './adslist.component.html',
  styleUrls: ['./adslist.component.css'],
  providers:[AdsService]
})
export class AdslistComponent implements OnInit {

  @ViewChild(DataTableDirective)
  private datatableElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) => console.log(dtInstance));
  }

  private adsLists:String[] = [];
  constructor(private _adsservice:AdsService, private router:Router) { }

  ngOnInit() {
    this._adsservice.getAdsList()
    .subscribe(response => this.adsLists = response)    
  }

  deleteAds(id){
    this._adsservice.deleteAds(id)
    .subscribe(response =>{
      if(response.status == 1){
        alert("Ads Delete Failed");
      }
      else{
        alert("Ads Deleted Successfully");
        this.router.navigateByUrl('/createusers').then(()=>this.router.navigate(['/adslist']))
      }
    })
  }
}
