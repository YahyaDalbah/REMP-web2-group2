import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Define your routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Ensure RouterModule.forRoot() is used
  exports: [RouterModule]
})
export class AppRoutingModule {}