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
    {desayuno: "Chilaquiles", comida: "Saldeado de Res", cena: "Choriqueso"},
    {desayuno: "Torta Española", comida: "Filete de Pescado", cena: "Tacos Pastor"},
    {desayuno: "Coctel de Frutas", comida: "Hamburguesa", cena: "Pechuga Asada"},
    {desayuno: "Jugo Verde", comida: "Carnita Asada", cena: "Sardina Portola"},
    {desayuno: "Huevo con ejotes", comida: "Tampiqueña", cena: "Arroz con leche"},
    {desayuno: "Fruta con Yogurt", comida: "Camarones a la diabla", cena: "Tapioca"},
    {desayuno: "Huevos ahogados", comida: "Verduras al vapor", cena: "Huevo con arroz"},
  ]  
  //#endregion
}
