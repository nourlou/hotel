import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { EmployeeService } from '../services/employee.service';
import { ChambreService } from '../chambre.service';
@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss'],
})
export class EmpAddEditComponent implements OnInit {
  empForm: FormGroup;

  pension: string[] = [
    'Tout Inclus',
    'Pension Complète',
    'Demi-Pension',
    'Petit-déjeuner',
  ];

  Type_chambre: string[] = [
    'single',
    'double',
    'triple',
    'quadruple',
  ];

  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _dialogRef: MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService,
    private _chambreService: ChambreService 
  ) {
    this.empForm = this._fb.group({
      nom: '',
      Prenom: '',
      Adresse:'',
      email: '',
      date_debut: '',
      date_fin:'',
      Numero_tel: '',
      Nombre_chambre: '',
      pension: '',
      Type_chambre: [''], // Assurez-vous que Type_chambre est bien un champ de votre formulaire
      prix: ['']
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._empService
          .updateEmployee(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Détails de client mis à jour !');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Client ajouté avec succés');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
  getPrixByType(type: string): string {
    let prix = ''; // Mettez à jour cette variable avec le prix correspondant au type sélectionné
  
    switch (type) {
      case 'single':
        prix = '$100'; // Mettez le prix correspondant ici
        break;
      case 'double':
        prix = '$150'; // Mettez le prix correspondant ici
        break;
      // Ajoutez des cas pour chaque type de chambre avec le prix correspondant
      case 'triple':
        prix = '$200'; // Mettez le prix correspondant ici
        break;
      default:
        prix = '$250';
        break;
    }
    return prix;
  }
  
  updatePrice() {
    const typeChambreControl = this.empForm.get('Type_chambre');
    const prixControl = this.empForm.get('prix');
    if (typeChambreControl && prixControl) {
      const prix = this._chambreService.getPrixByType(typeChambreControl.value);
      prixControl.setValue(prix);
    }
  }
  
  
}
