import { Component } from '@angular/core';

import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    phonenumber:number
  constructor(private call:CallNumber) {

  }
  async callNumber():Promise<any>{
    try{
        await this.call.callNumber(String(this.phonenumber), true);
    }
    catch(e){
      console.log(e);
    }
  }
}
