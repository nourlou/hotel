import { Injectable } from '@angular/core';
import { TypeChambre } from './type-chambre';
@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  chambres: TypeChambre[] = [
    { numero: 1, type: 'single', capacite: 1, pension: 'Petit-déjeuner', prix: 100 },
    { numero: 2, type: 'double', capacite: 2, pension: 'Demi-pension', prix: 150 },
    // ... autres types de chambre avec leurs détails
  ];
  getPrixByType(type: string): number | undefined {
    const chambre = this.chambres.find(chambre => chambre.type.toLowerCase() === type.toLowerCase());
    return chambre ? chambre.prix : undefined;
  }

}
