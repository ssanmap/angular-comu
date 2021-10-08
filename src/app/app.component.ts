import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inou';
  
  constructor() {
    
  }
  myf() {
    return 'hola'
  }

  escuchaCarga(e:Event) {
    console.log('padre', e)
  }
}
