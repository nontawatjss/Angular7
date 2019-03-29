import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
 
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items: Observable<any>;

  checked1 = false;
  checked2 = false;

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    private db: AngularFireDatabase
  ) {

    //check1
    const item1 = this.db.object('DHT22');
    item1.valueChanges().subscribe(item1 => {

   if(item1['fan'] === 0){
      this.checked1 = false;
    //console.log(item['fan']);
    }else{
      this.checked1 = true;
    //console.log(item['fan']);
    }
    });


    //check2
    const item2 = this.db.object('DHT22');
    item2.valueChanges().subscribe(item2 => {

    if(item2['water'] === 0){
      this.checked2 = false;
  
    }else{
      this.checked2 = true;
    //console.log(item['fan']);
    }
    });


   }

  ngOnInit() {

    
   }

   ChangeLED1(){
    console.log("11")
    if(this.checked1 === true){
      this.db.object('DHT22').update({ fan: 0});
      //this.checked1 = false
    }else{
      this.db.object('DHT22').update({ fan: 1});
      //this.checked1 = true
    }
   }

   ChangeLED2(){

    console.log("22")

    if(this.checked2 === true){
      this.db.object('DHT22').update({ water: 0});
      //this.checked2 = false
    }else{
      this.db.object('DHT22').update({ water: 1});
      //this.checked2 = true
    }
   }

  

  

}
