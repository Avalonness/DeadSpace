import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MdbCarouselModule} from 'mdb-angular-ui-kit/carousel'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResumeComponent } from './resume/resume.component';
import { MediaComponent } from './media/media.component';
import { BestiaireComponent } from './bestiaire/bestiaire.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResumeComponent,
    MediaComponent,
    BestiaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
