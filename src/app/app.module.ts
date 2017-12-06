import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent2 } from './app.component';
import { Test } from './test.component';

const page: Routes = [
  { path: 'page1', component: AppComponent2 },
  { path: 'page2', component: Test }

];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
     page ,{useHash:true}
    )

  ],
  declarations: [Test, AppComponent2],
  bootstrap: [AppComponent2]
})

export class AppModule {



}

