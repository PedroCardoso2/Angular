import { Component } from '@angular/core';
import { ConteinerComponent } from '../conteiner/conteiner.component';
import { InputsComponent } from '../inputs/inputs.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ConteinerComponent, InputsComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
