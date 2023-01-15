import { AfterViewInit, Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MediaObserver, MediaChange} from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy   {
  title = 'angular-responsive-sidebar';
  mediasub: Subscription = Subscription.EMPTY;
  deviceXs: boolean=false;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
 
   constructor(private observer: BreakpointObserver, public mediaobserver: MediaObserver, private router: Router) {}
 
   ngOnInit(): void {
     this.mediasub = this.mediaobserver.media$.subscribe((result: MediaChange)=>{

      console.log(result.mqAlias);

      this.deviceXs = result.mqAlias === 'xs'? true : false;

     });
   }

 
   ngAfterViewInit() {
    setTimeout(() => {
      this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
    }, 1);
   }

   ngOnDestroy(): void {
     
    this.mediasub.unsubscribe();
  }

  routeToDeliveryList(){
    this.router.navigate(["/deliverylist", { 'data': this.deviceXs }]);
  }
}