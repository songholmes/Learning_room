import { Component, OnInit } from '@angular/core';
import {OiappCmtService} from './oiapp-cmt.service'

@Component({
  selector: 'app-oiapp-cmt',
  templateUrl: './oiapp-cmt.component.html',
  styleUrls: ['./oiapp-cmt.component.scss']
})
export class OiappCmtComponent implements OnInit {
  OIAppCmtList
  

  constructor(private cmtService: OiappCmtService) { }



  ngOnInit(): void {
  this.OIAppCmtList = this.cmtService.getcmt;
  }

}
