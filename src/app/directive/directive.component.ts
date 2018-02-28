import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  // première liaison à sens unique : indiquons ici la classe de la <div> principale du markup
  public containerCSSClass: string = "targetcontainer";
  private defaultCSSClass: string = "";
  // pour la 3ème liaison de données
  public textMagnified: string;
  public hiddenByDefault: string = "hiddenByDefault";

  // attribut status
  public status: boolean = false; // on désobéit à l'énoncé pour syntétiser le code en appelant la fonction inverseStatus dès l'init
  public p1class: string;
  public p2class: string;

  // tableau de strings
  public texts: string[] = ['un','deux','trois'];

  constructor() { }

  ngOnInit() {
    this.defaultCSSClass = this.containerCSSClass;

    // ici on lance une mise à jour du style 4 secondes après chargement du composant
    setTimeout(() => {
      this.containerCSSClass = "othercontainer";
      this.defaultCSSClass = this.containerCSSClass;
    }, 4000);

    this.inverseStatus();

  }

  // fonction pour seconde liaison : rollover sur la div 
  pressContainer(bool: boolean): void {
    if (bool) {
      this.containerCSSClass = "hovercontainer";
    } else {
      this.containerCSSClass = this.defaultCSSClass;
    }
  }

  magnifyText(event: Event): void {
    this.textMagnified = (<HTMLInputElement>event.target).value;
    this.hiddenByDefault = "";
  }

  // inverser le status
  inverseStatus(): void {
    this.status = !this.status;
    console.log(this.status);
    this.p1class = (this.status)?"displayed":"hiddenByDefault";
    this.p2class = (!this.status)?"displayed":"hiddenByDefault";
  }

}
