import { Component } from '@angular/core';
import { CardComponent } from '../../Components/card/card.component';
import { FormComponent } from '../../Components/form/form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, FormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
