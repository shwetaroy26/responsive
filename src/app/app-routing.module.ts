import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { LegalComponent } from './legal/legal.component';
import { DisconnectComponent } from './disconnect/disconnect.component';
import { ToysfactoryComponent } from './toysfactory/toysfactory.component';



const routes: Routes =[
  {path:'deliverylist', component: DeliveryListComponent},
  {path:'legal', component: LegalComponent},
  {path:'toys', component: ToysfactoryComponent},
  {path:'disconnect', component: DisconnectComponent}
];

@NgModule({
  declarations: [],
  imports: [

    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DeliveryListComponent,LegalComponent, DisconnectComponent, ToysfactoryComponent]
