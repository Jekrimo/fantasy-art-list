import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddNewArtworkComponent } from './components/add-new-artwork/add-new-artwork.component';
import { ArtworkDetailsComponent } from './components/artwork-details/artwork-details.component';
import { ArtworkListComponent } from './components/artwork-list/artwork-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-new-artwork' },
  { path: 'artwork-list', component: ArtworkListComponent },
  { path: 'add-new-artwork', component: AddNewArtworkComponent },
  { path: 'edit-artwork/:id', component: ArtworkDetailsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AddNewArtworkComponent,
    ArtworkDetailsComponent,
    ArtworkListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
