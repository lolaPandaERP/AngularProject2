import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initContactForm();
  }

  initContactForm(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  submitContactForm(): void {
    if (this.contactForm.valid) {
      // Envoyer le formulaire de contact (implémentation de la logique d'envoi ici)
      console.log('Formulaire de contact soumis !');
      console.log(this.contactForm.value);

      // Réinitialiser le formulaire après l'envoi
      this.contactForm.reset();
    }
  }
}
