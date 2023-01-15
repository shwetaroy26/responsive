import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaObserver, MediaChange} from '@angular/flex-layout';
import { Subscription } from 'rxjs';


export interface PeriodicElement {
  fname: string;
  lname: string;
  address: string;
  wishes: string;
  behavior_rating: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {fname: "Charles", lname: 'Darwin', address: 'England', wishes: 'Roses', behavior_rating: 5},
  {fname: "Mary", lname: 'Dsouza', address: 'England', wishes: 'Watch', behavior_rating: 2},
  {fname: "Jennie", lname: 'Thomas', address: 'England', wishes: 'Teddy', behavior_rating: 4},
  {fname: "Clara", lname: 'Salvatore', address: 'England', wishes: 'Violin', behavior_rating: 5},

];

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.scss']
})
export class DeliveryListComponent implements OnInit {

  displayedColumns: string[] = ['fname', 'lname', 'address', 'wishes'];
  dataSource = ELEMENT_DATA;
  deviceXs: string | null | boolean = "";
  mediasub: Subscription = Subscription.EMPTY;
  
  

  constructor(public router: Router, public route: ActivatedRoute, public mediaobserver: MediaObserver) { }

  ngOnInit(): void {

    if(!this.route.snapshot.paramMap.get('data')){
      this.mediasub = this.mediaobserver.media$.subscribe((result: MediaChange)=>{

        console.log(result.mqAlias);
  
        this.deviceXs = result.mqAlias === 'xs'? "true" : "false";
  
       });
    }
    else{
      this.deviceXs= this.route.snapshot.paramMap.get('data');
    }
    
  }

}
