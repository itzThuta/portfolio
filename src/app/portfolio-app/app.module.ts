import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideHttpClient(withFetch()),
  ], 
})
export class AppModule { }