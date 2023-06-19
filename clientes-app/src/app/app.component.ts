import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //corresponde a etiqueta html
  templateUrl: './app.component.html',  //template html asociado
  styleUrls: ['./app.component.css'] //hojas de estilo asociadas al componente se peude separar por ,
})

export class AppComponent {
  title = 'Bienvenidos a Angular';
  curso: string = 'Curso Spring con Angular';
  profesor: string = 'Andres Guzman';
}
