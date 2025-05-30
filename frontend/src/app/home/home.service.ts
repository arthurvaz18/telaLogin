import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getCursos(){
    return ['java','Ext JS', 'Angular'];
  }
}
