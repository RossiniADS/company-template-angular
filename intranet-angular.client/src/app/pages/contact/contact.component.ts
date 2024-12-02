import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: false,
  
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  pageTitle = 'Contact';
  pageDescription =
    'Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.';

  breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Contact', link: '' }
  ];

  contactInfo = [
    {
      icon: 'bi bi-geo-alt',
      title: 'Address',
      description: 'A108 Adam Street, New York, NY 535022',
      aos: 'fade-up',
      delay: '200',
      fullWidth: true
    },
    {
      icon: 'bi bi-telephone',
      title: 'Call Us',
      description: '+1 5589 55488 55',
      aos: 'fade-up',
      delay: '300',
      fullWidth: false
    },
    {
      icon: 'bi bi-envelope',
      title: 'Email Us',
      description: 'info@example.com',
      aos: 'fade-up',
      delay: '400',
      fullWidth: false
    }
  ];

  formAction = 'forms/contact.php';
  formFields = [
    {
      type: 'text',
      name: 'name',
      placeholder: 'Your Name',
      required: true,
      class: 'col-md-6'
    },
    {
      type: 'email',
      name: 'email',
      placeholder: 'Your Email',
      required: true,
      class: 'col-md-6'
    },
    {
      type: 'text',
      name: 'subject',
      placeholder: 'Subject',
      required: true,
      class: 'col-md-12'
    },
    {
      type: 'textarea',
      name: 'message',
      placeholder: 'Message',
      rows: 4,
      required: true,
      class: 'col-md-12'
    }
  ];

  submitButtonLabel = 'Send Message';

  mapUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus'
    );
  }
}
