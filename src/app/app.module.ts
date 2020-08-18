import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';



import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { ChatComponent } from './component/chat/chat.component';

@Injectable({
  providedIn: 'root'
})
@NgModule({
  declarations: [AppComponent, ChatComponent],
  
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), 
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    FormsModule,
    AngularFireStorageModule 
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

