import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { contadorReducer } from './contador/contador.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import { environment } from 'src/environments/environment';
import { PokemonComponent } from './contador/pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ contador: contadorReducer }), //el estado se manejará en español
    StoreDevtoolsModule.instrument({
      maxAge: 25, //Retains last 25 states
      logOnly: environment.production, //Restrict extension to ..
    }),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
