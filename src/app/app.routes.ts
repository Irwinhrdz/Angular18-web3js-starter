import { RouterModule, Routes } from '@angular/router';
import { web3Component } from './web3/web3.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [ {
    path: '',
    component: web3Component,
   
  },];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(routes, { }),
    ],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}