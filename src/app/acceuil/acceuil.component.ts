import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent {
  constructor(private router : Router){}
  public goToForm(){
    this.router.navigate(["/liste"]) ;
  }
}
