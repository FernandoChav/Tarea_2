import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';



import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  contactForm: FormGroup;
  sending = false; // Estado para mostrar "Enviando..."
  successMessage = false; // Estado para mostrar el mensaje de éxito

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(event: Event) {
    event.preventDefault(); // Previene la recarga de la página
    if (this.contactForm.invalid) {
      return;
    }
    
    // Simular el proceso de envío
    this.sending = true;
    setTimeout(() => {
      this.sending = false;
      this.successMessage = true;
    }, 2000); // Simulando 2 segundos de envío
  }

  closePopup() {
    this.successMessage = false;
    this.contactForm.reset();
  }
}
