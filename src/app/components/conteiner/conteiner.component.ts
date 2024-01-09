import { Component } from '@angular/core';
import { InputsComponent } from '../inputs/inputs.component';

@Component({
  selector: 'app-conteiner',
  standalone: true,
  imports: [InputsComponent],
  templateUrl: './conteiner.component.html',
  styleUrl: './conteiner.component.css'
})
export class ConteinerComponent {

}
