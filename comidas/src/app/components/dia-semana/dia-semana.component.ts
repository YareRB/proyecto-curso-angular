import { Component ,  Input } from '@angular/core';
import { Comida } from 'src/app/model/comida.model';

@Component({
  selector: 'app-dia-semana',
  templateUrl: './dia-semana.component.html',
  styleUrls: ['./dia-semana.component.css']
})
export class DiaSemanaComponent {
//#region Variables
  @Input() diaSemana!: string;
  @Input() comida!: Comida;
//#endregion

constructor() {}

}
