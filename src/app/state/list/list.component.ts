import {Component, OnInit} from '@angular/core';
import { StateService } from '../../service/state.service';
import { State } from '../../classes/state';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[StateService]
})
export class ListComponent implements OnInit {
  private stateLists:String[]=[];
  constructor( private _stateservice:StateService, private router:Router) { }
  
  ngOnInit() {

    this._stateservice.getList()
    .subscribe(respData => this.stateLists = respData);
    
  }

  deleteState(id){
    // console.log('call', id);
    this._stateservice.deleteStateData(id)
    .subscribe(response => {
      this.router.navigateByUrl('/create').then(()=>this.router.navigate(['/statelist']));
    });
  }
}
