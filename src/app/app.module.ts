import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageViewerComponent, MessageViewerChildComponent, MessageService } from './message-viewer';

@NgModule({
  declarations: [
    AppComponent,
    MessageViewerComponent,
    MessageViewerChildComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
