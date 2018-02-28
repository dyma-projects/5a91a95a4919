import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  clickOnLiaisonComponent(): void {
    console.log("Click sur composant liaison !");
  }


}
