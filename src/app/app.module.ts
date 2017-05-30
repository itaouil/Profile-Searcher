import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Imports
import { FormsModule } from '@angular/forms';

// Providers
import { GithubService } from './services/github.service';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ProfileComponent } from './components/profile.component';

@NgModule({
  imports:      [BrowserModule, HttpModule, FormsModule],
  declarations: [AppComponent, ProfileComponent],
  bootstrap:    [AppComponent],
  providers: [GithubService]
})

export class AppModule { }
