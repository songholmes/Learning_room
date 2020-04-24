import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OiappCmtService {
  
  constructor() { }

  getcmt= [
      {id: 'User 1', content:'test 1', date:'2020/04/22'},
      {id: 'User 2', content:'test 2',date:'2020/04/22'}, 
      {id: 'User 3', content:'test 3',date:'2020/04/22'},]
    
  
}
