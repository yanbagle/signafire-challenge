import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    HttpClientModule,
    FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
