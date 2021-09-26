import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h2>Hello</h2><h2>Products</h2>`,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'My Angular ' + VERSION.major;
}
