import { Component, VERSION } from '@angular/core';
import { ProductService } from './product.serice';

@Component({
  selector: 'my-app',
  template: `<h2>Hello</h2>
  <img src="{{imageurl}}"/>
  <button class= "btn btn-primary">Save</button>
  <products></products>`,
  styleUrls: ['./app.component.css'],
  providers:[ProductService]
})
export class AppComponent {
  name = 'My Angular ' + VERSION.major;
  imageurl = "https://www.w3schools.com/html/pic_mountain.jpg";
}
