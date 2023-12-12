import { Component } from '@angular/core';
import { Comida } from './model/comida.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //#region Variables
  comidas: Comida[] = [
    {desayuno: "Huevo con arroz", comida: "Verduras al vapor", cena: "Quesadillas"},
    {desayuno: "Huevo con arroz", comida: "Verduras al vapor", cena: "Quesadillas"},
    {desayuno: "Huevo con arroz", comida: "Verduras al vapor", cena: "Quesadillas"},
    {desayuno: "Huevo con arroz", comida: "Verduras al vapor", cena: "Quesadillas"},
    {desayuno: "Huevo con arroz", comida: "Verduras al vapor", cena: "Quesadillas"},
    {desayuno: "Huevo con arroz", comida: "Verduras al vapor", cena: "Quesadillas"},
    {desayuno: "Huevo con arroz", comida: "Verduras al vapor", cena: "Quesadillas"},
    {desayuno: "Huevo con arroz", comida: "Verduras al vapor", cena: "Quesadillas"},
  ]  
  //#endregion
}
