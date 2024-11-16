export class Client {
  id?: number; // Rendre l'id facultatif avec le ?
  nom: string;
  email: string;
  dateArrivee: Date;
  dateDepart: Date;

  constructor(nom: string, email: string, dateArrivee: Date, dateDepart: Date) {
    this.nom = nom;
    this.email = email;
    this.dateArrivee = dateArrivee;
    this.dateDepart = dateDepart;
  }
}
